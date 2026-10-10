/* Shared by the static website and the Node regression checks. */
(function (root) {
  "use strict";

  const STORAGE_KEY = "rome-architecture-map.checkins.v1";
  const MAX_NOTE_LENGTH = 1000;

  function today() {
    const date = new Date();
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
  }

  function validDate(value) {
    if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(value) || value.startsWith("0000")) return false;
    const date = new Date(`${value}T12:00:00Z`);
    return Number.isFinite(date.getTime()) && date.toISOString().slice(0, 10) === value && value <= today();
  }

  function invalid() {
    return new Error("invalid");
  }

  function decode(text, knownIds) {
    let data;
    try { data = JSON.parse(text); } catch { throw invalid(); }
    if (!data || data.version !== 1 || !Array.isArray(data.records) || data.records.length > 10000) throw invalid();
    const records = new Map();
    const seen = new Set();
    let skipped = 0;
    for (const record of data.records) {
      if (!record || typeof record.buildingId !== "string" || !record.buildingId ||
          seen.has(record.buildingId) || !validDate(record.date) ||
          typeof record.note !== "string" || record.note.length > MAX_NOTE_LENGTH) throw invalid();
      seen.add(record.buildingId);
      if (!knownIds.has(record.buildingId)) { skipped++; continue; }
      records.set(record.buildingId, { buildingId: record.buildingId, date: record.date, note: record.note });
    }
    return { records, skipped };
  }

  class Store {
    constructor(storage, buildingIds) {
      this.storage = storage;
      this.knownIds = new Set(buildingIds);
      this.records = new Map();
      this.loadError = null;
      try {
        if (!storage) throw new Error("storage");
        const saved = storage.getItem(STORAGE_KEY);
        if (saved !== null) this.records = decode(saved, this.knownIds).records;
      } catch (error) {
        // Preserve unreadable saved data rather than silently overwriting it.
        this.loadError = error.message === "invalid" ? "corrupt" : "storage";
      }
    }

    get(id) {
      const record = this.records.get(id);
      return record ? { ...record } : null;
    }

    has(id) { return this.records.has(id); }
    get size() { return this.records.size; }

    commit(records) {
      if (this.loadError) throw new Error(this.loadError);
      try {
        this.storage.setItem(STORAGE_KEY, JSON.stringify({ version: 1, records: [...records.values()] }));
      } catch { throw new Error("storage"); }
      // Only update the UI's state after persistent storage succeeds.
      this.records = records;
    }

    save(id, date, note = "") {
      if (!this.knownIds.has(id) || !validDate(date) || typeof note !== "string" || note.length > MAX_NOTE_LENGTH) throw invalid();
      const records = new Map(this.records);
      records.set(id, { buildingId: id, date, note: note.trim() });
      this.commit(records);
    }

    remove(id) {
      const records = new Map(this.records);
      records.delete(id);
      this.commit(records);
    }

    exportJSON() {
      return JSON.stringify({ version: 1, exportedAt: new Date().toISOString(), records: [...this.records.values()] }, null, 2);
    }

    importJSON(text) {
      const { records: incoming, skipped } = decode(text, this.knownIds);
      const records = new Map(this.records);
      let added = 0;
      let kept = 0;
      incoming.forEach((record, id) => {
        if (records.has(id)) { kept++; return; }
        records.set(id, record);
        added++;
      });
      this.commit(records);
      return { added, kept, skipped };
    }
  }

  const api = { Store, STORAGE_KEY, MAX_NOTE_LENGTH, today, validDate };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  else root.RomeCheckins = api;
})(globalThis);
