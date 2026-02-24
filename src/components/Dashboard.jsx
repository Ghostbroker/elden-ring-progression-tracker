import { useState } from 'react'
import TabNavigation from './TabNavigation'
import BossChecklist from './BossChecklist'

export default function Dashboard({ profile, checkFlag, onBack, onNewFile }) {
  const [activeTab, setActiveTab] = useState('bosses')
  const [showDlc, setShowDlc] = useState(true)

  return (
    <div className="min-h-screen">
      {/* Top bar */}
      <header className="bg-bg-card border-b border-gold/20 px-4 py-3">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
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

      {/* Main content */}
      <main className="max-w-5xl mx-auto px-4 py-6">
        {/* DLC toggle */}
        <div className="flex items-center justify-end mb-4">
          <label className="flex items-center gap-2 text-sm text-text-muted cursor-pointer">
            <input
              type="checkbox"
              checked={showDlc}
              onChange={(e) => setShowDlc(e.target.checked)}
              className="accent-gold"
            />
            Include DLC
          </label>
        </div>

        <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />

        {/* Tab content */}
        {activeTab === 'bosses' && (
          <BossChecklist checkFlag={checkFlag} showDlc={showDlc} />
        )}

        {activeTab !== 'bosses' && (
          <div className="text-center py-16 text-text-muted">
            <p className="text-lg">Coming soon</p>
            <p className="text-sm mt-1">This checklist will be added in a future update.</p>
          </div>
        )}
      </main>
    </div>
  )
}
