// Dataset of notable Roman architecture with approximate construction ranges.
const BUILDINGS = [
  {
    name: "Colosseum",
    lat: 41.8902,
    lon: 12.4922,
    year_start: 72,
    year_end: 80,
    category: { period: "Roman", type: "Architecture", heritage: "World Heritage" },
    architect: "Unknown",
    description: "Flavian amphitheater for public spectacles and games."
  },
  {
    name: "Pantheon",
    lat: 41.8986,
    lon: 12.4768,
    year_start: 118,
    year_end: 126,
    category: { period: "Roman", type: "Architecture", heritage: "World Heritage" },
    architect: "Hadrian",
    description: "Ancient Roman temple completed under Emperor Hadrian."
  },
  {
    name: "Roman Forum",
    lat: 41.8925,
    lon: 12.4853,
    year_start: -500,
    year_end: 200,
    category: { period: "Roman", type: "Urban Space", heritage: "World Heritage" },
    architect: "Unknown",
    description: "Political, religious, and commercial heart of ancient Rome."
  },
  {
    name: "Circus Maximus",
    lat: 41.8859,
    lon: 12.4857,
    year_start: -600,
    year_end: 200,
    category: { period: "Roman", type: "Urban Space", heritage: "World Heritage" },
    architect: "Unknown",
    description: "Ancient chariot-racing stadium and gathering space."
  },
  {
    name: "Domus Aurea",
    lat: 41.8913889,
    lon: 12.4952778,
    year_start: 64,
    year_end: 68,
    category: { period: "Roman", type: "Architecture", heritage: "World Heritage" },
    architect: "Nero",
    description: "Vast imperial palace complex built after the Great Fire."
  },
  {
    name: "Temple of Venus and Roma",
    lat: 41.8910,
    lon: 12.4897,
    year_start: 121,
    year_end: 141,
    category: { period: "Roman", type: "Architecture", heritage: "World Heritage" },
    architect: "Hadrian",
    description: "Largest temple in ancient Rome, dedicated to Venus and Roma."
  },
  {
    name: "Arch of Constantine",
    lat: 41.8899,
    lon: 12.4913,
    year_start: 312,
    year_end: 315,
    category: { period: "Roman", type: "Monument", heritage: "World Heritage" },
    architect: "Unknown",
    description: "Triumphal arch celebrating Constantine's victory at Milvian Bridge."
  },
  {
    name: "Arch of Titus",
    lat: 41.8906,
    lon: 12.4886,
    year_start: 81,
    year_end: 82,
    category: { period: "Roman", type: "Monument", heritage: "World Heritage" },
    architect: "Unknown",
    description: "Triumphal arch commemorating the conquest of Jerusalem."
  },
  {
    name: "Arch of Septimius Severus",
    lat: 41.8928,
    lon: 12.4847,
    year_start: 203,
    year_end: 205,
    category: { period: "Roman", type: "Monument", heritage: "World Heritage" },
    architect: "Unknown",
    description: "Triumphal arch honoring Septimius Severus and his sons."
  },
  {
    name: "Baths of Caracalla",
    lat: 41.8791,
    lon: 12.4924,
    year_start: 212,
    year_end: 216,
    category: { period: "Roman", type: "Architecture", heritage: "World Heritage" },
    architect: "Unknown",
    description: "Massive imperial bath complex with gyms, libraries, and gardens."
  },
  {
    name: "Baths of Diocletian",
    lat: 41.903,
    lon: 12.498,
    year_start: 298,
    year_end: 306,
    category: { period: "Roman", type: "Architecture", heritage: "World Heritage" },
    architect: "Unknown",
    description: "Largest bath complex of imperial Rome."
  },
  {
    name: "Baths of Trajan",
    lat: 41.8918667,
    lon: 12.4962806,
    year_start: 104,
    year_end: 109,
    category: { period: "Roman", type: "Architecture", heritage: "World Heritage" },
    architect: "Apollodorus of Damascus",
    description: "Imperial bath complex built over Nero's Golden House."
  },
  {
    name: "Trajan's Market",
    lat: 41.8955,
    lon: 12.4858,
    year_start: 100,
    year_end: 110,
    category: { period: "Roman", type: "Architecture", heritage: "World Heritage" },
    architect: "Apollodorus of Damascus",
    description: "Multi-level market complex built as part of Trajan's Forum."
  },
  {
    name: "Mausoleum of Augustus",
    lat: 41.9057,
    lon: 12.4768,
    year_start: -28,
    year_end: -23,
    category: { period: "Roman", type: "Monument", heritage: "World Heritage" },
    architect: "Unknown",
    description: "Imperial tomb built for Rome's first emperor."
  },
  {
    name: "Theatre of Marcellus",
    lat: 41.8921,
    lon: 12.4792,
    year_start: -13,
    year_end: 17,
    category: { period: "Roman", type: "Architecture", heritage: "World Heritage" },
    architect: "Unknown",
    description: "Ancient open-air theater later incorporated into medieval housing."
  },
  {
    name: "Theatre of Pompey",
    lat: 41.89548,
    lon: 12.47398,
    year_start: -61,
    year_end: -55,
    category: { period: "Roman", type: "Architecture", heritage: "World Heritage" },
    architect: "Unknown",
    description: "First permanent stone theater in Rome."
  },
  {
    name: "Largo di Torre Argentina",
    lat: 41.8959,
    lon: 12.4776,
    year_start: -300,
    year_end: -100,
    category: { period: "Roman", type: "Urban Space", heritage: "World Heritage" },
    architect: "Unknown",
    description: "Republican-era temple ruins and archaeological area."
  },
  {
    name: "Pyramid of Cestius",
    lat: 41.8763889,
    lon: 12.4808333,
    year_start: -18,
    year_end: -12,
    category: { period: "Roman", type: "Monument", heritage: "World Heritage" },
    architect: "Unknown",
    description: "Ancient pyramid-shaped tomb for Gaius Cestius."
  },
  {
    name: "Basilica of Maxentius",
    lat: 41.8919,
    lon: 12.4883,
    year_start: 306,
    year_end: 312,
    category: { period: "Roman", type: "Architecture", heritage: "World Heritage" },
    architect: "Unknown",
    description: "Largest basilica in the Roman Forum, later completed by Constantine."
  },
  {
    name: "Temple of Hercules Victor",
    lat: 41.888722,
    lon: 12.481389,
    year_start: -140,
    year_end: -120,
    category: { period: "Roman", type: "Architecture", heritage: "World Heritage" },
    architect: "Unknown",
    description: "Circular marble temple near the Tiber, one of the oldest in Rome."
  },
  {
    name: "Temple of Portunus",
    lat: 41.889289,
    lon: 12.480893,
    year_start: -150,
    year_end: -120,
    category: { period: "Roman", type: "Architecture", heritage: "World Heritage" },
    architect: "Unknown",
    description: "Well-preserved Roman temple near the Forum Boarium."
  },
  {
    name: "Castel Sant'Angelo",
    lat: 41.9031,
    lon: 12.4663,
    year_start: 123,
    year_end: 139,
    category: { period: "Roman", type: "Monument", heritage: "World Heritage" },
    architect: "Unknown",
    description: "Hadrian's mausoleum later converted into a fortress and museum."
  },
  {
    name: "Ponte Sant'Angelo",
    lat: 41.9011,
    lon: 12.4667,
    year_start: 134,
    year_end: 139,
    category: { period: "Roman", type: "Monument", heritage: "World Heritage" },
    architect: "Unknown",
    description: "Bridge built by Hadrian, later adorned with Baroque angels."
  },
  {
    name: "Basilica of San Clemente",
    lat: 41.8897,
    lon: 12.4987,
    year_start: 1100,
    year_end: 1120,
    category: { period: "Medieval", type: "Architecture", heritage: "National" },
    architect: "Unknown",
    description: "Layered basilica with medieval mosaics and underground temples."
  },
  {
    name: "Santa Maria in Trastevere",
    lat: 41.8891,
    lon: 12.4723,
    year_start: 1140,
    year_end: 1148,
    category: { period: "Medieval", type: "Architecture", heritage: "National" },
    architect: "Unknown",
    description: "Medieval church known for its gold mosaics and piazza."
  },
  {
    name: "Basilica of Santa Maria Maggiore",
    lat: 41.8976,
    lon: 12.4989,
    year_start: 432,
    year_end: 440,
    category: { period: "Medieval", type: "Architecture", heritage: "National" },
    architect: "Unknown",
    description: "Early Christian basilica with later medieval and Baroque layers."
  },
  {
    name: "Archbasilica of Saint John Lateran",
    lat: 41.8859,
    lon: 12.5062,
    year_start: 313,
    year_end: 324,
    category: { period: "Medieval", type: "Architecture", heritage: "World Heritage" },
    architect: "Unknown",
    description: "Cathedral of Rome and the oldest papal basilica."
  },
  {
    name: "Basilica of Saint Paul Outside the Walls",
    lat: 41.8586,
    lon: 12.4772,
    year_start: 324,
    year_end: 402,
    category: { period: "Medieval", type: "Architecture", heritage: "World Heritage" },
    architect: "Unknown",
    description: "Major pilgrimage basilica rebuilt after a 19th-century fire."
  },
  {
    name: "Santa Maria in Cosmedin",
    lat: 41.88813,
    lon: 12.48172,
    year_start: 550,
    year_end: 1123,
    category: { period: "Medieval", type: "Architecture", heritage: "National" },
    architect: "Unknown",
    description: "Church famous for the Bocca della Verita and medieval features."
  },
  {
    name: "Santa Sabina",
    lat: 41.8844,
    lon: 12.4797,
    year_start: 422,
    year_end: 432,
    category: { period: "Medieval", type: "Architecture", heritage: "National" },
    architect: "Unknown",
    description: "Early Christian basilica on the Aventine Hill."
  },
  {
    name: "Santa Prassede",
    lat: 41.8961,
    lon: 12.4986,
    year_start: 780,
    year_end: 822,
    category: { period: "Medieval", type: "Architecture", heritage: "National" },
    architect: "Unknown",
    description: "Church with glittering Byzantine mosaics and the San Zeno chapel."
  },
  {
    name: "Santa Cecilia in Trastevere",
    lat: 41.8875,
    lon: 12.4758,
    year_start: 820,
    year_end: 830,
    category: { period: "Medieval", type: "Architecture", heritage: "National" },
    architect: "Unknown",
    description: "Medieval basilica dedicated to Saint Cecilia with layered history."
  },
  {
    name: "San Pietro in Vincoli",
    lat: 41.893872,
    lon: 12.493069,
    year_start: 432,
    year_end: 440,
    category: { period: "Medieval", type: "Architecture", heritage: "National" },
    architect: "Unknown",
    description: "Church housing Michelangelo's Moses and the chains of Saint Peter."
  },
  {
    name: "San Giorgio in Velabro",
    lat: 41.88958,
    lon: 12.483158,
    year_start: 685,
    year_end: 700,
    category: { period: "Medieval", type: "Architecture", heritage: "Local" },
    architect: "Unknown",
    description: "Small medieval church near the Arch of Janus."
  },
  {
    name: "Capitoline Museums",
    lat: 41.8929,
    lon: 12.4829,
    year_start: 1471,
    year_end: 1536,
    category: { period: "Renaissance", type: "Architecture", heritage: "National" },
    architect: "Michelangelo",
    description: "World's oldest public museum, redesigned by Michelangelo."
  },
  {
    name: "Palazzo Farnese",
    lat: 41.8958,
    lon: 12.4722,
    year_start: 1517,
    year_end: 1589,
    category: { period: "Renaissance", type: "Architecture", heritage: "National" },
    architect: "Antonio da Sangallo the Younger",
    description: "High Renaissance palace now housing the French Embassy."
  },
  {
    name: "Tempietto of San Pietro in Montorio",
    lat: 41.8896,
    lon: 12.4663,
    year_start: 1502,
    year_end: 1510,
    category: { period: "Renaissance", type: "Architecture", heritage: "National" },
    architect: "Donato Bramante",
    description: "Bramante's small classical temple commemorating Saint Peter."
  },
  {
    name: "St Peter's Basilica",
    lat: 41.9022,
    lon: 12.4539,
    year_start: 1506,
    year_end: 1626,
    category: { period: "Renaissance", type: "Architecture", heritage: "World Heritage" },
    architect: "Michelangelo",
    description: "Vatican basilica with works by Bramante, Michelangelo, and Bernini."
  },
  {
    name: "Sistine Chapel",
    lat: 41.9029,
    lon: 12.4545,
    year_start: 1473,
    year_end: 1481,
    category: { period: "Renaissance", type: "Architecture", heritage: "World Heritage" },
    architect: "Baccio Pontelli",
    description: "Papal chapel famed for its Renaissance frescoes."
  },
  {
    name: "Villa Farnesina",
    lat: 41.8935964,
    lon: 12.4673045,
    year_start: 1506,
    year_end: 1510,
    category: { period: "Renaissance", type: "Architecture", heritage: "National" },
    architect: "Baldassarre Peruzzi",
    description: "Renaissance suburban villa with frescoes by Raphael."
  },
  {
    name: "Palazzo della Cancelleria",
    lat: 41.8966861,
    lon: 12.4715222,
    year_start: 1489,
    year_end: 1513,
    category: { period: "Renaissance", type: "Architecture", heritage: "National" },
    architect: "Baccio Pontelli",
    description: "Renaissance palace with a celebrated courtyard."
  },
  {
    name: "Palazzo Massimo alle Colonne",
    lat: 41.896583,
    lon: 12.473656,
    year_start: 1532,
    year_end: 1536,
    category: { period: "Renaissance", type: "Architecture", heritage: "National" },
    architect: "Baldassarre Peruzzi",
    description: "Curved palace facade responding to the street alignment."
  },
  {
    name: "Palazzo Madama (Rome)",
    lat: 41.8992,
    lon: 12.4743,
    year_start: 1500,
    year_end: 1505,
    category: { period: "Renaissance", type: "Architecture", heritage: "National" },
    architect: "Giulio Romano",
    description: "Historic palace now serving as the seat of the Italian Senate."
  },
  {
    name: "Palazzo Spada",
    lat: 41.894028,
    lon: 12.471806,
    year_start: 1540,
    year_end: 1548,
    category: { period: "Renaissance", type: "Architecture", heritage: "National" },
    architect: "Bartolomeo Baronino",
    description: "Palace known for Borromini's forced-perspective gallery."
  },
  {
    name: "Piazza del Campidoglio",
    lat: 41.89333,
    lon: 12.48278,
    year_start: 1536,
    year_end: 1546,
    category: { period: "Renaissance", type: "Urban Space", heritage: "National" },
    architect: "Michelangelo",
    description: "Capitoline Hill square redesigned by Michelangelo."
  },
  {
    name: "Palazzo Venezia",
    lat: 41.89644,
    lon: 12.480976,
    year_start: 1455,
    year_end: 1464,
    category: { period: "Renaissance", type: "Architecture", heritage: "National" },
    architect: "Unknown",
    description: "Renaissance palace anchoring Piazza Venezia, now a museum."
  },
  {
    name: "Santa Maria del Popolo",
    lat: 41.91146,
    lon: 12.47655,
    year_start: 1472,
    year_end: 1477,
    category: { period: "Renaissance", type: "Architecture", heritage: "National" },
    architect: "Baccio Pontelli",
    description: "Renaissance church known for chapels by Raphael and Caravaggio."
  },
  {
    name: "Campo de' Fiori",
    lat: 41.8956,
    lon: 12.4728,
    year_start: 1450,
    year_end: 1600,
    category: { period: "Renaissance", type: "Urban Space", heritage: "Local" },
    architect: "Unknown",
    description: "Marketplace square developed during late medieval and Renaissance growth."
  },
  {
    name: "Vatican Gardens",
    lat: 41.90566,
    lon: 12.45095,
    year_start: 1500,
    year_end: 1550,
    category: { period: "Renaissance", type: "Landscape", heritage: "World Heritage" },
    architect: "Unknown",
    description: "Vatican gardens with Renaissance-era layouts and later additions."
  },
  {
    name: "Villa Celimontana",
    lat: 41.88382,
    lon: 12.49568,
    year_start: 1550,
    year_end: 1580,
    category: { period: "Renaissance", type: "Landscape", heritage: "Local" },
    architect: "Unknown",
    description: "Historic villa garden on the Caelian Hill."
  },
  {
    name: "Trevi Fountain",
    lat: 41.9009,
    lon: 12.4833,
    year_start: 1732,
    year_end: 1762,
    category: { period: "Baroque", type: "Monument", heritage: "National" },
    architect: "Nicola Salvi",
    description: "Monumental fountain blending late Baroque and Rococo forms."
  },
  {
    name: "Spanish Steps",
    lat: 41.9059,
    lon: 12.4823,
    year_start: 1723,
    year_end: 1725,
    category: { period: "Baroque", type: "Urban Space", heritage: "National" },
    architect: "Francesco de Sanctis",
    description: "Grand stairway linking Piazza di Spagna and Trinita dei Monti."
  },
  {
    name: "Piazza Navona",
    lat: 41.8992,
    lon: 12.4731,
    year_start: 1644,
    year_end: 1651,
    category: { period: "Baroque", type: "Urban Space", heritage: "National" },
    architect: "Gian Lorenzo Bernini",
    description: "Baroque square with Bernini fountains atop a Roman stadium."
  },
  {
    name: "Sant'Ivo alla Sapienza",
    lat: 41.8977,
    lon: 12.4746,
    year_start: 1642,
    year_end: 1660,
    category: { period: "Baroque", type: "Architecture", heritage: "National" },
    architect: "Francesco Borromini",
    description: "Borromini's church with a spiraling lantern and star plan."
  },
  {
    name: "Sant'Andrea al Quirinale",
    lat: 41.9072,
    lon: 12.4906,
    year_start: 1658,
    year_end: 1670,
    category: { period: "Baroque", type: "Architecture", heritage: "National" },
    architect: "Gian Lorenzo Bernini",
    description: "Oval church designed by Bernini with theatrical interiors."
  },
  {
    name: "Palazzo Barberini",
    lat: 41.902643,
    lon: 12.489498,
    year_start: 1627,
    year_end: 1633,
    category: { period: "Baroque", type: "Architecture", heritage: "National" },
    architect: "Carlo Maderno",
    description: "Baroque palace with contributions from Bernini and Borromini."
  },
  {
    name: "Piazza del Popolo",
    lat: 41.910714,
    lon: 12.476317,
    year_start: 1656,
    year_end: 1679,
    category: { period: "Baroque", type: "Urban Space", heritage: "National" },
    architect: "Gian Lorenzo Bernini",
    description: "Monumental piazza framed by twin churches and the Porta del Popolo."
  },
  {
    name: "Sant'Agnese in Agone",
    lat: 41.89874,
    lon: 12.47258,
    year_start: 1652,
    year_end: 1672,
    category: { period: "Baroque", type: "Architecture", heritage: "National" },
    architect: "Francesco Borromini",
    description: "Baroque church on Piazza Navona with a dramatic facade."
  },
  {
    name: "San Carlo alle Quattro Fontane",
    lat: 41.90179,
    lon: 12.49077,
    year_start: 1638,
    year_end: 1646,
    category: { period: "Baroque", type: "Architecture", heritage: "National" },
    architect: "Francesco Borromini",
    description: "Small Baroque church known for its oval dome and curves."
  },
  {
    name: "Santa Maria della Vittoria",
    lat: 41.9047,
    lon: 12.4942,
    year_start: 1608,
    year_end: 1620,
    category: { period: "Baroque", type: "Architecture", heritage: "National" },
    architect: "Carlo Maderno",
    description: "Baroque church housing Bernini's Ecstasy of Saint Teresa."
  },
  {
    name: "St. Peter's Square",
    lat: 41.9022,
    lon: 12.4572,
    year_start: 1656,
    year_end: 1667,
    category: { period: "Baroque", type: "Urban Space", heritage: "World Heritage" },
    architect: "Gian Lorenzo Bernini",
    description: "Colonnaded piazza framing the approach to St Peter's Basilica."
  },
  {
    name: "Fontana dei Quattro Fiumi",
    lat: 41.89883,
    lon: 12.47324,
    year_start: 1648,
    year_end: 1651,
    category: { period: "Baroque", type: "Monument", heritage: "National" },
    architect: "Gian Lorenzo Bernini",
    description: "Fountain of the Four Rivers at the center of Piazza Navona."
  },
  {
    name: "Villa Borghese Gardens",
    lat: 41.91417,
    lon: 12.49222,
    year_start: 1605,
    year_end: 1903,
    category: { period: "Baroque", type: "Landscape", heritage: "Local" },
    architect: "Unknown",
    description: "Historic gardens and parkland that evolved from a 17th-century villa estate."
  },
  {
    name: "Villa Doria Pamphili",
    lat: 41.887295,
    lon: 12.450471,
    year_start: 1630,
    year_end: 1650,
    category: { period: "Baroque", type: "Landscape", heritage: "Local" },
    architect: "Unknown",
    description: "Rome's largest landscaped public park surrounding a historic villa."
  },
  {
    name: "Vittoriano (Altare della Patria)",
    lat: 41.894599,
    lon: 12.483092,
    year_start: 1885,
    year_end: 1911,
    category: { period: "Modern", type: "Monument", heritage: "National" },
    architect: "Giuseppe Sacconi",
    description: "National monument honoring Victor Emmanuel II with panoramic terraces."
  },
  {
    name: "Palazzo della Civilta Italiana",
    lat: 41.8346,
    lon: 12.4692,
    year_start: 1938,
    year_end: 1943,
    category: { period: "Modern", type: "Architecture", heritage: "National" },
    architect: "Giovanni Guerrini",
    description: "EUR district landmark known as the Square Colosseum."
  },
  {
    name: "EUR District",
    lat: 41.83181,
    lon: 12.46598,
    year_start: 1937,
    year_end: 1942,
    category: { period: "Modern", type: "Urban Space", heritage: "National" },
    architect: "Marcello Piacentini",
    description: "Rationalist planned district built for a planned world exposition."
  },
  {
    name: "Palazzo dei Congressi",
    lat: 41.8330,
    lon: 12.4665,
    year_start: 1938,
    year_end: 1954,
    category: { period: "Modern", type: "Architecture", heritage: "National" },
    architect: "Adalberto Libera",
    description: "Rationalist congress hall in the EUR district."
  },
  {
    name: "Stadio Olimpico",
    lat: 41.9339,
    lon: 12.4547,
    year_start: 1928,
    year_end: 1953,
    category: { period: "Modern", type: "Architecture", heritage: "National" },
    architect: "Unknown",
    description: "Rome's main sports stadium, renovated for multiple Olympics and events."
  },
  {
    name: "Foro Italico Complex",
    lat: 41.93192,
    lon: 12.45884,
    year_start: 1928,
    year_end: 1937,
    category: { period: "Modern", type: "Urban Space", heritage: "National" },
    architect: "Enrico Del Debbio",
    description: "Sports complex with marble plazas, monuments, and stadiums."
  },
  {
    name: "Pincio Terrace",
    lat: 41.91167,
    lon: 12.47972,
    year_start: 1809,
    year_end: 1814,
    category: { period: "Modern", type: "Landscape", heritage: "Local" },
    architect: "Giuseppe Valadier",
    description: "Panoramic terrace and promenade designed in the early 19th century."
  },
  {
    name: "Giardino degli Aranci",
    lat: 41.8851,
    lon: 12.4804,
    year_start: 1931,
    year_end: 1932,
    category: { period: "Modern", type: "Landscape", heritage: "Local" },
    architect: "Raffaele De Vico",
    description: "Orange Garden overlooking the Tiber on the Aventine Hill."
  },
  {
    name: "Orto Botanico di Roma",
    lat: 41.892297,
    lon: 12.465853,
    year_start: 1883,
    year_end: 1883,
    category: { period: "Modern", type: "Landscape", heritage: "Local" },
    architect: "Unknown",
    description: "Botanical garden with themed collections on the slopes of Gianicolo."
  },
  {
    name: "Villa Ada",
    lat: 41.9349,
    lon: 12.5045,
    year_start: 1870,
    year_end: 1920,
    category: { period: "Modern", type: "Landscape", heritage: "Local" },
    architect: "Unknown",
    description: "Large public park formed from a historic villa estate."
  },
  {
    name: "Janiculum Hill Terraces",
    lat: 41.88333,
    lon: 12.46667,
    year_start: 1883,
    year_end: 1884,
    category: { period: "Modern", type: "Landscape", heritage: "Local" },
    architect: "Unknown",
    description: "Scenic terraces and promenades overlooking the historic center."
  },
  {
    name: "Palatine Hill Gardens",
    lat: 41.88931,
    lon: 12.48635,
    year_start: 1900,
    year_end: 1930,
    category: { period: "Modern", type: "Landscape", heritage: "Local" },
    architect: "Unknown",
    description: "Archaeological parkland and gardens on the Palatine Hill."
  },
  {
    name: "MAXXI Museum",
    lat: 41.9293,
    lon: 12.4678,
    year_start: 1998,
    year_end: 2009,
    category: { period: "Contemporary", type: "Architecture", heritage: "National" },
    architect: "Zaha Hadid",
    description: "Contemporary art and architecture museum by Zaha Hadid."
  },
  {
    name: "Auditorium Parco della Musica",
    lat: 41.9299,
    lon: 12.4717,
    year_start: 1995,
    year_end: 2002,
    category: { period: "Contemporary", type: "Architecture", heritage: "National" },
    architect: "Renzo Piano",
    description: "Music complex of three concert halls and an open-air cavea."
  },
  {
    name: "Ara Pacis Museum",
    lat: 41.9077,
    lon: 12.4768,
    year_start: 2002,
    year_end: 2006,
    category: { period: "Contemporary", type: "Architecture", heritage: "National" },
    architect: "Richard Meier",
    description: "Modernist shelter for the Augustan Altar of Peace."
  },
  {
    name: "Jubilee Church",
    lat: 41.88241,
    lon: 12.58546,
    year_start: 1996,
    year_end: 2003,
    category: { period: "Contemporary", type: "Architecture", heritage: "National" },
    architect: "Richard Meier",
    description: "Contemporary church with signature concrete shells in Tor Tre Teste."
  },
  {
    name: "Rome Convention Center (La Nuvola)",
    lat: 41.83099,
    lon: 12.47193,
    year_start: 2008,
    year_end: 2016,
    category: { period: "Contemporary", type: "Architecture", heritage: "National" },
    architect: "Massimiliano Fuksas",
    description: "Convention center known for its cloud-like interior volume."
  },
  {
    name: "Appian Way Regional Park",
    lat: 41.84867,
    lon: 12.52447,
    year_start: 1988,
    year_end: 1988,
    category: { period: "Contemporary", type: "Landscape", heritage: "Local" },
    architect: "Unknown",
    description: "Protected green corridor along the historic Appian Way."
  },
  {
    name: "Parco degli Acquedotti",
    lat: 41.847,
    lon: 12.562,
    year_start: 1988,
    year_end: 1988,
    category: { period: "Contemporary", type: "Landscape", heritage: "Local" },
    architect: "Unknown",
    description: "Parkland framing ancient aqueducts along the Appian Way corridor."
  }
];
