import { SEND_MSG, CREATE_WIN, ElectronRectangle, CREATE_VIEW } from '../../consts/ipc'
import { Opts } from '../../main/class/WindowsManager'
import { ipcRenderer } from './ipc'


function sendMsg(key: string, data: { type: string, payload: any }) {
    ipcRenderer.send(SEND_MSG, { key, data })
}

function createWin(opts: Opts) {
    ipcRenderer.send(CREATE_WIN, opts)
}

function addBroswerView(key: string, loadURL: string, position?: ElectronRectangle) {
    ipcRenderer.send(CREATE_VIEW, { key, loadURL, position })
}


export {
    sendMsg,
    createWin,
    addBroswerView
}