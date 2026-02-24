import { useState, useMemo } from 'react'
import FileUpload from './components/FileUpload'
import SlotSelector from './components/SlotSelector'
import { parseBND4Header } from './parser/sl2Parser'
import { readProfileSummary } from './parser/profileSummary'

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

  const handleFileLoaded = (buffer) => {
    setError(null)
    setSelectedSlot(null)
    setSaveData(buffer)
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

  // State 3: Slot selected - dashboard placeholder
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary font-body">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <p className="text-xl text-gold">
          Analyzing {profiles[selectedSlot].name} (Level {profiles[selectedSlot].level})...
        </p>
        <p className="text-text-muted mt-2">Dashboard coming next...</p>
        <button
          onClick={() => setSelectedSlot(null)}
          className="mt-4 px-4 py-2 text-sm text-gold/70 hover:text-gold transition-colors"
        >
          ← Back to character select
        </button>
      </div>
    </div>
  )
}

export default App
