import { BrowserWindow, BrowserWindowConstructorOptions, app, remote } from 'electron'
import { join } from 'path'
import { config } from 'dotenv'
import { SEND_MSG, Opts } from '../consts/ipc'

config()
global.win = {}

const baseUrl = app.isPackaged
    ? join(__dirname, "../../dist/render/html#")
    : `http://localhost:${process.env.PORT}/#`
global.baseUrl = baseUrl

const defaultWinOptions: BrowserWindowConstructorOptions = {
    width: 700,
    height: 700,
    webPreferences: {
        enableRemoteModule: true,
        nodeIntegration: true,
        contextIsolation: false
    }
}

function createWin(key: string, opts?: Opts) {
    const { data, winOpts = defaultWinOptions, beforeClosed } = (opts || {})
    let win = global.win[key]
    if (win) {
        win.focus()
    } else {
        win = new BrowserWindow({ ...defaultWinOptions, ...winOpts })
        let suffix = ""
        if (app.isPackaged) {
            suffix = (key === "main" ? "" : key)
        } else {
            suffix = (key === "main" ? "" : `/${key}`)
        }
        win.loadURL(baseUrl + suffix)
        !(app.isPackaged) && win.webContents.openDevTools()
        global.win[key] = win
        if (data) {
            sendMsg(key, data)
        }
        win.on("close", e => {
            if (beforeClosed) {
                beforeClosed(remote)
            }
            if (key === "main") {
                app.quit()
            }
        })
        win.on("closed", () => {
            global.win[key] = null
        })
    }
}

function sendMsg(key: string, data: any) {
    let win = global.win[key]
    win?.webContents.send(SEND_MSG, data)
}


export {
    createWin,
    sendMsg
}