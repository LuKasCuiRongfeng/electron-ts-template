import { ipcRenderer } from 'electron'
import { SEND_MSG, CREATE_WIN } from '../consts/ipc'
import { Opts } from '../main/utils'


function sendMsg(key: string, data: { type: string, payload: any }) {
    ipcRenderer.send(SEND_MSG, { key, data })
}

function createWin(key: string, opts?: Opts) {
    ipcRenderer.send(CREATE_WIN, { key, opts })
}


export {
    sendMsg,
    createWin
}