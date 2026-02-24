export default function SlotSelector({ profiles, onSelectSlot }) {
  const formatPlayTime = (seconds) => {
    const hours = Math.floor(seconds / 3600)
    const mins = Math.floor((seconds % 3600) / 60)
    return `${hours}h ${mins}m`
  }

  const activeProfiles = profiles
    .map((p, i) => ({ ...p, index: i }))
    .filter(p => p.active)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <h2 className="text-3xl font-heading text-gold mb-2">Select Character</h2>
      <p className="text-text-muted mb-8">Choose a character to view progression</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl w-full">
        {activeProfiles.map((profile) => (
          <button
            key={profile.index}
            onClick={() => onSelectSlot(profile.index)}
            className="bg-bg-card border border-gold/30 rounded-lg p-6
                       hover:border-gold hover:bg-bg-secondary transition-all
                       text-left group"
          >
            <p className="text-lg font-heading text-gold group-hover:text-gold">
              {profile.name}
            </p>
            <p className="text-text-muted text-sm mt-1">
              Level {profile.level}
            </p>
            <p className="text-text-muted text-xs mt-1">
              {formatPlayTime(profile.secondsPlayed)} played
            </p>
          </button>
        ))}
      </div>
    </div>
  )
}
