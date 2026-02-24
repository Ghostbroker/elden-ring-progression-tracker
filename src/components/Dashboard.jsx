import { useState } from 'react'
import TabNavigation from './TabNavigation'
import BossChecklist from './BossChecklist'
import GraceChecklist from './GraceChecklist'
import FilterSidebar from './FilterSidebar'
import { BOSS_REGIONS } from '../data/bosses'
import { GRACE_REGIONS } from '../data/graces'

const TAB_REGIONS = {
  bosses: BOSS_REGIONS,
  graces: GRACE_REGIONS,
}

// Tabs that support region filtering
const REGION_TABS = new Set(['bosses', 'graces'])

export default function Dashboard({ profile, checkFlag, onBack, onNewFile }) {
  const [activeTab, setActiveTab] = useState('bosses')
  const [showDlc, setShowDlc] = useState(true)
  const [statusFilter, setStatusFilter] = useState('all')
  const [regionFilter, setRegionFilter] = useState('all')

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
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-xl font-heading text-gold">Elden Ring Progression Tracker</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-text-primary font-heading">{profile.name}</p>
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
          {/* Sidebar */}
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

            {activeTab !== 'bosses' && activeTab !== 'graces' && (
              <div className="text-center py-16 text-text-muted">
                <p className="text-lg">Coming soon</p>
                <p className="text-sm mt-1">This checklist will be added in a future update.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
