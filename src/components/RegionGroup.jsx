import { useState } from 'react'
import ChecklistItem from './ChecklistItem'

export default function RegionGroup({ region, items, defaultOpen = false, onToggle }) {
  const [isOpen, setIsOpen] = useState(defaultOpen)
  const completed = items.filter(i => i.completed).length
  const total = items.length

  return (
    <div className="border border-gold/10 rounded-lg overflow-hidden mb-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-3
                   bg-bg-card hover:bg-bg-secondary transition-colors text-left"
      >
        <span className="font-heading text-text-primary">
          <span className={`mr-2 text-xs transition-transform inline-block
                           ${isOpen ? 'rotate-90' : ''}`}>{'\u25B8'}</span>
          {region}
        </span>
        <span className={`text-sm ${completed === total ? 'text-gold' : 'text-text-muted'}`}>
          {completed}/{total}
        </span>
      </button>
      {isOpen && (
        <div className="bg-bg-primary/30 px-2 py-1">
          {items.map((item) => (
            <ChecklistItem
              key={item.id}
              id={item.id}
              name={item.name}
              location={item.location}
              completed={item.completed}
              wikiUrl={item.wikiUrl}
              mapUrl={item.mapUrl}
              onToggle={onToggle}
            />
          ))}
        </div>
      )}
    </div>
  )
}
