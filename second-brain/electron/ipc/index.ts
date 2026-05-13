import { ipcMain } from 'electron'

export function registerIpcHandlers() {
  ipcMain.handle('ping', () => 'pong')
  // later: database handlers, file system handlers, etc.
}