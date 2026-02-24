import { useState, useMemo, useCallback, useEffect } from 'react'
import FileUpload from './components/FileUpload'
import SlotSelector from './components/SlotSelector'
import Dashboard from './components/Dashboard'
import { parseBND4Header, getSlotOffsets } from './parser/sl2Parser'
import { readProfileSummary } from './parser/profileSummary'
import { loadBstMap, checkEventFlag, findEventFlagsInSlot } from './parser/eventFlags'
import { saveToCache, loadFromCache, clearCache } from './utils/cache'

function App() {
  const [saveData, setSaveData] = useState(null)
  const [selectedSlot, setSelectedSlot] = useState(null)
  const [error, setError] = useState(null)

  // Cached data restored from LocalStorage (profiles + eventFlags without raw save)
  const [cachedProfiles, setCachedProfiles] = useState(null)
  const [cachedEventFlags, setCachedEventFlags] = useState(null)
  const [cachedSlot, setCachedSlot] = useState(null)

  // Pending cached session offer (shown on FileUpload screen)
  const [pendingCache, setPendingCache] = useState(null)

  // Check LocalStorage for cached data on mount
  useEffect(() => {
    const cached = loadFromCache()
    if (cached) {
      setPendingCache(cached)
    }
  }, [])

  const profiles = useMemo(() => {
    if (cachedProfiles) return cachedProfiles
    if (!saveData) return null
    try {
      parseBND4Header(saveData) // validates the file
      return readProfileSummary(saveData)
    } catch (e) {
      setError(e.message)
      return null
    }
  }, [saveData, cachedProfiles])

  // Load BST map once (synchronous since imported via ?raw)
  const bstMap = useMemo(() => loadBstMap(), [])

  // Parse event flags when a slot is selected
  const eventFlags = useMemo(() => {
    if (cachedEventFlags) return cachedEventFlags
    if (!saveData || selectedSlot === null) return null
    try {
      const slotOffsets = getSlotOffsets()
      const slot = slotOffsets[selectedSlot]
      const slotData = new Uint8Array(saveData, slot.data, slot.size)
      const result = findEventFlagsInSlot(slotData, bstMap)
      return result.eventFlags
    } catch (e) {
      setError(e.message)
      return null
    }
  }, [saveData, selectedSlot, bstMap, cachedEventFlags])

  // Save to cache whenever we have profiles + selectedSlot + eventFlags from a fresh parse
  useEffect(() => {
    if (profiles && selectedSlot !== null && eventFlags && !cachedEventFlags) {
      saveToCache({
        profiles,
        selectedSlot,
        eventFlags,
      })
    }
  }, [profiles, selectedSlot, eventFlags, cachedEventFlags])

  const checkFlag = useCallback((flagId) => {
    if (!eventFlags) return false
    return checkEventFlag(eventFlags, flagId, bstMap) === true
  }, [eventFlags, bstMap])

  const handleFileLoaded = (buffer) => {
    setError(null)
    setSelectedSlot(null)
    setCachedProfiles(null)
    setCachedEventFlags(null)
    setCachedSlot(null)
    setPendingCache(null)
    setSaveData(buffer)
  }

  const handleNewFile = () => {
    clearCache()
    setSaveData(null)
    setSelectedSlot(null)
    setCachedProfiles(null)
    setCachedEventFlags(null)
    setCachedSlot(null)
    setPendingCache(null)
    setError(null)
  }

  const handleRestoreCache = () => {
    if (!pendingCache) return
    setCachedProfiles(pendingCache.profiles)
    setCachedEventFlags(pendingCache.eventFlags)
    setCachedSlot(pendingCache.selectedSlot)
    setSelectedSlot(pendingCache.selectedSlot)
    setPendingCache(null)
  }

  const handleDismissCache = () => {
    clearCache()
    setPendingCache(null)
  }

  const handleBack = () => {
    // When going back to slot selector from dashboard, clear cached event flags
    // so a fresh parse happens when a new slot is chosen
    setCachedEventFlags(null)
    setCachedSlot(null)
    setSelectedSlot(null)
  }

  const handleSelectSlot = (slotIndex) => {
    // Clear any cached event flags so fresh parse runs for the new slot
    setCachedEventFlags(null)
    setCachedSlot(null)
    setSelectedSlot(slotIndex)
  }

  const formatTimeAgo = (timestamp) => {
    const seconds = Math.floor((Date.now() - timestamp) / 1000)
    if (seconds < 60) return 'just now'
    const minutes = Math.floor(seconds / 60)
    if (minutes < 60) return `${minutes}m ago`
    const hours = Math.floor(minutes / 60)
    if (hours < 24) return `${hours}h ago`
    const days = Math.floor(hours / 24)
    return `${days}d ago`
  }

  // State 1: No file loaded (and no cached session restored)
  if ((!saveData && !cachedProfiles) || error) {
    return (
      <div className="min-h-screen bg-bg-primary text-text-primary font-body">
        {pendingCache && (
          <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-md px-4">
            <div className="bg-bg-card border border-gold/40 rounded-lg p-4 shadow-lg">
              <p className="text-text-primary text-sm font-heading mb-1">
                Welcome back!
              </p>
              <p className="text-text-muted text-xs mb-3">
                Previous session: {pendingCache.profiles[pendingCache.selectedSlot]?.name || 'Unknown'}, Level {pendingCache.profiles[pendingCache.selectedSlot]?.level || '?'} ({formatTimeAgo(pendingCache.timestamp)})
              </p>
              <div className="flex gap-2">
                <button
                  onClick={handleRestoreCache}
                  className="flex-1 px-3 py-1.5 bg-gold/20 text-gold text-sm rounded
                             hover:bg-gold/30 transition-colors"
                >
                  Load Session
                </button>
                <button
                  onClick={handleDismissCache}
                  className="flex-1 px-3 py-1.5 bg-bg-secondary text-text-muted text-sm rounded
                             hover:text-text-primary transition-colors"
                >
                  Upload New File
                </button>
              </div>
            </div>
          </div>
        )}
        <FileUpload onFileLoaded={handleFileLoaded} />
        {error && (
          <p className="text-red-400 text-center mt-4">Error: {error}</p>
        )}
      </div>
    )
  }

  // State 2: File loaded, no slot selected
  if (selectedSlot === null && profiles) {
    return (
      <div className="min-h-screen bg-bg-primary text-text-primary font-body">
        <SlotSelector profiles={profiles} onSelectSlot={handleSelectSlot} />
      </div>
    )
  }

  // State 3: Dashboard
  if (profiles && eventFlags) {
    return (
      <div className="min-h-screen bg-bg-primary text-text-primary font-body">
        <Dashboard
          profile={profiles[selectedSlot]}
          checkFlag={checkFlag}
          onBack={handleBack}
          onNewFile={handleNewFile}
        />
      </div>
    )
  }

  return null
}

export default App
