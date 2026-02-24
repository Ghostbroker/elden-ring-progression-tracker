import { useState } from 'react'
import TabNavigation from './TabNavigation'
import BossChecklist from './BossChecklist'
import GraceChecklist from './GraceChecklist'
import CollectibleChecklist from './CollectibleChecklist'
import FilterSidebar from './FilterSidebar'
import { BOSS_REGIONS } from '../data/bosses'
import { GRACE_REGIONS } from '../data/graces'
import { COOKBOOKS, PAINTINGS, WHETBLADES, GESTURES, COLLECTIBLE_REGIONS } from '../data/collectibles'

const TAB_REGIONS = {
  bosses: BOSS_REGIONS,
  graces: GRACE_REGIONS,
  cookbooks: COLLECTIBLE_REGIONS,
}

// Tabs that support region filtering
const REGION_TABS = new Set(['bosses', 'graces', 'cookbooks'])

export default function Dashboard({ profile, checkFlag, onBack, onNewFile }) {
  const [activeTab, setActiveTab] = useState('bosses')
  const [showDlc, setShowDlc] = useState(true)
  const [statusFilter, setStatusFilter] = useState('all')
  const [regionFilter, setRegionFilter] = useState('all')
  const [showMobileFilters, setShowMobileFilters] = useState(false)

  // Reset filters when switching tabs
  const handleTabChange = (tab) => {
    setActiveTab(tab)
    setStatusFilter('all')
    setRegionFilter('all')
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
                checkFlag={checkFlag}
                showDlc={showDlc}
                statusFilter={statusFilter}
                regionFilter={regionFilter}
              />
            )}

            {activeTab === 'graces' && (
              <GraceChecklist
                checkFlag={checkFlag}
                showDlc={showDlc}
                statusFilter={statusFilter}
                regionFilter={regionFilter}
              />
            )}

            {activeTab === 'cookbooks' && (
              <CollectibleChecklist
                items={COOKBOOKS}
                regions={COLLECTIBLE_REGIONS}
                checkFlag={checkFlag}
                label="Cookbook Completion"
                showDlc={showDlc}
                statusFilter={statusFilter}
                regionFilter={regionFilter}
              />
            )}

            {activeTab === 'paintings' && (
              <CollectibleChecklist
                items={PAINTINGS}
                regions={COLLECTIBLE_REGIONS}
                checkFlag={checkFlag}
                label="Painting Completion"
                showDlc={showDlc}
                statusFilter={statusFilter}
                regionFilter={regionFilter}
              />
            )}

            {activeTab === 'whetblades' && (
              <CollectibleChecklist
                items={WHETBLADES}
                regions={null}
                checkFlag={checkFlag}
                label="Whetblade Completion"
                showDlc={showDlc}
                statusFilter={statusFilter}
                regionFilter={regionFilter}
                useRegionGrouping={false}
              />
            )}

            {activeTab === 'gestures' && (
              <CollectibleChecklist
                items={GESTURES}
                regions={null}
                checkFlag={checkFlag}
                label="Gesture Completion"
                showDlc={showDlc}
                statusFilter={statusFilter}
                regionFilter={regionFilter}
                useRegionGrouping={false}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
