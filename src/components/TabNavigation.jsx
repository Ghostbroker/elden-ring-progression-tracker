const TABS = [
  { id: 'bosses', label: 'Bosses' },
  { id: 'graces', label: 'Graces' },
  { id: 'armaments', label: 'Armaments' },
  { id: 'armor', label: 'Armor' },
  { id: 'talismans', label: 'Talismans' },
  { id: 'magic', label: 'Magic' },
  { id: 'spiritAshes', label: 'Spirit Ashes' },
  { id: 'ashesOfWar', label: 'Ashes of War' },
  { id: 'cookbooks', label: 'Cookbooks' },
  { id: 'paintings', label: 'Paintings' },
  { id: 'whetblades', label: 'Whetblades' },
  { id: 'gestures', label: 'Gestures' },
]

export default function TabNavigation({ activeTab, onTabChange }) {
  return (
    <div className="flex gap-1 overflow-x-auto pb-2 mb-6 border-b border-gold/20">
      {TABS.map(tab => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`px-4 py-2 text-sm font-medium rounded-t whitespace-nowrap transition-colors
            ${activeTab === tab.id
              ? 'text-gold border-b-2 border-gold bg-bg-card/50'
              : 'text-text-muted hover:text-text-primary'
            }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}
