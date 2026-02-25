import ProgressBar from './ProgressBar'
import RegionGroup from './RegionGroup'
import { GRACES, GRACE_REGIONS } from '../data/graces'

export default function GraceChecklist({ checkFlag, onToggle, showDlc = true, statusFilter = 'all', regionFilter = 'all', searchQuery = '' }) {
  let filteredGraces = showDlc ? GRACES : GRACES.filter(g => !g.dlc)

  // Apply search filter
  if (searchQuery) {
    const query = searchQuery.toLowerCase()
    filteredGraces = filteredGraces.filter(g => g.name.toLowerCase().includes(query))
  }

  const gracesWithStatus = filteredGraces.map(grace => ({
    ...grace,
    completed: checkFlag(grace.id),
  }))

  // Apply status filter
  let displayGraces = gracesWithStatus
  if (statusFilter === 'completed') {
    displayGraces = gracesWithStatus.filter(g => g.completed)
  } else if (statusFilter === 'remaining') {
    displayGraces = gracesWithStatus.filter(g => !g.completed)
  }

  // Apply region filter
  if (regionFilter !== 'all') {
    displayGraces = displayGraces.filter(g => g.region === regionFilter)
  }

  // Group by region
  const grouped = GRACE_REGIONS
    .map(region => ({
      region,
      items: displayGraces.filter(g => g.region === region),
    }))
    .filter(g => g.items.length > 0)

  const completed = gracesWithStatus.filter(g => g.completed).length
  const total = gracesWithStatus.length

  return (
    <div>
      <ProgressBar completed={completed} total={total} label="Sites of Grace Discovered" />
      <div className="space-y-1">
        {grouped.map(({ region, items }) => (
          <RegionGroup
            key={region}
            region={region}
            items={items}
            defaultOpen={regionFilter !== 'all'}
            onToggle={onToggle}
          />
        ))}
      </div>
      {grouped.length === 0 && (
        <p className="text-center text-text-muted py-8">
          No sites of grace match the current filters.
        </p>
      )}
    </div>
  )
}
