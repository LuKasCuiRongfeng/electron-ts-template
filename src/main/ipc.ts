import { ipcMain } from 'electron'
import { sendMsg, createWin } from './utils'
import { SEND_MSG, CREATE_WIN } from '../consts/ipc'

ipcMain.on(SEND_MSG, (e, args) => {
    const { key, data } = args
    sendMsg(key, data)
})

ipcMain.on(CREATE_WIN, (e, args) => {
    const { key, data } = args
    createWin(key, data)
})