import { useState } from 'react'
import FileUpload from './components/FileUpload'

function App() {
  const [saveData, setSaveData] = useState(null)

  if (!saveData) {
    return (
      <div className="min-h-screen bg-bg-primary text-text-primary font-body">
        <FileUpload onFileLoaded={setSaveData} />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary font-body">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <p className="text-xl text-gold">
          Save file loaded! ({(saveData.byteLength / 1024 / 1024).toFixed(1)} MB)
        </p>
        <p className="text-text-muted mt-2">Slot selector coming next...</p>
      </div>
    </div>
  )
}

export default App
