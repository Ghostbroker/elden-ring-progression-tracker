import { useState, useMemo, useCallback } from 'react'
import FileUpload from './components/FileUpload'
import SlotSelector from './components/SlotSelector'
import Dashboard from './components/Dashboard'
import { parseBND4Header, getSlotOffsets } from './parser/sl2Parser'
import { readProfileSummary } from './parser/profileSummary'
import { loadBstMap, checkEventFlag, findEventFlagsInSlot } from './parser/eventFlags'

function App() {
  const [saveData, setSaveData] = useState(null)
  const [selectedSlot, setSelectedSlot] = useState(null)
  const [error, setError] = useState(null)

  const profiles = useMemo(() => {
    if (!saveData) return null
    try {
      parseBND4Header(saveData) // validates the file
      return readProfileSummary(saveData)
    } catch (e) {
      setError(e.message)
      return null
    }
  }, [saveData])

  // Load BST map once (synchronous since imported via ?raw)
  const bstMap = useMemo(() => loadBstMap(), [])

  // Parse event flags when a slot is selected
  const eventFlags = useMemo(() => {
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
  }, [saveData, selectedSlot, bstMap])

  const checkFlag = useCallback((flagId) => {
    if (!eventFlags) return false
    return checkEventFlag(eventFlags, flagId, bstMap) === true
  }, [eventFlags, bstMap])

  const handleFileLoaded = (buffer) => {
    setError(null)
    setSelectedSlot(null)
    setSaveData(buffer)
  }

  const handleNewFile = () => {
    setSaveData(null)
    setSelectedSlot(null)
    setError(null)
  }

  // State 1: No file loaded
  if (!saveData || error) {
    return (
      <div className="min-h-screen bg-bg-primary text-text-primary font-body">
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
        <SlotSelector profiles={profiles} onSelectSlot={setSelectedSlot} />
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
          onBack={() => setSelectedSlot(null)}
          onNewFile={handleNewFile}
        />
      </div>
    )
  }

  return null
}

export default App
