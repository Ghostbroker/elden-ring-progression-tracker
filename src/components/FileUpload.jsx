import { useCallback } from 'react'

export default function FileUpload({ onFileLoaded }) {
  const handleFile = useCallback((file) => {
    if (!file.name.endsWith('.sl2')) {
      alert('Please upload an Elden Ring save file (.sl2)')
      return
    }
    const reader = new FileReader()
    reader.onload = (e) => onFileLoaded(e.target.result)
    reader.readAsArrayBuffer(file)
  }, [onFileLoaded])

  const handleDrop = useCallback((e) => {
    e.preventDefault()
    e.currentTarget.classList.remove('border-gold')
    const file = e.dataTransfer.files[0]
    if (file) handleFile(file)
  }, [handleFile])

  const handleDragOver = useCallback((e) => {
    e.preventDefault()
    e.currentTarget.classList.add('border-gold')
  }, [])

  const handleDragLeave = useCallback((e) => {
    e.currentTarget.classList.remove('border-gold')
  }, [])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <h1 className="text-5xl font-heading text-gold mb-4">
        Elden Ring Progression Tracker
      </h1>
      <p className="text-text-muted mb-8 text-center max-w-md">
        Upload your save file to automatically track your progression across
        bosses, sites of grace, and collectibles.
      </p>
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className="border-2 border-dashed border-gold/40 rounded-lg p-16
                   hover:border-gold/80 transition-colors cursor-pointer
                   bg-bg-card/50 text-center max-w-lg w-full"
      >
        <p className="text-xl text-text-primary mb-2">
          Drop your ER0000.sl2 file here
        </p>
        <p className="text-text-muted text-sm mb-4">
          or click to browse
        </p>
        <input
          type="file"
          accept=".sl2"
          onChange={(e) => e.target.files[0] && handleFile(e.target.files[0])}
          className="hidden"
          id="file-input"
        />
        <label
          htmlFor="file-input"
          className="inline-block px-6 py-2 bg-gold/20 text-gold
                     rounded cursor-pointer hover:bg-gold/30 transition-colors"
        >
          Choose File
        </label>
        <p className="text-text-muted text-xs mt-6">
          Save file location: C:\Users\[you]\AppData\Roaming\EldenRing\[SteamID]\ER0000.sl2
        </p>
      </div>
      <p className="text-text-muted text-xs mt-4">
        All processing happens locally in your browser. No data is sent anywhere.
      </p>
    </div>
  )
}
