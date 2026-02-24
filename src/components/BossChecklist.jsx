import ProgressBar from './ProgressBar'
import RegionGroup from './RegionGroup'
import { BOSSES, BOSS_REGIONS } from '../data/bosses'

export default function BossChecklist({ checkFlag, showDlc = true, statusFilter = 'all', regionFilter = 'all' }) {
  // Filter bosses based on DLC toggle
  let filteredBosses = showDlc ? BOSSES : BOSSES.filter(b => !b.dlc)

  // Add completion status
  const bossesWithStatus = filteredBosses.map(boss => ({
    ...boss,
    completed: checkFlag(boss.id),
  }))

  // Apply status filter
  let displayBosses = bossesWithStatus
  if (statusFilter === 'completed') {
    displayBosses = bossesWithStatus.filter(b => b.completed)
  } else if (statusFilter === 'remaining') {
    displayBosses = bossesWithStatus.filter(b => !b.completed)
  }

  // Apply region filter
  if (regionFilter !== 'all') {
    displayBosses = displayBosses.filter(b => b.region === regionFilter)
  }

  // Group by region, preserving BOSS_REGIONS order
  const grouped = BOSS_REGIONS
    .map(region => ({
      region,
      items: displayBosses.filter(b => b.region === region),
    }))
    .filter(g => g.items.length > 0)

  // Overall stats (before display filters, so progress bar shows true completion)
  const completed = bossesWithStatus.filter(b => b.completed).length
  const total = bossesWithStatus.length

  return (
    <div>
      <ProgressBar completed={completed} total={total} label="Boss Completion" />
      <div className="space-y-1">
        {grouped.map(({ region, items }) => (
          <RegionGroup
            key={region}
            region={region}
            items={items}
            defaultOpen={regionFilter !== 'all'}
          />
        ))}
      </div>
      {grouped.length === 0 && (
        <p className="text-center text-text-muted py-8">
          No bosses match the current filters.
        </p>
      )}
    </div>
  )
}
