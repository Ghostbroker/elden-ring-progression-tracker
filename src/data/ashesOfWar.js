// Complete Elden Ring ashes of war data — base game + Shadow of the Erdtree DLC
// IDs are EquipParamGem row IDs (decimal param IDs from the gem param table)
// Sources: The-Grand-Archives/Elden-Ring-CT-TGA GEM_ID.xml, Fextralife wiki
//
// Base game IDs verified against aditya-u/Elden-Ring-All-Hex-Codes ashes_of_war.csv
// and The Grand Archives cheat table GEM_ID dropdown.
// DLC IDs verified against The Grand Archives ItemGemDLC.xml dropdown.
// Categories represent the primary affinity each ash of war applies.

export const ASH_OF_WAR_CATEGORIES = [
  'Standard',
  'Heavy',
  'Keen',
  'Quality',
  'Fire',
  'Flame Art',
  'Lightning',
  'Sacred',
  'Magic',
  'Cold',
  'Poison',
  'Blood',
  'Occult',
  'Unique',
]

export const ASHES_OF_WAR = [
  // =========================================================================
  // MELEE WEAPON ASHES — Attack skills (10000–12400)
  // =========================================================================
  { id: 10000, name: 'Ash of War: Lion\'s Claw', category: 'Heavy', dlc: false },
  { id: 10100, name: 'Ash of War: Impaling Thrust', category: 'Keen', dlc: false },
  { id: 10200, name: 'Ash of War: Piercing Fang', category: 'Keen', dlc: false },
  { id: 10300, name: 'Ash of War: Spinning Slash', category: 'Keen', dlc: false },
  { id: 10500, name: 'Ash of War: Charge Forth', category: 'Quality', dlc: false },
  { id: 10600, name: 'Ash of War: Stamp (Upward Cut)', category: 'Heavy', dlc: false },
  { id: 10700, name: 'Ash of War: Stamp (Sweep)', category: 'Heavy', dlc: false },
  { id: 10800, name: 'Ash of War: Blood Tax', category: 'Blood', dlc: false },
  { id: 10900, name: 'Ash of War: Repeating Thrust', category: 'Keen', dlc: false },
  { id: 11000, name: 'Ash of War: Wild Strikes', category: 'Heavy', dlc: false },
  { id: 11100, name: 'Ash of War: Spinning Strikes', category: 'Quality', dlc: false },
  { id: 11200, name: 'Ash of War: Double Slash', category: 'Keen', dlc: false },
  { id: 11300, name: 'Ash of War: Prelate\'s Charge', category: 'Flame Art', dlc: false },
  { id: 11400, name: 'Ash of War: Unsheathe', category: 'Keen', dlc: false },
  { id: 11500, name: 'Ash of War: Square Off', category: 'Quality', dlc: false },
  { id: 11600, name: 'Ash of War: Giant Hunt', category: 'Quality', dlc: false },
  { id: 11800, name: 'Ash of War: Loretta\'s Slash', category: 'Magic', dlc: false },
  { id: 11900, name: 'Ash of War: Poison Moth Flight', category: 'Poison', dlc: false },
  { id: 12000, name: 'Ash of War: Spinning Weapon', category: 'Magic', dlc: false },
  { id: 12200, name: 'Ash of War: Storm Assault', category: 'Quality', dlc: false },
  { id: 12300, name: 'Ash of War: Stormcaller', category: 'Quality', dlc: false },
  { id: 12400, name: 'Ash of War: Sword Dance', category: 'Keen', dlc: false },

  // =========================================================================
  // MELEE WEAPON ASHES — Elemental / special skills (20000–22800)
  // =========================================================================
  { id: 20000, name: 'Ash of War: Glintblade Phalanx', category: 'Magic', dlc: false },
  { id: 20100, name: 'Ash of War: Sacred Blade', category: 'Sacred', dlc: false },
  { id: 20200, name: 'Ash of War: Ice Spear', category: 'Cold', dlc: false },
  { id: 20300, name: 'Ash of War: Glintstone Pebble', category: 'Magic', dlc: false },
  { id: 20400, name: 'Ash of War: Bloody Slash', category: 'Blood', dlc: false },
  { id: 20500, name: 'Ash of War: Lifesteal Fist', category: 'Occult', dlc: false },
  { id: 20700, name: 'Ash of War: Eruption', category: 'Fire', dlc: false },
  { id: 20800, name: 'Ash of War: Prayerful Strike', category: 'Sacred', dlc: false },
  { id: 20900, name: 'Ash of War: Gravitas', category: 'Magic', dlc: false },
  { id: 21000, name: 'Ash of War: Storm Blade', category: 'Quality', dlc: false },
  { id: 21200, name: 'Ash of War: Earthshaker', category: 'Heavy', dlc: false },
  { id: 21300, name: 'Ash of War: Golden Land', category: 'Sacred', dlc: false },
  { id: 21400, name: 'Ash of War: Flaming Strike', category: 'Fire', dlc: false },
  { id: 21600, name: 'Ash of War: Thunderbolt', category: 'Lightning', dlc: false },
  { id: 21700, name: 'Ash of War: Lightning Slash', category: 'Lightning', dlc: false },
  { id: 21800, name: 'Ash of War: Carian Grandeur', category: 'Magic', dlc: false },
  { id: 21900, name: 'Ash of War: Carian Greatsword', category: 'Magic', dlc: false },
  { id: 22000, name: 'Ash of War: Vacuum Slice', category: 'Quality', dlc: false },
  { id: 22100, name: 'Ash of War: Black Flame Tornado', category: 'Flame Art', dlc: false },
  { id: 22200, name: 'Ash of War: Sacred Ring of Light', category: 'Sacred', dlc: false },
  { id: 22400, name: 'Ash of War: Blood Blade', category: 'Blood', dlc: false },
  { id: 22500, name: 'Ash of War: Phantom Slash', category: 'Quality', dlc: false },
  { id: 22600, name: 'Ash of War: Spectral Lance', category: 'Occult', dlc: false },
  { id: 22700, name: 'Ash of War: Chilling Mist', category: 'Cold', dlc: false },
  { id: 22800, name: 'Ash of War: Poisonous Mist', category: 'Poison', dlc: false },

  // =========================================================================
  // SHIELD ASHES (30000–31000)
  // =========================================================================
  { id: 30000, name: 'Ash of War: Shield Bash', category: 'Standard', dlc: false },
  { id: 30100, name: 'Ash of War: Barricade Shield', category: 'Standard', dlc: false },
  { id: 30200, name: 'Ash of War: Parry', category: 'Standard', dlc: false },
  { id: 30500, name: 'Ash of War: Carian Retaliation', category: 'Magic', dlc: false },
  { id: 30600, name: 'Ash of War: Storm Wall', category: 'Standard', dlc: false },
  { id: 30700, name: 'Ash of War: Golden Parry', category: 'Sacred', dlc: false },
  { id: 30800, name: 'Ash of War: Shield Crash', category: 'Standard', dlc: false },
  { id: 30900, name: 'Ash of War: No Skill', category: 'Standard', dlc: false },
  { id: 31000, name: 'Ash of War: Thops\'s Barrier', category: 'Magic', dlc: false },

  // =========================================================================
  // BOW / RANGED ASHES (40000–40600)
  // =========================================================================
  { id: 40000, name: 'Ash of War: Through and Through', category: 'Standard', dlc: false },
  { id: 40100, name: 'Ash of War: Barrage', category: 'Standard', dlc: false },
  { id: 40200, name: 'Ash of War: Mighty Shot', category: 'Standard', dlc: false },
  { id: 40400, name: 'Ash of War: Enchanted Shot', category: 'Standard', dlc: false },
  { id: 40500, name: 'Ash of War: Sky Shot', category: 'Standard', dlc: false },
  { id: 40600, name: 'Ash of War: Rain of Arrows', category: 'Standard', dlc: false },

  // =========================================================================
  // STOMP / GROUND ASHES (50100–50900)
  // =========================================================================
  { id: 50100, name: 'Ash of War: Hoarfrost Stomp', category: 'Cold', dlc: false },
  { id: 50200, name: 'Ash of War: Storm Stomp', category: 'Quality', dlc: false },
  { id: 50300, name: 'Ash of War: Kick', category: 'Heavy', dlc: false },
  { id: 50400, name: 'Ash of War: Lightning Ram', category: 'Lightning', dlc: false },
  { id: 50500, name: 'Ash of War: Flame of the Redmanes', category: 'Fire', dlc: false },
  { id: 50600, name: 'Ash of War: Ground Slam', category: 'Heavy', dlc: false },
  { id: 50700, name: 'Ash of War: Golden Slam', category: 'Sacred', dlc: false },
  { id: 50800, name: 'Ash of War: Waves of Darkness', category: 'Magic', dlc: false },
  { id: 50900, name: 'Ash of War: Hoarah Loux\'s Earthshaker', category: 'Heavy', dlc: false },

  // =========================================================================
  // BUFF / ENCHANTMENT ASHES (60000–60700)
  // =========================================================================
  { id: 60000, name: 'Ash of War: Determination', category: 'Quality', dlc: false },
  { id: 60100, name: 'Ash of War: Royal Knight\'s Resolve', category: 'Quality', dlc: false },
  { id: 60200, name: 'Ash of War: Assassin\'s Gambit', category: 'Occult', dlc: false },
  { id: 60300, name: 'Ash of War: Golden Vow', category: 'Sacred', dlc: false },
  { id: 60400, name: 'Ash of War: Sacred Order', category: 'Sacred', dlc: false },
  { id: 60500, name: 'Ash of War: Shared Order', category: 'Sacred', dlc: false },
  { id: 60600, name: 'Ash of War: Seppuku', category: 'Blood', dlc: false },
  { id: 60700, name: 'Ash of War: Cragblade', category: 'Heavy', dlc: false },

  // =========================================================================
  // ROAR ASHES (65000–65400)
  // =========================================================================
  { id: 65000, name: 'Ash of War: Barbaric Roar', category: 'Heavy', dlc: false },
  { id: 65100, name: 'Ash of War: War Cry', category: 'Heavy', dlc: false },
  { id: 65200, name: 'Ash of War: Beast\'s Roar', category: 'Keen', dlc: false },
  { id: 65300, name: 'Ash of War: Troll\'s Roar', category: 'Heavy', dlc: false },
  { id: 65400, name: 'Ash of War: Braggart\'s Roar', category: 'Heavy', dlc: false },

  // =========================================================================
  // ENDURANCE / DEFENSIVE ASHES (70000–70200)
  // =========================================================================
  { id: 70000, name: 'Ash of War: Endure', category: 'Heavy', dlc: false },
  { id: 70100, name: 'Ash of War: Vow of the Indomitable', category: 'Sacred', dlc: false },
  { id: 70200, name: 'Ash of War: Holy Ground', category: 'Sacred', dlc: false },

  // =========================================================================
  // MOVEMENT ASHES (80000–80200)
  // =========================================================================
  { id: 80000, name: 'Ash of War: Quickstep', category: 'Keen', dlc: false },
  { id: 80100, name: 'Ash of War: Bloodhound\'s Step', category: 'Keen', dlc: false },
  { id: 80200, name: 'Ash of War: Raptor of the Mists', category: 'Keen', dlc: false },

  // =========================================================================
  // STEALTH ASH (85000)
  // =========================================================================
  { id: 85000, name: 'Ash of War: White Shadow\'s Lure', category: 'Occult', dlc: false },

  // =========================================================================
  // SHADOW OF THE ERDTREE DLC ASHES (200000+)
  // =========================================================================
  { id: 200000, name: 'Ash of War: Dryleaf Whirlwind', category: 'Standard', dlc: true },
  { id: 200100, name: 'Ash of War: Aspects of the Crucible: Wings', category: 'Sacred', dlc: true },
  { id: 400000, name: 'Ash of War: Spinning Gravity Thrust', category: 'Heavy', dlc: true },
  { id: 401000, name: 'Ash of War: Palm Blast', category: 'Standard', dlc: true },
  { id: 402000, name: 'Ash of War: Piercing Throw', category: 'Keen', dlc: true },
  { id: 403000, name: 'Ash of War: Scattershot Throw', category: 'Keen', dlc: true },
  { id: 404000, name: 'Ash of War: Wall of Sparks', category: 'Standard', dlc: true },
  { id: 405000, name: 'Ash of War: Rolling Sparks', category: 'Standard', dlc: true },
  { id: 406000, name: 'Ash of War: Raging Beast', category: 'Keen', dlc: true },
  { id: 407000, name: 'Ash of War: Savage Claws', category: 'Keen', dlc: true },
  { id: 409000, name: 'Ash of War: Blind Spot', category: 'Keen', dlc: true },
  { id: 410000, name: 'Ash of War: Swift Slash', category: 'Keen', dlc: true },
  { id: 411000, name: 'Ash of War: Overhead Stance', category: 'Keen', dlc: true },
  { id: 412000, name: 'Ash of War: Wing Stance', category: 'Quality', dlc: true },
  { id: 413000, name: 'Ash of War: Blinkbolt', category: 'Lightning', dlc: true },
  { id: 414000, name: 'Ash of War: Flame Skewer', category: 'Flame Art', dlc: true },
  { id: 415000, name: 'Ash of War: Savage Lion\'s Claw', category: 'Heavy', dlc: true },
  { id: 416000, name: 'Ash of War: Divine Beast Frost Stomp', category: 'Cold', dlc: true },
  { id: 417000, name: 'Ash of War: Flame Spear', category: 'Flame Art', dlc: true },
  { id: 418000, name: 'Ash of War: Carian Sovereignty', category: 'Magic', dlc: true },
  { id: 419000, name: 'Ash of War: Shriek of Sorrow', category: 'Occult', dlc: true },
  { id: 422000, name: 'Ash of War: Ghostflame Call', category: 'Cold', dlc: true },
  { id: 505000, name: 'Ash of War: The Poison Flower Blooms Twice', category: 'Poison', dlc: true },
  { id: 548000, name: 'Ash of War: Igon\'s Drake Hunt', category: 'Standard', dlc: true },
  { id: 800000, name: 'Ash of War: Shield Strike', category: 'Standard', dlc: true },
]
