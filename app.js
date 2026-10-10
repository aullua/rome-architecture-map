/* global L, noUiSlider, BUILDINGS */

const PERIOD_COLORS = {
  "Ancient Roman": "marker-ancient-roman",
  "Early Christian": "marker-early-christian",
  Medieval: "marker-medieval",
  Renaissance: "marker-renaissance",
  Baroque: "marker-baroque",
  Neoclassical: "marker-neoclassical",
  Modern: "marker-modern",
  Contemporary: "marker-contemporary",
};

const PERIOD_IMAGES = {
  "Ancient Roman":
    "https://commons.wikimedia.org/wiki/Special:FilePath/Colosseum_-_Rome_-_Italy_(16800139540).jpg",
  "Early Christian":
    "https://commons.wikimedia.org/wiki/Special:FilePath/Basilica_di_Santa_Maria_Maggiore_1.jpg",
  Medieval:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Santa_Maria_in_Trastevere_2014.jpg",
  Renaissance:
    "https://commons.wikimedia.org/wiki/Special:FilePath/St._Peter%27s_Basilica_(51188242904).jpg",
  Baroque:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Trevi_fountain_with_crowds.jpg",
  Neoclassical:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Piazza_del_Popolo_-_Rome.jpg",
  Modern:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Vittoriano%2C_Rome%2C_Italy.jpg",
  Contemporary:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Maxxi_Museum_(67561577).jpeg",
};
const WIKIPEDIA_TITLE_OVERRIDES = {
  "St Peter's Basilica": "St Peter's Basilica",
  "Piazza San Pietro": "St. Peter's Square",
  "Basilica of San Giovanni in Laterano": "Archbasilica of Saint John Lateran",
  "San Paolo fuori le Mura": "Basilica of Saint Paul Outside the Walls",
  "Vittoriano (Altare della Patria)": "Victor Emmanuel II Monument",
  "Rome Convention Center (La Nuvola)": "Rome Convention Center La Nuvola",
  "Tempietto of Bramante": "Tempietto",
  "Giardino degli Aranci": "Giardino degli Aranci",
};

const DEFAULT_RANGE = [-500, 2024];

const PERIOD_ORDER = [
  "Ancient Roman",
  "Early Christian",
  "Medieval",
  "Renaissance",
  "Baroque",
  "Neoclassical",
  "Modern",
  "Contemporary",
];
const PERIOD_RANGES = {
  "Ancient Roman": { start: DEFAULT_RANGE[0], end: 299 },
  "Early Christian": { start: 300, end: 799 },
  Medieval: { start: 800, end: 1399 },
  Renaissance: { start: 1400, end: 1599 },
  Baroque: { start: 1600, end: 1749 },
  Neoclassical: { start: 1750, end: 1899 },
  Modern: { start: 1900, end: 1969 },
  Contemporary: { start: 1970, end: DEFAULT_RANGE[1] },
};
const TYPE_ORDER = [
  "Religious Architecture",
  "Civic Architecture",
  "Monument",
  "Urban Space",
  "Landscape Architecture",
];
const HERITAGE_ORDER = [
  "UNESCO World Heritage",
  "National Monument",
  "Protected Monument",
];
const ARCHITECTURE_SUBTYPES = [
  "Religious Architecture",
  "Civic Architecture",
  "Monument",
];
const TYPE_SVGS = {
  "Religious Architecture": `
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="M16 4v5"/>
      <path d="M10 26V13l6-5 6 5v13"/>
      <path d="M13 26v-6h6v6"/>
      <path d="M7 26h18"/>
    </svg>
  `,
  "Civic Architecture": `
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="M6 26h20"/>
      <path d="M8 26V12l8-5 8 5v14"/>
      <path d="M12 26v-7h8v7"/>
      <path d="M9 12h14"/>
    </svg>
  `,
  Monument: `
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="M7 26h18"/>
      <path d="M10 26V14a6 6 0 0 1 12 0v12"/>
      <path d="M13 26v-8h6v8"/>
    </svg>
  `,
  "Landscape Architecture": `
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="M16 26v-8"/>
      <path d="M10 18a6 6 0 1 1 12 0"/>
      <path d="M9 26h14"/>
    </svg>
  `,
  "Urban Space": `
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <rect x="7" y="9" width="18" height="14" rx="2"/>
      <path d="M12 14h8M12 18h8"/>
    </svg>
  `,
};
const TYPE_LEGEND_ITEMS = [
  { key: "religious", type: "Religious Architecture" },
  { key: "civic", type: "Civic Architecture" },
  { key: "monument", type: "Monument" },
  { key: "landscape", type: "Landscape Architecture" },
  { key: "urban", type: "Urban Space" },
];

const LABELS = {
  en: {
    period: {
      "Ancient Roman": "Ancient Roman",
      "Early Christian": "Early Christian",
      Medieval: "Medieval",
      Renaissance: "Renaissance",
      Baroque: "Baroque",
      Neoclassical: "Neoclassical",
      Modern: "Modern",
      Contemporary: "Contemporary",
    },
    type: {
      "Religious Architecture": "Religious Architecture",
      "Civic Architecture": "Civic Architecture",
      Monument: "Monument",
      "Urban Space": "Urban Space",
      "Landscape Architecture": "Landscape Architecture",
    },
    heritage: {
      "UNESCO World Heritage": "UNESCO World Heritage",
      "National Monument": "National Monument",
      "Protected Monument": "Protected Monument",
    },
  },
  zh: {
    period: {
      "Ancient Roman": "古罗马",
      "Early Christian": "早期基督教",
      Medieval: "中世纪",
      Renaissance: "文艺复兴",
      Baroque: "巴洛克",
      Neoclassical: "新古典主义",
      Modern: "现代",
      Contemporary: "当代",
    },
    type: {
      "Religious Architecture": "宗教建筑",
      "Civic Architecture": "公共建筑",
      Monument: "纪念性建筑",
      "Urban Space": "城市空间",
      "Landscape Architecture": "景观建筑",
    },
    heritage: {
      "UNESCO World Heritage": "世界文化遗产",
      "National Monument": "国家级文保",
      "Protected Monument": "受保护文物",
    },
  },
};

const I18N = {
  en: {
    title: "Rome Architecture Map Demo",
    tagline: "Rome wasn't built in a day.",
    filters: "Filters",
    period: "Period",
    type: "Type",
    heritage: "Heritage",
    constructionWindow: "Construction Window",
    resetRange: "Reset Range",
    tabs: {
      all: "All",
      architecture: "Architecture",
      landscape: "Landscape",
      urban: "Urban Space",
    },
    popup: {
      period: "Period",
      type: "Type",
      heritage: "Heritage",
    },
  },
  zh: {
    title: "罗马建筑地图演示",
    tagline: "罗马不是一天建成的。",
    filters: "筛选",
    period: "时期",
    type: "类型",
    heritage: "遗产等级",
    constructionWindow: "建造时间",
    resetRange: "重置范围",
    tabs: {
      all: "全部",
      architecture: "建筑",
      landscape: "景观建筑",
      urban: "城市空间",
    },
    popup: {
      period: "时期",
      type: "类型",
      heritage: "遗产等级",
    },
  },
};

let currentLang = "en";

const map = L.map("map", {
  center: [41.9028, 12.4964],
  zoom: 13,
});

L.tileLayer(
  "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
  {
    subdomains: "abcd",
    maxZoom: 20,
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> ' +
      '&copy; <a href="https://carto.com/attributions" target="_blank">CARTO</a>',
  },
).addTo(map);

const markerLayer = L.layerGroup().addTo(map);

const periodFiltersEl = document.getElementById("period-filters");
const typeFiltersAllEl = document.getElementById("type-filters-all");
const heritageFiltersEl = document.getElementById("heritage-filters");
const rangeReadout = document.getElementById("range-readout");
const resetBtn = document.getElementById("reset-btn");
const sliderEl = document.getElementById("time-slider");
const periodLegendEl = document.getElementById("period-legend");
const titleEl = document.getElementById("app-title");
const taglineEl = document.getElementById("app-tagline");
const filtersTitleEl = document.getElementById("filters-title");
const periodTitleEl = document.getElementById("period-title");
const typeTitleEl = document.getElementById("type-title");
const heritageTitleEl = document.getElementById("heritage-title");
const sliderTitleEl = document.getElementById("slider-title");
const langButtons = document.querySelectorAll(".lang-btn");

const periodState = new Map();
const typeState = new Map();
const heritageState = new Map();
let suppressPeriodSync = false;
const wikipediaImageCache = new Map();

function uniqueSorted(values, order = []) {
  const unique = Array.from(new Set(values));
  const ordered = [
    ...order.filter((value) => unique.includes(value)),
    ...unique.filter((value) => !order.includes(value)).sort(),
  ];
  return ordered;
}

function syncCheckboxes(value, checked) {
  const safeValue = value.replace(/"/g, '\\"');
  const nodes = document.querySelectorAll(
    `input[data-filter-value="${safeValue}"]`,
  );
  nodes.forEach((node) => {
    node.checked = checked;
  });
}

function buildFilterItems(container, items, stateMap, options = {}) {
  const {
    colorMap = null,
    swatch = "legend",
    onChange = null,
    countsMap = null,
    labelMap = null,
    labelFn = null,
  } = options;
  container.innerHTML = "";
  items.forEach((item) => {
    if (!stateMap.has(item)) {
      stateMap.set(item, true);
    }

    const label = document.createElement("label");
    label.className = "filter-item";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = stateMap.get(item);
    checkbox.value = item;
    checkbox.dataset.filterValue = item;
    checkbox.addEventListener("change", () => {
      stateMap.set(item, checkbox.checked);
      syncCheckboxes(item, checkbox.checked);
      if (onChange) {
        onChange();
      }
      updateMarkers();
    });

    let swatchEl = null;
    if (swatch === "legend") {
      swatchEl = document.createElement("span");
      if (colorMap && colorMap[item]) {
        swatchEl.className = `legend-dot ${colorMap[item].replace("marker-", "")}`;
      } else {
        swatchEl.className = "legend-dot neutral";
      }
    } else if (swatch === "type") {
      swatchEl = document.createElement("span");
      swatchEl.className = "type-icon";
      swatchEl.innerHTML = TYPE_SVGS[item] || TYPE_SVGS["Civic Architecture"];
    }

    const textWrap = document.createElement("span");
    textWrap.className = "filter-text-wrap";

    const text = document.createElement("span");
    text.className = "filter-text";
    const labelText = labelFn ? labelFn(item) : labelMap?.[item] || item;
    text.textContent = labelText;
    textWrap.appendChild(text);

    if (countsMap) {
      const count = countsMap.get(item) || 0;
      const countEl = document.createElement("span");
      countEl.className = "filter-count";
      countEl.textContent = `(${count})`;
      textWrap.appendChild(countEl);
    }

    label.appendChild(checkbox);
    if (swatchEl) {
      label.appendChild(swatchEl);
    }
    label.appendChild(textWrap);
    container.appendChild(label);
  });
}

function translateLabel(kind, value) {
  return LABELS[currentLang]?.[kind]?.[value] || value;
}

function renderPeriodLegend(periodsList) {
  if (!periodLegendEl) return;
  periodLegendEl.innerHTML = "";
  periodsList.forEach((period) => {
    const item = document.createElement("span");
    item.className = "legend-item";
    item.dataset.period = period;

    const dot = document.createElement("span");
    const colorClass =
      PERIOD_COLORS[period]?.replace("marker-", "") || "neutral";
    dot.className = `legend-dot ${colorClass}`;

    const label = document.createElement("span");
    label.textContent = translateLabel("period", period);

    item.appendChild(dot);
    item.appendChild(label);
    periodLegendEl.appendChild(item);
  });
}

const periods = uniqueSorted(
  BUILDINGS.map((b) => b.period),
  PERIOD_ORDER,
);
const types = uniqueSorted(
  BUILDINGS.map((b) => b.type),
  TYPE_ORDER,
);
const periodCounts = BUILDINGS.reduce((map, building) => {
  map.set(building.period, (map.get(building.period) || 0) + 1);
  return map;
}, new Map());
const typeCounts = BUILDINGS.reduce((map, building) => {
  map.set(building.type, (map.get(building.type) || 0) + 1);
  return map;
}, new Map());
const heritages = uniqueSorted(
  BUILDINGS.map((b) => b.heritage).filter(Boolean),
  HERITAGE_ORDER,
);
const heritageCounts = BUILDINGS.reduce((map, building) => {
  if (!building.heritage) return map;
  map.set(building.heritage, (map.get(building.heritage) || 0) + 1);
  return map;
}, new Map());

function renderFilters() {
  buildFilterItems(periodFiltersEl, periods, periodState, {
    colorMap: PERIOD_COLORS,
    swatch: "legend",
    countsMap: periodCounts,
    onChange: () => updateRangeForSelectedPeriods(),
    labelMap: LABELS[currentLang].period,
  });

  buildFilterItems(typeFiltersAllEl, types, typeState, {
    swatch: "type",
    countsMap: typeCounts,
    labelMap: LABELS[currentLang].type,
  });

  buildFilterItems(heritageFiltersEl, heritages, heritageState, {
    swatch: null,
    countsMap: heritageCounts,
    labelMap: LABELS[currentLang].heritage,
  });
}
const architectureTypes = types.filter((type) =>
  ARCHITECTURE_SUBTYPES.includes(type),
);
const landscapeTypes = types.filter(
  (type) => type === "Landscape Architecture",
);
const urbanTypes = types.filter((type) => type === "Urban Space");
const allTypes = types;

renderFilters();
renderPeriodLegend(periods);

const typeTabs = document.querySelectorAll(".type-tab");
let activeTypeTab = "all";

function setActiveTypeTab(tabName) {
  activeTypeTab = tabName;
  typeTabs.forEach((tab) => {
    tab.classList.toggle("is-active", tab.dataset.tab === tabName);
  });
}

function setTypeFilterVisibility(tabName) {
  const presets = {
    all: new Set(allTypes),
    architecture: new Set(architectureTypes),
    landscape: new Set(landscapeTypes),
    urban: new Set(urbanTypes),
  };
  const allowed = presets[tabName] || new Set(allTypes);
  const labels = typeFiltersAllEl.querySelectorAll(".filter-item");
  labels.forEach((label) => {
    const input = label.querySelector("input");
    if (!input) return;
    label.style.display = allowed.has(input.value) ? "flex" : "none";
  });
}

function setTypePreset(tabName) {
  const presets = {
    all: allTypes,
    architecture: architectureTypes,
    landscape: landscapeTypes,
    urban: urbanTypes,
  };
  const active = new Set(presets[tabName] || allTypes);

  allTypes.forEach((type) => {
    const enabled = active.has(type);
    typeState.set(type, enabled);
    syncCheckboxes(type, enabled);
  });

  updateMarkers();
}

typeTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const tabName = tab.dataset.tab;
    setActiveTypeTab(tabName);
    setTypeFilterVisibility(tabName);
    setTypePreset(tabName);
    updateTypeLegend(tabName);
  });
});

setActiveTypeTab("all");
setTypeFilterVisibility("all");
const typeLegendEl = document.getElementById("type-legend");
let typeLegendItems = [];

function buildTypeLegend() {
  if (!typeLegendEl) return;
  typeLegendEl.innerHTML = "";
  TYPE_LEGEND_ITEMS.forEach((item) => {
    const span = document.createElement("span");
    span.className = "type-legend-item";
    span.dataset.type = item.key;

    const icon = document.createElement("span");
    icon.className = "type-icon";
    icon.innerHTML = TYPE_SVGS[item.type] || TYPE_SVGS["Civic Architecture"];

    const label = document.createElement("span");
    label.textContent = translateLabel("type", item.type);

    span.appendChild(icon);
    span.appendChild(label);
    typeLegendEl.appendChild(span);
  });
  typeLegendItems = Array.from(
    typeLegendEl.querySelectorAll(".type-legend-item"),
  );
}

buildTypeLegend();
updateTypeLegend("all");

function updateTypeLegend(tabName) {
  const presets = {
    all: new Set(["religious", "civic", "monument", "landscape", "urban"]),
    architecture: new Set(["religious", "civic", "monument"]),
    landscape: new Set(["landscape"]),
    urban: new Set(["urban"]),
  };
  const allowed = presets[tabName] || presets.all;
  typeLegendItems.forEach((item) => {
    const key = item.dataset.type;
    item.style.display = allowed.has(key) ? "inline-flex" : "none";
  });
}

noUiSlider.create(sliderEl, {
  start: DEFAULT_RANGE,
  connect: true,
  range: {
    min: DEFAULT_RANGE[0],
    max: DEFAULT_RANGE[1],
  },
  step: 1,
  tooltips: true,
  format: {
    to: (value) => Math.round(value),
    from: (value) => Number(value),
  },
});

function formatYear(year, lang = currentLang) {
  if (lang === "zh") {
    return year < 0 ? `公元前${Math.abs(year)}年` : `公元${year}年`;
  }
  if (year < 0) {
    return `${Math.abs(year)} BC`;
  }
  return `${year} AD`;
}

function getActiveRange() {
  return sliderEl.noUiSlider.get().map((value) => Number(value));
}

function updateReadout() {
  const [start, end] = getActiveRange();
  if (currentLang === "zh") {
    rangeReadout.textContent = `显示建成于${formatYear(start)}至${formatYear(end)}之间的建筑。`;
    return;
  }
  rangeReadout.textContent = `Showing buildings completed between ${formatYear(start)} and ${formatYear(end)}.`;
}

function updateStaticText() {
  const langPack = I18N[currentLang];
  document.title = langPack.title;
  if (titleEl) titleEl.textContent = langPack.title;
  if (taglineEl) taglineEl.textContent = langPack.tagline;
  if (filtersTitleEl) filtersTitleEl.textContent = langPack.filters;
  if (periodTitleEl) periodTitleEl.textContent = langPack.period;
  if (typeTitleEl) typeTitleEl.textContent = langPack.type;
  if (heritageTitleEl) heritageTitleEl.textContent = langPack.heritage;
  if (sliderTitleEl) sliderTitleEl.textContent = langPack.constructionWindow;
  if (resetBtn) resetBtn.textContent = langPack.resetRange;

  typeTabs.forEach((tab) => {
    const key = tab.dataset.tab;
    if (langPack.tabs[key]) {
      tab.textContent = langPack.tabs[key];
    }
  });

  document.documentElement.lang = currentLang === "zh" ? "zh" : "en";
  updateReadout();
}

function setLanguage(lang) {
  if (!I18N[lang]) return;
  currentLang = lang;
  langButtons.forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.lang === lang);
  });

  updateStaticText();
  renderFilters();
  renderPeriodLegend(periods);
  setTypeFilterVisibility(activeTypeTab);
  buildTypeLegend();
  updateTypeLegend(activeTypeTab);
  rebuildMarkers();
  updateMarkers();
}

function updateRangeForSelectedPeriods() {
  const activePeriods = new Set(
    Array.from(periodState.entries())
      .filter(([, enabled]) => enabled)
      .map(([period]) => period),
  );

  if (!activePeriods.size) {
    suppressPeriodSync = true;
    sliderEl.noUiSlider.set(DEFAULT_RANGE);
    updateReadout();
    return;
  }

  const ranges = Array.from(activePeriods)
    .map((period) => PERIOD_RANGES[period])
    .filter(Boolean);
  const minStart = Math.min(...ranges.map((range) => range.start));
  const maxEnd = Math.max(...ranges.map((range) => range.end));

  suppressPeriodSync = true;
  sliderEl.noUiSlider.set([minStart, maxEnd]);
  updateReadout();
}

function updatePeriodsForRange() {
  const [start, end] = getActiveRange();
  const activePeriods = new Set();

  periods.forEach((period) => {
    const range = PERIOD_RANGES[period];
    if (!range) return;
    const overlaps = range.end >= start && range.start <= end;
    if (overlaps) {
      activePeriods.add(period);
    }
  });

  periods.forEach((period) => {
    const enabled = activePeriods.has(period);
    periodState.set(period, enabled);
    syncCheckboxes(period, enabled);
  });
}

function updateFilterCounts(container, countsMap) {
  const labels = container.querySelectorAll(".filter-item");
  labels.forEach((label) => {
    const input = label.querySelector("input");
    const countEl = label.querySelector(".filter-count");
    if (!input || !countEl) return;
    const count = countsMap.get(input.value) || 0;
    countEl.textContent = `(${count})`;
  });
}

function updateDynamicCounts() {
  const [start, end] = getActiveRange();
  const typeCountsDynamic = new Map();
  const heritageCountsDynamic = new Map();

  BUILDINGS.forEach((building) => {
    const inRange = building.year_start >= start && building.year_end <= end;
    if (!inRange) return;
    if (!passesFilters(building)) return;
    typeCountsDynamic.set(
      building.type,
      (typeCountsDynamic.get(building.type) || 0) + 1,
    );
    if (building.heritage) {
      heritageCountsDynamic.set(
        building.heritage,
        (heritageCountsDynamic.get(building.heritage) || 0) + 1,
      );
    }
  });

  updateFilterCounts(typeFiltersAllEl, typeCountsDynamic);
  updateFilterCounts(heritageFiltersEl, heritageCountsDynamic);
}

function getImageUrl(building) {
  return (
    building.image || PERIOD_IMAGES[building.period] || PERIOD_IMAGES.Modern
  );
}

function getWikipediaTitle(building) {
  return WIKIPEDIA_TITLE_OVERRIDES[building.name] || building.name;
}

async function fetchWikipediaImage(title) {
  const normalized = title.replace(/ /g, "_");
  const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(normalized)}`;
  try {
    const response = await fetch(url);
    if (!response.ok) return null;
    const data = await response.json();
    if (data.type === "disambiguation") return null;
    if (data.originalimage && data.originalimage.source)
      return data.originalimage.source;
    if (data.thumbnail && data.thumbnail.source) return data.thumbnail.source;
  } catch (error) {
    return null;
  }
  return null;
}

function getTypeClass(type) {
  if (type === "Religious Architecture") return "type-religious";
  if (type === "Civic Architecture") return "type-civic";
  if (type === "Monument") return "type-monument";
  if (type === "Landscape Architecture") return "type-landscape";
  if (type === "Urban Space") return "type-urban";
  return "type-civic";
}

function createMarker(building) {
  const period = building.period;
  const markerClass = PERIOD_COLORS[period] || "marker-modern";
  const typeClass = getTypeClass(building.type);
  const iconSvg = TYPE_SVGS[building.type] || TYPE_SVGS["Civic Architecture"];
  const icon = L.divIcon({
    className: "",
    html: `<div class="marker-icon ${markerClass} ${typeClass}">${iconSvg}</div>`,
    iconSize: [30, 30],
    iconAnchor: [15, 15],
  });

  const marker = L.marker([building.lat, building.lon], { icon });
  const imageUrl = getImageUrl(building);
  const wikiTitle = getWikipediaTitle(building);
  const popupLabels = I18N[currentLang].popup;
  const architectLine = building.architect
    ? currentLang === "zh"
      ? `建筑师：${building.architect}`
      : `Architect: ${building.architect}`
    : null;
  const heritageLine = building.heritage
    ? `${popupLabels.heritage}: ${translateLabel("heritage", building.heritage)}`
    : null;
  const popupHtml = `
    <div class="popup-card">
      <img src="${imageUrl}" alt="${building.name}" loading="lazy" data-wiki-title="${wikiTitle}" />
      <div class="popup-title">${building.name}</div>
      <div class="popup-meta">${formatYear(building.year_start)} - ${formatYear(building.year_end)}</div>
      <div class="popup-meta">${popupLabels.period}: ${translateLabel("period", building.period)}</div>
      <div class="popup-meta">${popupLabels.type}: ${translateLabel("type", building.type)}</div>
      ${heritageLine ? `<div class="popup-meta">${heritageLine}</div>` : ""}
      ${architectLine ? `<div class="popup-meta">${architectLine}</div>` : ""}
      <div>${building.description}</div>
    </div>
  `;
  marker.bindPopup(popupHtml);
  marker.on("popupopen", async (event) => {
    if (building.image) return;
    const img = event.popup.getElement().querySelector("img[data-wiki-title]");
    if (!img) return;
    const title = img.dataset.wikiTitle;
    if (!title) return;
    if (wikipediaImageCache.has(title)) {
      const cached = wikipediaImageCache.get(title);
      if (cached) {
        img.src = cached;
      }
      return;
    }
    const fetched = await fetchWikipediaImage(title);
    wikipediaImageCache.set(title, fetched);
    if (fetched) {
      img.src = fetched;
    }
  });
  return marker;
}

let buildingMarkers = [];

function rebuildMarkers() {
  buildingMarkers = BUILDINGS.map((building) => ({
    building,
    marker: createMarker(building),
  }));
}

function passesFilters(building) {
  const { period, type, heritage } = building;
  const heritageOk = heritage ? heritageState.get(heritage) : true;
  return periodState.get(period) && typeState.get(type) && heritageOk;
}

function updateMarkers() {
  markerLayer.clearLayers();
  const [start, end] = getActiveRange();

  buildingMarkers.forEach(({ building, marker }) => {
    const inRange = building.year_start >= start && building.year_end <= end;

    if (passesFilters(building) && inRange) {
      markerLayer.addLayer(marker);
    }
  });

  updateReadout();
  updateDynamicCounts();
}

sliderEl.noUiSlider.on("update", () => {
  if (!suppressPeriodSync) {
    updatePeriodsForRange();
  }
  updateMarkers();
});
sliderEl.noUiSlider.on("set", () => {
  suppressPeriodSync = false;
});
resetBtn.addEventListener("click", () => {
  sliderEl.noUiSlider.set(DEFAULT_RANGE);
});

langButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    setLanguage(btn.dataset.lang);
  });
});

setLanguage(currentLang);
