import { contextBridge, ipcRenderer } from 'electron'

// Expose a safe API to the renderer process
contextBridge.exposeInMainWorld('electronAPI', {
  // We'll add database methods later
  ping: () => ipcRenderer.invoke('ping'),
})