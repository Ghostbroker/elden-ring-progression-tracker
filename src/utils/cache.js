const CACHE_KEY = 'elden-ring-tracker-cache'

export function saveToCache(data) {
  try {
    const eventFlagsBase64 = uint8ArrayToBase64(data.eventFlags)
    const cacheData = {
      profiles: data.profiles,
      selectedSlot: data.selectedSlot,
      eventFlagsBase64,
      inventory: data.inventory ? [...data.inventory] : null,
      timestamp: Date.now(),
    }
    localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData))
  } catch (e) {
    // LocalStorage may be full or unavailable - fail silently
    console.warn('Failed to save to cache:', e.message)
  }
}

export function loadFromCache() {
  try {
    const raw = localStorage.getItem(CACHE_KEY)
    if (!raw) return null
    const data = JSON.parse(raw)
    return {
      profiles: data.profiles,
      selectedSlot: data.selectedSlot,
      eventFlags: base64ToUint8Array(data.eventFlagsBase64),
      inventory: data.inventory ? new Set(data.inventory) : null,
      timestamp: data.timestamp,
    }
  } catch (e) {
    console.warn('Failed to load from cache:', e.message)
    return null
  }
}

export function clearCache() {
  localStorage.removeItem(CACHE_KEY)
}

function uint8ArrayToBase64(uint8Array) {
  let binary = ''
  for (let i = 0; i < uint8Array.length; i++) {
    binary += String.fromCharCode(uint8Array[i])
  }
  return btoa(binary)
}

function base64ToUint8Array(base64) {
  const binary = atob(base64)
  const bytes = new Uint8Array(binary.length)
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i)
  }
  return bytes
}
