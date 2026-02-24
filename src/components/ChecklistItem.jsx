export default function ChecklistItem({ name, location, completed, wikiUrl }) {
  return (
    <div className={`flex items-center gap-3 py-2 px-3 rounded transition-colors
                     ${completed ? 'opacity-70' : 'hover:bg-bg-primary/50'}`}>
      <span className={`text-lg ${completed ? 'text-gold' : 'text-text-muted/40'}`}>
        {completed ? '\u2713' : '\u25CB'}
      </span>
      <div className="flex-1 min-w-0">
        {wikiUrl ? (
          <a href={wikiUrl} target="_blank" rel="noopener noreferrer"
             className={`hover:underline ${completed ? 'text-text-muted' : 'text-text-primary'}`}>
            {name}
          </a>
        ) : (
          <span className={completed ? 'text-text-muted' : 'text-text-primary'}>
            {name}
          </span>
        )}
        {location && (
          <span className="text-text-muted text-xs ml-2">{location}</span>
        )}
      </div>
    </div>
  )
}
