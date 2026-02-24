import ProgressBar from './ProgressBar'
import RegionGroup from './RegionGroup'

export default function CollectibleChecklist({
  items,
  regions,
  checkFlag,
  label,
  showDlc = true,
  statusFilter = 'all',
  regionFilter = 'all',
  useRegionGrouping = true,
}) {
  let filteredItems = showDlc ? items : items.filter(i => !i.dlc)

  const itemsWithStatus = filteredItems.map(item => ({
    ...item,
    completed: checkFlag(item.id),
  }))

  // Apply status filter
  let displayItems = itemsWithStatus
  if (statusFilter === 'completed') {
    displayItems = itemsWithStatus.filter(i => i.completed)
  } else if (statusFilter === 'remaining') {
    displayItems = itemsWithStatus.filter(i => !i.completed)
  }

  // Apply region filter
  if (regionFilter !== 'all') {
    displayItems = displayItems.filter(i => i.region === regionFilter)
  }

  const completed = itemsWithStatus.filter(i => i.completed).length
  const total = itemsWithStatus.length

  // Group by region if regions are provided and grouping is enabled
  if (useRegionGrouping && regions && regions.length > 0) {
    const grouped = regions
      .map(region => ({
        region,
        items: displayItems.filter(i => i.region === region),
      }))
      .filter(g => g.items.length > 0)

    // Items without a matching region
    const ungrouped = displayItems.filter(
      i => !regions.includes(i.region)
    )

    return (
      <div>
        <ProgressBar completed={completed} total={total} label={label} />
        <div className="space-y-1">
          {grouped.map(({ region, items: regionItems }) => (
            <RegionGroup
              key={region}
              region={region}
              items={regionItems}
              defaultOpen={regionFilter !== 'all'}
            />
          ))}
          {ungrouped.length > 0 && (
            <RegionGroup
              region="Other"
              items={ungrouped}
              defaultOpen={regionFilter !== 'all'}
            />
          )}
        </div>
        {grouped.length === 0 && ungrouped.length === 0 && (
          <p className="text-center text-text-muted py-8">
            No items match the current filters.
          </p>
        )}
      </div>
    )
  }

  // Flat list (no region grouping)
  return (
    <div>
      <ProgressBar completed={completed} total={total} label={label} />
      <div className="space-y-1">
        <RegionGroup
          region="All"
          items={displayItems}
          defaultOpen={true}
        />
      </div>
      {displayItems.length === 0 && (
        <p className="text-center text-text-muted py-8">
          No items match the current filters.
        </p>
      )}
    </div>
  )
}
