import { BOSS_REGIONS } from '../data/bosses'

const STATUS_OPTIONS = [
  { id: 'all', label: 'All' },
  { id: 'remaining', label: 'Remaining' },
  { id: 'completed', label: 'Completed' },
]

export default function FilterSidebar({
  showDlc,
  onShowDlcChange,
  statusFilter,
  onStatusFilterChange,
  regionFilter,
  onRegionFilterChange,
  regions = BOSS_REGIONS,
}) {
  return (
    <aside className="w-56 shrink-0">
      <div className="sticky top-6 space-y-6">
        {/* DLC Toggle */}
        <div>
          <h3 className="text-xs font-semibold text-gold uppercase tracking-wider mb-2">Content</h3>
          <label className="flex items-center gap-2 text-sm text-text-muted cursor-pointer hover:text-text-primary transition-colors">
            <input
              type="checkbox"
              checked={showDlc}
              onChange={(e) => onShowDlcChange(e.target.checked)}
              className="accent-gold"
            />
            Include DLC
          </label>
        </div>

        {/* Status Filter */}
        <div>
          <h3 className="text-xs font-semibold text-gold uppercase tracking-wider mb-2">Show</h3>
          <div className="space-y-1">
            {STATUS_OPTIONS.map(opt => (
              <label key={opt.id} className="flex items-center gap-2 text-sm text-text-muted cursor-pointer hover:text-text-primary transition-colors">
                <input
                  type="radio"
                  name="status"
                  checked={statusFilter === opt.id}
                  onChange={() => onStatusFilterChange(opt.id)}
                  className="accent-gold"
                />
                {opt.label}
              </label>
            ))}
          </div>
        </div>

        {/* Region Filter */}
        <div>
          <h3 className="text-xs font-semibold text-gold uppercase tracking-wider mb-2">Region</h3>
          <div className="space-y-1 max-h-80 overflow-y-auto pr-1">
            <label className="flex items-center gap-2 text-sm text-text-muted cursor-pointer hover:text-text-primary transition-colors">
              <input
                type="radio"
                name="region"
                checked={regionFilter === 'all'}
                onChange={() => onRegionFilterChange('all')}
                className="accent-gold"
              />
              All Regions
            </label>
            {regions.map(region => (
              <label key={region} className="flex items-center gap-2 text-sm text-text-muted cursor-pointer hover:text-text-primary transition-colors">
                <input
                  type="radio"
                  name="region"
                  checked={regionFilter === region}
                  onChange={() => onRegionFilterChange(region)}
                  className="accent-gold"
                />
                <span className="truncate">{region}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </aside>
  )
}
