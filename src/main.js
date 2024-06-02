const { BrowserWindow } = require('electron')
const { app } = require('electron/main')
const { shell } = require('electron/common')
const path = require('node:path')

const database = require('./database.js')

if (require('electron-squirrel-startup')) {
  app.quit()
}

result = database.getRowsAndFields()
console.log(result)

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  })

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, 'index.html'))

  // Open the DevTools.
  mainWindow.webContents.openDevTools()
}

app.whenReady().then(() => {
  createWindow()
})
