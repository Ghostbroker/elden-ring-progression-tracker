import { useState, useMemo, useCallback, useEffect } from 'react'
import TabNavigation from './TabNavigation'
import BossChecklist from './BossChecklist'
import GraceChecklist from './GraceChecklist'
import CollectibleChecklist from './CollectibleChecklist'
import FilterSidebar from './FilterSidebar'
import { BOSS_REGIONS } from '../data/bosses'
import { GRACE_REGIONS } from '../data/graces'
import { COOKBOOKS, PAINTINGS, WHETBLADES, GESTURES, COLLECTIBLE_REGIONS } from '../data/collectibles'
import { WEAPONS, WEAPON_CATEGORIES } from '../data/weapons'
import { ARMOR, ARMOR_CATEGORIES } from '../data/armor'
import { TALISMANS, TALISMAN_CATEGORIES } from '../data/talismans'
import { MAGIC, MAGIC_CATEGORIES } from '../data/magic'
import { SPIRIT_ASHES, SPIRIT_ASH_CATEGORIES } from '../data/spiritAshes'
import { ASHES_OF_WAR, ASH_OF_WAR_CATEGORIES } from '../data/ashesOfWar'

const TAB_REGIONS = {
  bosses: BOSS_REGIONS,
  graces: GRACE_REGIONS,
  cookbooks: COLLECTIBLE_REGIONS,
  armaments: WEAPON_CATEGORIES,
  armor: ARMOR_CATEGORIES,
  talismans: TALISMAN_CATEGORIES,
  magic: MAGIC_CATEGORIES,
  spiritAshes: SPIRIT_ASH_CATEGORIES,
  ashesOfWar: ASH_OF_WAR_CATEGORIES,
}

// Tabs that support region filtering
const REGION_TABS = new Set([
  'bosses', 'graces', 'cookbooks',
  'armaments', 'armor', 'talismans', 'magic', 'spiritAshes', 'ashesOfWar',
])

// Map items that use `category` to include `region` for CollectibleChecklist compatibility
function addRegionFromCategory(items) {
  return items.map(item => ({ ...item, region: item.category }))
}

export default function Dashboard({ profile, checkFlag, checkInventory, onBack, onNewFile }) {
  const [activeTab, setActiveTab] = useState('bosses')
  const [showDlc, setShowDlc] = useState(true)
  const [statusFilter, setStatusFilter] = useState('all')
  const [regionFilter, setRegionFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [showMobileFilters, setShowMobileFilters] = useState(false)

  // Manual checks — persisted to localStorage per character
  const storageKey = `manualChecks:${profile.name}`
  const [manualChecks, setManualChecks] = useState(() => {
    try {
      const saved = localStorage.getItem(storageKey)
      return saved ? new Set(JSON.parse(saved)) : new Set()
    } catch { return new Set() }
  })

  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify([...manualChecks]))
    } catch { /* ignore */ }
  }, [manualChecks, storageKey])

  // Wrapped check functions: save data OR manual check
  const checkFlagOrManual = useCallback((id) => {
    return checkFlag(id) || manualChecks.has('f' + id)
  }, [checkFlag, manualChecks])

  const checkInventoryOrManual = useCallback((id) => {
    return checkInventory(id) || manualChecks.has('i' + id)
  }, [checkInventory, manualChecks])

  // Toggle handlers — only allow toggling items NOT completed by save data
  const toggleFlag = useCallback((id) => {
    if (checkFlag(id)) return
    setManualChecks(prev => {
      const next = new Set(prev)
      const key = 'f' + id
      if (next.has(key)) next.delete(key)
      else next.add(key)
      return next
    })
  }, [checkFlag])

  const toggleInventory = useCallback((id) => {
    if (checkInventory(id)) return
    setManualChecks(prev => {
      const next = new Set(prev)
      const key = 'i' + id
      if (next.has(key)) next.delete(key)
      else next.add(key)
      return next
    })
  }, [checkInventory])

  // Pre-map inventory items to include `region` from `category` (memoized)
  const mappedWeapons = useMemo(() => addRegionFromCategory(WEAPONS), [])
  const mappedArmor = useMemo(() => addRegionFromCategory(ARMOR), [])
  const mappedTalismans = useMemo(() => addRegionFromCategory(TALISMANS), [])
  const mappedMagic = useMemo(() => addRegionFromCategory(MAGIC), [])
  const mappedSpiritAshes = useMemo(() => addRegionFromCategory(SPIRIT_ASHES), [])
  const mappedAshesOfWar = useMemo(() => addRegionFromCategory(ASHES_OF_WAR), [])

  // Reset filters when switching tabs
  const handleTabChange = (tab) => {
    setActiveTab(tab)
    setStatusFilter('all')
    setRegionFilter('all')
    setSearchQuery('')
  }

  const currentRegions = TAB_REGIONS[activeTab] || []
  const showRegionFilter = REGION_TABS.has(activeTab)

  return (
    <div className="min-h-screen">
      {/* Top bar */}
      <header className="bg-bg-card/80 backdrop-blur-sm border-b border-gold/20 px-4 py-3 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <h1 className="text-lg sm:text-xl font-heading text-gold">Elden Ring Progression Tracker</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-text-primary font-heading text-sm sm:text-base">{profile.name}</p>
              <p className="text-text-muted text-xs">Level {profile.level}</p>
            </div>
            <div className="flex gap-2">
              <button onClick={onBack}
                className="text-xs text-text-muted hover:text-text-primary transition-colors">
                Switch Character
              </button>
              <span className="text-text-muted/30">|</span>
              <button onClick={onNewFile}
                className="text-xs text-text-muted hover:text-text-primary transition-colors">
                New File
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main content with sidebar */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <TabNavigation activeTab={activeTab} onTabChange={handleTabChange} />

        <div className="flex gap-8">
          {/* Mobile filter button */}
          <button
            onClick={() => setShowMobileFilters(!showMobileFilters)}
            className="md:hidden fixed bottom-4 right-4 z-20 bg-gold text-bg-primary
                       px-4 py-2 rounded-full shadow-lg font-medium text-sm"
          >
            Filters
          </button>

          {/* Sidebar - hidden on mobile unless toggled */}
          {showMobileFilters && (
            <div
              className="fixed inset-0 z-30 bg-black/50 md:hidden"
              onClick={() => setShowMobileFilters(false)}
            />
          )}
          <div className={`
            ${showMobileFilters
              ? 'fixed left-0 top-0 bottom-0 z-40 bg-bg-primary p-4 pt-16 overflow-y-auto w-64 shadow-xl'
              : 'hidden md:block'}
          `}>
            {showMobileFilters && (
              <button
                onClick={() => setShowMobileFilters(false)}
                className="absolute top-4 right-4 text-text-muted hover:text-text-primary text-xl"
                aria-label="Close filters"
              >
                ✕
              </button>
            )}
            <FilterSidebar
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              showDlc={showDlc}
              onShowDlcChange={setShowDlc}
              statusFilter={statusFilter}
              onStatusFilterChange={setStatusFilter}
              regionFilter={regionFilter}
              onRegionFilterChange={setRegionFilter}
              regions={currentRegions}
              showRegionFilter={showRegionFilter}
            />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            {activeTab === 'bosses' && (
              <BossChecklist
                checkFlag={checkFlagOrManual}
                onToggle={toggleFlag}
                showDlc={showDlc}
                statusFilter={statusFilter}
                regionFilter={regionFilter}
                searchQuery={searchQuery}
              />
            )}

            {activeTab === 'graces' && (
              <GraceChecklist
                checkFlag={checkFlagOrManual}
                onToggle={toggleFlag}
                showDlc={showDlc}
                statusFilter={statusFilter}
                regionFilter={regionFilter}
                searchQuery={searchQuery}
              />
            )}

            {activeTab === 'armaments' && (
              <CollectibleChecklist
                items={mappedWeapons}
                regions={WEAPON_CATEGORIES}
                checkFlag={checkInventoryOrManual}
                onToggle={toggleInventory}
                label="Armament Collection"
                showDlc={showDlc}
                statusFilter={statusFilter}
                regionFilter={regionFilter}
                searchQuery={searchQuery}
              />
            )}

            {activeTab === 'armor' && (
              <CollectibleChecklist
                items={mappedArmor}
                regions={ARMOR_CATEGORIES}
                checkFlag={checkInventoryOrManual}
                onToggle={toggleInventory}
                label="Armor Collection"
                showDlc={showDlc}
                statusFilter={statusFilter}
                regionFilter={regionFilter}
                searchQuery={searchQuery}
              />
            )}

            {activeTab === 'talismans' && (
              <CollectibleChecklist
                items={mappedTalismans}
                regions={TALISMAN_CATEGORIES}
                checkFlag={checkInventoryOrManual}
                onToggle={toggleInventory}
                label="Talisman Collection"
                showDlc={showDlc}
                statusFilter={statusFilter}
                regionFilter={regionFilter}
                searchQuery={searchQuery}
              />
            )}

            {activeTab === 'magic' && (
              <CollectibleChecklist
                items={mappedMagic}
                regions={MAGIC_CATEGORIES}
                checkFlag={checkInventoryOrManual}
                onToggle={toggleInventory}
                label="Magic Collection"
                showDlc={showDlc}
                statusFilter={statusFilter}
                regionFilter={regionFilter}
                searchQuery={searchQuery}
              />
            )}

            {activeTab === 'spiritAshes' && (
              <CollectibleChecklist
                items={mappedSpiritAshes}
                regions={null}
                checkFlag={checkInventoryOrManual}
                onToggle={toggleInventory}
                label="Spirit Ash Collection"
                showDlc={showDlc}
                statusFilter={statusFilter}
                regionFilter={regionFilter}
                searchQuery={searchQuery}
                useRegionGrouping={false}
              />
            )}

            {activeTab === 'ashesOfWar' && (
              <CollectibleChecklist
                items={mappedAshesOfWar}
                regions={ASH_OF_WAR_CATEGORIES}
                checkFlag={checkInventoryOrManual}
                onToggle={toggleInventory}
                label="Ash of War Collection"
                showDlc={showDlc}
                statusFilter={statusFilter}
                regionFilter={regionFilter}
                searchQuery={searchQuery}
              />
            )}

            {activeTab === 'cookbooks' && (
              <CollectibleChecklist
                items={COOKBOOKS}
                regions={COLLECTIBLE_REGIONS}
                checkFlag={checkFlagOrManual}
                onToggle={toggleFlag}
                label="Cookbook Completion"
                showDlc={showDlc}
                statusFilter={statusFilter}
                regionFilter={regionFilter}
                searchQuery={searchQuery}
              />
            )}

            {activeTab === 'paintings' && (
              <CollectibleChecklist
                items={PAINTINGS}
                regions={COLLECTIBLE_REGIONS}
                checkFlag={checkInventoryOrManual}
                onToggle={toggleInventory}
                label="Painting Completion"
                showDlc={showDlc}
                statusFilter={statusFilter}
                regionFilter={regionFilter}
                searchQuery={searchQuery}
              />
            )}

            {activeTab === 'whetblades' && (
              <CollectibleChecklist
                items={WHETBLADES}
                regions={null}
                checkFlag={checkFlagOrManual}
                onToggle={toggleFlag}
                label="Whetblade Completion"
                showDlc={showDlc}
                statusFilter={statusFilter}
                regionFilter={regionFilter}
                searchQuery={searchQuery}
                useRegionGrouping={false}
              />
            )}

            {activeTab === 'gestures' && (
              <CollectibleChecklist
                items={GESTURES}
                regions={null}
                checkFlag={checkFlagOrManual}
                onToggle={toggleFlag}
                label="Gesture Completion"
                showDlc={showDlc}
                statusFilter={statusFilter}
                regionFilter={regionFilter}
                searchQuery={searchQuery}
                useRegionGrouping={false}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
