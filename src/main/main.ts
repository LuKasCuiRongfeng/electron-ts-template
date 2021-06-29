// Modules to control application life and create native browser window
import { app, BrowserWindow } from 'electron'
import { getBaseUrl } from './utils'
import { registerIPCEvent } from './ipc'
import App from './app'


const myApp = new App()
app.whenReady().then(() => {
  myApp.initApp()
  myApp.windowManager?.createWin(getBaseUrl(), {
    key: "main",
    openDevTools: true,
    preventOriginClose: false,
    browserWindowConstructorOptions: {
      title: "main"
    }
  })
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) {
      myApp.windowManager?.createWin(getBaseUrl(), {
        key: "main",
        openDevTools: true,
        preventOriginClose: false,
        browserWindowConstructorOptions: {
          title: "main"
        }
      })
    }
  })


  registerIPCEvent(myApp)
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})