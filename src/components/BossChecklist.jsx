import ProgressBar from './ProgressBar'
import RegionGroup from './RegionGroup'
import { BOSSES, BOSS_REGIONS } from '../data/bosses'

export default function BossChecklist({ checkFlag, showDlc = true }) {
  // Filter bosses based on DLC toggle
  const filteredBosses = showDlc ? BOSSES : BOSSES.filter(b => !b.dlc)

  // Add completion status
  const bossesWithStatus = filteredBosses.map(boss => ({
    ...boss,
    completed: checkFlag(boss.id),
  }))

  // Group by region, preserving BOSS_REGIONS order
  const grouped = BOSS_REGIONS
    .map(region => ({
      region,
      items: bossesWithStatus.filter(b => b.region === region),
    }))
    .filter(g => g.items.length > 0)

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
            defaultOpen={items.some(i => i.completed) && !items.every(i => i.completed)}
          />
        ))}
      </div>
    </div>
  )
}
