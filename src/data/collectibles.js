// Elden Ring collectibles data with verified event flag IDs
// Sources:
//   - Cookbooks: The Grand Archives Elden Ring CT (Unlock all Cookbooks.cea)
//     https://github.com/The-Grand-Archives/Elden-Ring-CT-TGA
//   - Whetblades: The Grand Archives Elden Ring CT (Unlock all Whetblades.cea)
//   - Gestures (base game): soulsmods Elden Ring Event Flag Reference (flags 60800-60849)
//     https://soulsmods.github.io/elden-ring-eventparam/
//   - Gestures (DLC): er-save-manager gesture database
//     https://github.com/Hapfel1/er-save-manager
//   - Paintings: Goods item IDs from community datamining
//     Note: Paintings use key item IDs (not event flags) since they are tracked
//     via inventory rather than the event flag system.

// ============================================================
// COOKBOOKS
// ============================================================
// Event flag IDs from The Grand Archives Cheat Table (Unlock all Cookbooks.cea)
// These are the flags set when a cookbook is obtained and its recipes are unlocked.

export const COOKBOOKS = [
  // --- Missionary's Cookbooks ---
  { id: 67610, name: "Missionary's Cookbook [1]", region: "Weeping Peninsula", type: "Missionary's", dlc: false, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=4&lat=-191.1875&lng=100.041878&code=mapA" },
  { id: 67600, name: "Missionary's Cookbook [2]", region: "Ainsel River", type: "Missionary's", dlc: false },
  { id: 67650, name: "Missionary's Cookbook [3]", region: "Weeping Peninsula", type: "Missionary's", dlc: false, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=986&lat=-168.15625&lng=124.383442&code=mapA" },
  { id: 67640, name: "Missionary's Cookbook [4]", region: "Leyndell, Royal Capital", type: "Missionary's", dlc: false, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=5734&lat=-110.3&lng=104.5&code=mapA" },
  { id: 67630, name: "Missionary's Cookbook [5]", region: "Caelid", type: "Missionary's", dlc: false, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=1600&lat=-174.015625&lng=132.973139&code=mapB" },
  { id: 67130, name: "Missionary's Cookbook [6]", region: "Volcano Manor", type: "Missionary's", dlc: false, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=4541&lat=-90.92969&lng=65.20087&code=mapA" },
  { id: 68230, name: "Missionary's Cookbook [7]", region: "Mountaintops of the Giants", type: "Missionary's", dlc: false, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+map?id=3504&lat=-71.385938&lng=155.706062&code=mapA" },

  // --- Nomadic Warrior's Cookbooks ---
  { id: 67000, name: "Nomadic Warrior's Cookbook [1]", region: "Limgrave", type: "Nomadic Warrior's", dlc: false, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=4&lat=-191.1875&lng=100.041878&code=mapA" },
  { id: 67110, name: "Nomadic Warrior's Cookbook [2]", region: "Limgrave", type: "Nomadic Warrior's", dlc: false, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=4&lat=-191.1875&lng=100.041878&code=mapA" },
  { id: 67010, name: "Nomadic Warrior's Cookbook [3]", region: "Limgrave", type: "Nomadic Warrior's", dlc: false, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=959&code=mapA" },
  { id: 67800, name: "Nomadic Warrior's Cookbook [4]", region: "Limgrave", type: "Nomadic Warrior's", dlc: false, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=732&lat=-187.046875&lng=119.509246&code=mapA" },
  { id: 67830, name: "Nomadic Warrior's Cookbook [5]", region: "Limgrave", type: "Nomadic Warrior's", dlc: false, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=812&lat=-192.109375&lng=120.629633&code=mapA" },
  { id: 67020, name: "Nomadic Warrior's Cookbook [6]", region: "Limgrave", type: "Nomadic Warrior's", dlc: false, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=771&lat=-192.890625&lng=125.211401&code=mapA" },
  { id: 67050, name: "Nomadic Warrior's Cookbook [7]", region: "Liurnia of the Lakes", type: "Nomadic Warrior's", dlc: false, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=794&lat=-173.625&lng=90.731063&code=mapA" },
  { id: 67880, name: "Nomadic Warrior's Cookbook [8]", region: "Liurnia of the Lakes", type: "Nomadic Warrior's", dlc: false, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=3529&lat=-213.0125&lng=99.07283&code=mapA" },
  { id: 67430, name: "Nomadic Warrior's Cookbook [9]", region: "Liurnia of the Lakes", type: "Nomadic Warrior's", dlc: false, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=516&lat=-209.828125&lng=105.635211&code=mapA" },
  { id: 67030, name: "Nomadic Warrior's Cookbook [10]", region: "Liurnia of the Lakes", type: "Nomadic Warrior's", dlc: false, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=5756&lat=-175.453125&lng=86.96036&code=mapA" },
  { id: 67220, name: "Nomadic Warrior's Cookbook [11]", region: "Caelid", type: "Nomadic Warrior's", dlc: false, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=1367&lat=-166.67&lng=76.72&code=mapA" },
  { id: 67060, name: "Nomadic Warrior's Cookbook [12]", region: "Caelid", type: "Nomadic Warrior's", dlc: false, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+map?id=1330&lat=-147.90625&lng=54.318187&code=mapA" },
  { id: 67080, name: "Nomadic Warrior's Cookbook [13]", region: "Altus Plateau", type: "Nomadic Warrior's", dlc: false, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=1574&lat=-113.40625&lng=64.55834&code=mapA" },
  { id: 67870, name: "Nomadic Warrior's Cookbook [14]", region: "Altus Plateau", type: "Nomadic Warrior's", dlc: false, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=985&lat=-168.21875&lng=123.445776&code=mapA" },
  { id: 67900, name: "Nomadic Warrior's Cookbook [15]", region: "Mt. Gelmir", type: "Nomadic Warrior's", dlc: false, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+map?id=1158&lat=-187.975001&lng=143.226132&code=mapA" },
  { id: 67290, name: "Nomadic Warrior's Cookbook [16]", region: "Leyndell, Royal Capital", type: "Nomadic Warrior's", dlc: false, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=1364&lat=-127.74219&lng=86.12628&code=mapA" },
  { id: 67100, name: "Nomadic Warrior's Cookbook [17]", region: "Mountaintops of the Giants", type: "Nomadic Warrior's", dlc: false, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=1319&lat=-162.99375&lng=132.64315&code=mapA" },
  { id: 67270, name: "Nomadic Warrior's Cookbook [18]", region: "Mountaintops of the Giants", type: "Nomadic Warrior's", dlc: false, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=1319&lat=-178.648437&lng=134.895772&code=mapB" },
  { id: 67070, name: "Nomadic Warrior's Cookbook [19]", region: "Consecrated Snowfield", type: "Nomadic Warrior's", dlc: false, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=5757&lat=-86.21875&lng=92.914044&code=mapA" },
  { id: 67230, name: "Nomadic Warrior's Cookbook [20]", region: "Siofra River", type: "Nomadic Warrior's", dlc: false, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=1332&lat=-80.8125&lng=70.236035&code=mapA" },
  { id: 67120, name: "Nomadic Warrior's Cookbook [21]", region: "Mohgwyn Palace", type: "Nomadic Warrior's", dlc: false, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=5764&lat=-85.25&lng=63.29&code=mapA" },
  { id: 67890, name: "Nomadic Warrior's Cookbook [22]", region: "Weeping Peninsula", type: "Nomadic Warrior's", dlc: false, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=3001&lat=-136.45156&lng=55.02818&code=mapB" },
  { id: 67090, name: "Nomadic Warrior's Cookbook [23]", region: "Caelid", type: "Nomadic Warrior's", dlc: false, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=3172&lat=-78.27&lng=142.86&code=mapA" },
  { id: 67910, name: "Nomadic Warrior's Cookbook [24]", region: "Consecrated Snowfield", type: "Nomadic Warrior's", dlc: false, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+map?id=4633&lat=-183.995313&lng=153.861294&code=mapB" },

  // --- Armorer's Cookbooks ---
  { id: 67200, name: "Armorer's Cookbook [1]", region: "Limgrave", type: "Armorer's", dlc: false, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=1210&lat=-184.40&lng=108.46&code=mapA" },
  { id: 67210, name: "Armorer's Cookbook [2]", region: "Limgrave", type: "Armorer's", dlc: false, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=6&lat=-196.5&lng=97.660389&code=mapA" },
  { id: 67280, name: "Armorer's Cookbook [3]", region: "Liurnia of the Lakes", type: "Armorer's", dlc: false, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=812&lat=-192.109375&lng=120.629633&code=mapA" },
  { id: 67260, name: "Armorer's Cookbook [4]", region: "Caelid", type: "Armorer's", dlc: false, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=5721&lat=-194.820312&lng=156.551741&code=mapA" },
  { id: 67310, name: "Armorer's Cookbook [5]", region: "Altus Plateau", type: "Armorer's", dlc: false, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=5723&lat=-197.296875&lng=157.473787&code=mapA" },
  { id: 67300, name: "Armorer's Cookbook [6]", region: "Altus Plateau", type: "Armorer's", dlc: false, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+map?id=1169&lat=-185.5625&lng=128.878578&code=mapB" },
  { id: 67250, name: "Armorer's Cookbook [7]", region: "Volcano Manor", type: "Armorer's", dlc: false, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=1339&lat=-86.078125&lng=57.043287&code=mapA" },

  // --- Ancient Dragon Apostle's Cookbooks ---
  { id: 68000, name: "Ancient Dragon Apostle's Cookbook [1]", region: "Caelid", type: "Ancient Dragon Apostle's", dlc: false, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=2797&lat=-93.46875&lng=74.40035&code=mapA" },
  { id: 68010, name: "Ancient Dragon Apostle's Cookbook [2]", region: "Altus Plateau", type: "Ancient Dragon Apostle's", dlc: false, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=5779&lat=-90.71087&lng=91.2537&code=mapA" },
  { id: 68030, name: "Ancient Dragon Apostle's Cookbook [3]", region: "Leyndell, Royal Capital", type: "Ancient Dragon Apostle's", dlc: false, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+map?id=3180&lat=-191.114062&lng=139.212233&code=mapA" },
  { id: 68020, name: "Ancient Dragon Apostle's Cookbook [4]", region: "Consecrated Snowfield", type: "Ancient Dragon Apostle's", dlc: false, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=5782&lat=-127.53125&lng=212.57257&code=mapA" },

  // --- Fevor's Cookbooks ---
  { id: 68200, name: "Fevor's Cookbook [1]", region: "Caelid", type: "Fevor's", dlc: false, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=23&lat=-179.590625&lng=117.990563&code=mapA" },
  { id: 68220, name: "Fevor's Cookbook [2]", region: "Liurnia of the Lakes", type: "Fevor's", dlc: false, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=4671&lat=-137.61&lng=60.08&code=mapA" },
  { id: 68210, name: "Fevor's Cookbook [3]", region: "Mountaintops of the Giants", type: "Fevor's", dlc: false },

  // --- Perfumer's Cookbooks ---
  { id: 67840, name: "Perfumer's Cookbook [1]", region: "Altus Plateau", type: "Perfumer's", dlc: false, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=5253&lat=-97.078125&lng=63.524262&code=mapA" },
  { id: 67850, name: "Perfumer's Cookbook [2]", region: "Altus Plateau", type: "Perfumer's", dlc: false, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=2940&lat=-80.07031&lng=81.01158&code=mapA" },
  { id: 67860, name: "Perfumer's Cookbook [3]", region: "Leyndell, Royal Capital", type: "Perfumer's", dlc: false, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=5777&lat=-94.078&lng=122.87559&code=mapA" },
  { id: 67920, name: "Perfumer's Cookbook [4]", region: "Mountaintops of the Giants", type: "Perfumer's", dlc: false },

  // --- Glintstone Craftsman's Cookbooks ---
  { id: 67410, name: "Glintstone Craftsman's Cookbook [1]", region: "Liurnia of the Lakes", type: "Glintstone Craftsman's", dlc: false, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=840&lat=-168.539062&lng=78.292513&code=mapA" },
  { id: 67450, name: "Glintstone Craftsman's Cookbook [2]", region: "Liurnia of the Lakes", type: "Glintstone Craftsman's", dlc: false, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=3220&lat=-160&lng=73.4&code=mapA" },
  { id: 67480, name: "Glintstone Craftsman's Cookbook [3]", region: "Liurnia of the Lakes", type: "Glintstone Craftsman's", dlc: false, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+map?id=3195&lat=-153.023437&lng=79.486946&code=mapA" },
  { id: 67400, name: "Glintstone Craftsman's Cookbook [4]", region: "Liurnia of the Lakes", type: "Glintstone Craftsman's", dlc: false, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=5771&lat=-143.75&lng=65.992809&code=mapA" },
  { id: 67420, name: "Glintstone Craftsman's Cookbook [5]", region: "Academy of Raya Lucaria", type: "Glintstone Craftsman's", dlc: false, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=2211&lat=-138.375&lng=58.574588&code=mapA" },
  { id: 67460, name: "Glintstone Craftsman's Cookbook [6]", region: "Altus Plateau", type: "Glintstone Craftsman's", dlc: false, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+map?id=1519&lat=-110.609375&lng=59.17451&code=mapA" },
  { id: 67470, name: "Glintstone Craftsman's Cookbook [7]", region: "Mt. Gelmir", type: "Glintstone Craftsman's", dlc: false, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=2920&lat=-107.4&lng=55.6&code=mapA" },
  { id: 67440, name: "Glintstone Craftsman's Cookbook [8]", region: "Mountaintops of the Giants", type: "Glintstone Craftsman's", dlc: false, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=5775&lat=-72.523&lng=146.5515&code=mapA" },

  // --- Frenzied's Cookbooks ---
  { id: 68400, name: "Frenzied's Cookbook [1]", region: "Liurnia of the Lakes", type: "Frenzied's", dlc: false, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=1811&lat=-119.46875&lng=75.060093&code=mapA" },
  { id: 68410, name: "Frenzied's Cookbook [2]", region: "Subterranean Shunning-Grounds", type: "Frenzied's", dlc: false, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=7921&lat=-101.21094&lng=118.76563&code=mapA" },

  // ============================================================
  // DLC COOKBOOKS - Shadow of the Erdtree
  // ============================================================

  // --- Greater Potentate's Cookbooks ---
  { id: 68590, name: "Greater Potentate's Cookbook [1]", region: "Gravesite Plain", type: "Greater Potentate's", dlc: true, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=655024&code=mapD" },
  { id: 68730, name: "Greater Potentate's Cookbook [2]", region: "Gravesite Plain", type: "Greater Potentate's", dlc: true, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=654928&code=mapD" },
  { id: 68690, name: "Greater Potentate's Cookbook [3]", region: "Gravesite Plain", type: "Greater Potentate's", dlc: true, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=655439&code=mapD" },
  { id: 68600, name: "Greater Potentate's Cookbook [4]", region: "Gravesite Plain", type: "Greater Potentate's", dlc: true, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=655113&code=mapD" },
  { id: 68610, name: "Greater Potentate's Cookbook [5]", region: "Scadu Altus", type: "Greater Potentate's", dlc: true, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=655237&code=mapD" },
  { id: 68720, name: "Greater Potentate's Cookbook [6]", region: "Scadu Altus", type: "Greater Potentate's", dlc: true, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=659242&code=mapD" },
  { id: 68630, name: "Greater Potentate's Cookbook [7]", region: "Scadu Altus", type: "Greater Potentate's", dlc: true, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=655272&code=mapD" },
  { id: 68680, name: "Greater Potentate's Cookbook [8]", region: "Scadu Altus", type: "Greater Potentate's", dlc: true, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=659429&code=mapD" },
  { id: 68640, name: "Greater Potentate's Cookbook [9]", region: "Shadow Keep", type: "Greater Potentate's", dlc: true, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=658913&code=mapD" },
  { id: 68650, name: "Greater Potentate's Cookbook [10]", region: "Shadow Keep", type: "Greater Potentate's", dlc: true, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=654935&code=mapD" },
  { id: 68660, name: "Greater Potentate's Cookbook [11]", region: "Ancient Ruins of Rauh", type: "Greater Potentate's", dlc: true, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=659190&code=mapD" },
  { id: 68620, name: "Greater Potentate's Cookbook [12]", region: "Ancient Ruins of Rauh", type: "Greater Potentate's", dlc: true, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=658922&code=mapD" },
  { id: 68700, name: "Greater Potentate's Cookbook [13]", region: "Abyssal Woods", type: "Greater Potentate's", dlc: true, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=655175&code=mapD" },
  { id: 68710, name: "Greater Potentate's Cookbook [14]", region: "Cerulean Coast", type: "Greater Potentate's", dlc: true, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=659027&code=mapD" },

  // --- Mad Craftsman's Cookbooks ---
  { id: 68750, name: "Mad Craftsman's Cookbook [1]", region: "Gravesite Plain", type: "Mad Craftsman's", dlc: true, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=658942&code=mapD" },
  { id: 68670, name: "Mad Craftsman's Cookbook [2]", region: "Scadu Altus", type: "Mad Craftsman's", dlc: true, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=658945&code=mapD" },
  { id: 68880, name: "Mad Craftsman's Cookbook [3]", region: "Ancient Ruins of Rauh", type: "Mad Craftsman's", dlc: true, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=659283&code=mapD" },

  // --- Ancient Dragon Knight's Cookbooks ---
  { id: 68740, name: "Ancient Dragon Knight's Cookbook [1]", region: "Gravesite Plain", type: "Ancient Dragon Knight's", dlc: true, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=655448&code=mapD" },
  { id: 68780, name: "Ancient Dragon Knight's Cookbook [2]", region: "Jagged Peak", type: "Ancient Dragon Knight's", dlc: true, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=655267&code=mapD" },

  // --- St. Trina Disciple's Cookbooks ---
  { id: 68760, name: "St. Trina Disciple's Cookbook [1]", region: "Gravesite Plain", type: "St. Trina Disciple's", dlc: true, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=659131&code=mapD" },
  { id: 68950, name: "St. Trina Disciple's Cookbook [2]", region: "Abyssal Woods", type: "St. Trina Disciple's", dlc: true, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=659153&code=mapD" },
  { id: 68840, name: "St. Trina Disciple's Cookbook [3]", region: "Abyssal Woods", type: "St. Trina Disciple's", dlc: true, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=659192&code=mapD" },

  // --- Forager Brood Cookbooks ---
  { id: 68520, name: "Forager Brood Cookbook [1]", region: "Gravesite Plain", type: "Forager Brood", dlc: true, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=658998&code=mapD" },
  { id: 68530, name: "Forager Brood Cookbook [2]", region: "Gravesite Plain", type: "Forager Brood", dlc: true, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=655229&code=mapD" },
  { id: 68540, name: "Forager Brood Cookbook [3]", region: "Scadu Altus", type: "Forager Brood", dlc: true, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=659263&code=mapD" },
  { id: 68550, name: "Forager Brood Cookbook [4]", region: "Scadu Altus", type: "Forager Brood", dlc: true, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=659268&code=mapD" },
  { id: 68560, name: "Forager Brood Cookbook [5]", region: "Ancient Ruins of Rauh", type: "Forager Brood", dlc: true, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=659270&code=mapD" },
  { id: 68510, name: "Forager Brood Cookbook [6]", region: "Cerulean Coast", type: "Forager Brood", dlc: true, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=659271&code=mapD" },
  { id: 68830, name: "Forager Brood Cookbook [7]", region: "Abyssal Woods", type: "Forager Brood", dlc: true, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=659276&code=mapD" },

  // --- Igon's Cookbooks ---
  { id: 68810, name: "Igon's Cookbook [1]", region: "Jagged Peak", type: "Igon's", dlc: true, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=659316&code=mapD" },
  { id: 68570, name: "Igon's Cookbook [2]", region: "Jagged Peak", type: "Igon's", dlc: true, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=248662&code=mapD" },

  // --- Finger-Weaver's Cookbooks ---
  { id: 68920, name: "Finger-Weaver's Cookbook [1]", region: "Finger Ruins of Rhia", type: "Finger-Weaver's", dlc: true, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=659229&code=mapD" },
  { id: 68580, name: "Finger-Weaver's Cookbook [2]", region: "Finger Ruins of Rhia", type: "Finger-Weaver's", dlc: true, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=655726&code=mapD" },

  // --- Fire Knight's Cookbooks ---
  { id: 68770, name: "Fire Knight's Cookbook [1]", region: "Shadow Keep", type: "Fire Knight's", dlc: true, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=655040&code=mapD" },
  { id: 68900, name: "Fire Knight's Cookbook [2]", region: "Shadow Keep", type: "Fire Knight's", dlc: true, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=655281&code=mapD" },

  // --- Battlefield Priest's Cookbooks ---
  { id: 68800, name: "Battlefield Priest's Cookbook [1]", region: "Gravesite Plain", type: "Battlefield Priest's", dlc: true, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=655488&code=mapD" },
  { id: 68820, name: "Battlefield Priest's Cookbook [2]", region: "Scadu Altus", type: "Battlefield Priest's", dlc: true, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=655531&code=mapD" },
  { id: 68890, name: "Battlefield Priest's Cookbook [3]", region: "Shadow Keep", type: "Battlefield Priest's", dlc: true, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=655549&code=mapD" },
  { id: 68930, name: "Battlefield Priest's Cookbook [4]", region: "Ancient Ruins of Rauh", type: "Battlefield Priest's", dlc: true, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=655527&code=mapD" },

  // --- Grave Keeper's Cookbooks ---
  { id: 68940, name: "Grave Keeper's Cookbook [1]", region: "Gravesite Plain", type: "Grave Keeper's", dlc: true, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=659070&code=mapD" },
  { id: 68850, name: "Grave Keeper's Cookbook [2]", region: "Scadu Altus", type: "Grave Keeper's", dlc: true, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=659023&code=mapD" },

  // --- Antiquity Scholar's Cookbooks ---
  { id: 68910, name: "Antiquity Scholar's Cookbook [1]", region: "Ancient Ruins of Rauh", type: "Antiquity Scholar's", dlc: true, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=655400&code=mapD" },
  { id: 68860, name: "Antiquity Scholar's Cookbook [2]", region: "Ancient Ruins of Rauh", type: "Antiquity Scholar's", dlc: true, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=655631&code=mapD" },

  // --- Tibia's Cookbook ---
  { id: 68870, name: "Tibia's Cookbook", region: "Gravesite Plain", type: "Tibia's", dlc: true, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=659025&code=mapD" },

  // --- Loyal Knight's Cookbook ---
  { id: 68790, name: "Loyal Knight's Cookbook", region: "Scadu Altus", type: "Loyal Knight's", dlc: true, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=655123&code=mapD" },
]

// ============================================================
// PAINTINGS
// ============================================================
// Note: Paintings do not have dedicated global event flags like cookbooks or gestures.
// These IDs are key item (Goods) IDs from the game's item database.
// Tracking paintings requires checking inventory for the key item rather than
// reading event flags. The IDs are included for reference and display purposes.

export const PAINTINGS = [
  // --- Base Game Paintings ---
  { id: 8200, name: "Homing Instinct", region: "Limgrave", dlc: false, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=6729&lat=-181.210937&lng=113.551444&code=mapA" },
  { id: 8201, name: "Resurrection", region: "Liurnia of the Lakes", dlc: false, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=6734&lat=-140.914062&lng=79.059176&code=mapA" },
  { id: 8202, name: "Champion's Song", region: "Altus Plateau", dlc: false, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=2829&lat=-81.78906&lng=83.3516&code=mapA" },
  { id: 8203, name: "Sorcerer", region: "Mountaintops of the Giants", dlc: false, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+map?id=3821&lat=-60.304687&lng=156.690235&code=mapA" },
  { id: 8204, name: "Prophecy", region: "Stormveil Castle", dlc: false, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=5946&lat=-202.265&lng=104.2617&code=mapA" },
  { id: 8205, name: "Flightless Bird", region: "Leyndell, Royal Capital", dlc: false, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=6752&lat=-103.890625&lng=112.599511&code=mapA" },
  { id: 8206, name: "Redmane", region: "Caelid", dlc: false, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=3202&lat=-177.45&lng=147.935372&code=mapA" },

  // --- DLC Paintings - Shadow of the Erdtree ---
  { id: 8207, name: "Incursion", region: "Gravesite Plain", dlc: true, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=655238&code=mapD" },
  { id: 8208, name: "Domain of Dragons", region: "Shadow Keep", dlc: true },
  { id: 8209, name: "Sacred Tower", region: "Scadu Altus", dlc: true, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=655264&code=mapD" },
]

// ============================================================
// WHETBLADES
// ============================================================
// Event flag IDs from The Grand Archives Cheat Table (Unlock all Whetblades.cea)
// Each whetblade unlocks specific weapon affinities when obtained.
// The Whetstone Knife (60130) is the base item that enables weapon customization.

export const WHETBLADES = [
  { id: 60130, name: "Whetstone Knife", region: "Limgrave", dlc: false, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=363&lat=-186.421875&lng=103.832642&code=mapA" },
  { id: 65610, name: "Iron Whetblade", region: "Stormveil Castle", dlc: false, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=923&lat=-178.875&lng=86.305276&code=mapA" },
  { id: 65640, name: "Red-Hot Whetblade", region: "Caelid", dlc: false, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=6812&lat=-194&lng=157&code=mapA" },
  { id: 65660, name: "Sanctified Whetblade", region: "Altus Plateau", dlc: false, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=3942&lat=-105.492&lng=113.16808&code=mapA" },
  { id: 65680, name: "Glintstone Whetblade", region: "Academy of Raya Lucaria", dlc: false, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=2269&lat=-137.03125&lng=57.743758&code=mapA" },
  { id: 65700, name: "Black Whetblade", region: "Nokron, Eternal City", dlc: false, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=1897&lat=-183.08594&lng=129.02778&code=mapB" },
]

// ============================================================
// GESTURES
// ============================================================
// Base game gesture event flag IDs (60800-60849) from soulsmods Elden Ring Event Flag Reference
// https://soulsmods.github.io/elden-ring-eventparam/
//
// Japanese-to-English name mapping derived by cross-referencing:
//   - Japanese flag descriptions from soulsmods eventparam
//   - English gesture names from er-save-manager gesture database
//
// Flags 60825 (The Carian Oath) and 60838 (Fetal Position) are cut content
// and excluded from the list below.
//
// DLC gestures (Shadow of the Erdtree) do not have known event flag IDs in
// the 60800 range. They are included with estimated flag IDs based on the
// DLC gesture slot IDs from the er-save-manager gesture database.
// NOTE: DLC gesture flag IDs (60850-60854) are ESTIMATED and may not be accurate.

export const GESTURES = [
  // --- Greetings ---
  { id: 60800, name: "Bow", dlc: false },
  { id: 60801, name: "Polite Bow", dlc: false },
  { id: 60802, name: "Reverential Bow", dlc: false },
  { id: 60803, name: "Curtsy", dlc: false },
  { id: 60804, name: "My Thanks", dlc: false },
  { id: 60805, name: "My Lord", dlc: false },
  { id: 60806, name: "Warm Welcome", dlc: false },
  { id: 60807, name: "Wave", dlc: false },
  { id: 60808, name: "Casual Greeting", dlc: false },
  { id: 60809, name: "Strength!", dlc: false },
  { id: 60810, name: "As You Wish", dlc: false },

  // --- Gesturing ---
  { id: 60811, name: "Point Forwards", dlc: false },
  { id: 60812, name: "Point Upwards", dlc: false },
  { id: 60813, name: "Point Downwards", dlc: false },
  { id: 60814, name: "Beckon", dlc: false },
  { id: 60815, name: "Wait!", dlc: false },
  { id: 60816, name: "Calm Down!", dlc: false, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=9849&code=mapA" },
  { id: 60817, name: "Nod In Thought", dlc: false },

  // --- Submissive ---
  { id: 60818, name: "Extreme Repentance", dlc: false },
  { id: 60819, name: "Grovel For Mercy", dlc: false },

  // --- Battle ---
  { id: 60820, name: "Rallying Cry", dlc: false },
  { id: 60821, name: "Heartening Cry", dlc: false },
  { id: 60822, name: "By My Sword", dlc: false },
  { id: 60823, name: "Hoslow's Oath", dlc: false },
  { id: 60824, name: "Fire Spur Me", dlc: false, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=7906&code=mapA" },

  // --- Celebration ---
  { id: 60826, name: "Bravo!", dlc: false },
  { id: 60827, name: "Jump for Joy", dlc: false },
  { id: 60828, name: "Triumphant Delight", dlc: false },
  { id: 60829, name: "Fancy Spin", dlc: false },
  { id: 60830, name: "Finger Snap", dlc: false },

  // --- Emotion ---
  { id: 60831, name: "Dejection", dlc: false },
  { id: 60840, name: "What Do You Want?", dlc: false },

  // --- Resting ---
  { id: 60832, name: "Patches' Crouch", dlc: false },
  { id: 60833, name: "Crossed Legs", dlc: false, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=8851&lat=-187.3&lng=96.17766&code=mapA" },
  { id: 60834, name: "Rest", dlc: false },
  { id: 60835, name: "Sitting Sideways", dlc: false },
  { id: 60836, name: "Dozing Cross-Legged", dlc: false, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=912&lat=-179.859375&lng=85.11789&code=mapA" },
  { id: 60837, name: "Spread Out", dlc: false, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=4549&lat=-151.88&lng=67.387&code=mapA" },
  { id: 60839, name: "Balled Up", dlc: false },

  // --- Prayer ---
  { id: 60841, name: "Prayer", dlc: false },
  { id: 60842, name: "Desperate Prayer", dlc: false },
  { id: 60843, name: "Rapture", dlc: false },
  { id: 60845, name: "Erudition", dlc: false },
  { id: 60846, name: "Outer Order", dlc: false },
  { id: 60847, name: "Inner Order", dlc: false },
  { id: 60848, name: "Golden Order Totality", dlc: false },

  // --- Special ---
  { id: 60849, name: "The Ring", dlc: false },

  // --- DLC Gestures - Shadow of the Erdtree ---
  // NOTE: These flag IDs (60850-60854) are ESTIMATED based on the pattern
  // of base game gesture flags. They may need to be verified/corrected.
  { id: 60850, name: "May the Best Win", dlc: true, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=655761&code=mapD" },
  { id: 60851, name: "The Two Fingers", dlc: true, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=659341&code=mapD" },
  { id: 60852, name: "Let Us Go Together", dlc: true, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=659412&code=mapD" },
  { id: 60853, name: "O Mother", dlc: true, mapUrl: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=655089&code=mapD" },
  { id: 60854, name: "Ring of Miquella", dlc: true },
]

// ============================================================
// COLLECTIBLE REGIONS
// ============================================================
// Combined region list for all collectible types, matching the region lists
// used in bosses.js and graces.js for consistency.

export const COLLECTIBLE_REGIONS = [
  // Base game
  "Limgrave",
  "Weeping Peninsula",
  "Stormveil Castle",
  "Liurnia of the Lakes",
  "Academy of Raya Lucaria",
  "Caelid",
  "Altus Plateau",
  "Mt. Gelmir",
  "Volcano Manor",
  "Leyndell, Royal Capital",
  "Mountaintops of the Giants",
  "Consecrated Snowfield",
  "Miquella's Haligtree",
  "Mohgwyn Palace",
  "Ainsel River",
  "Siofra River",
  "Nokron, Eternal City",
  "Subterranean Shunning-Grounds",
  // DLC - Shadow of the Erdtree
  "Gravesite Plain",
  "Scadu Altus",
  "Shadow Keep",
  "Abyssal Woods",
  "Ancient Ruins of Rauh",
  "Cerulean Coast",
  "Jagged Peak",
  "Enir-Ilim",
  "Finger Ruins of Rhia",
]
