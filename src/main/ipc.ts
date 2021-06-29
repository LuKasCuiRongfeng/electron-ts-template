import { ipcMain } from 'electron'
import { getBaseUrl } from './utils'
import { SEND_MSG, CREATE_WIN, CREATE_VIEW } from '../consts/ipc'
import { App } from './app'



/**
 * 注册所有的ipc事件
 */
export function registerIPCEvent(myApp: App) {
    ipcMain.on(SEND_MSG, (e, args) => {
        const { key, data } = args
        myApp.windowManager?.sendMsg(key, data)
    })

    ipcMain.on(CREATE_WIN, (e, args) => {
        myApp.windowManager?.createWin(getBaseUrl(), args.createWinOpts)
        if (args.data) {
            myApp.windowManager?.sendMsg(args.createWinOpts.key, args.data)
        }
    })

    ipcMain.on(CREATE_VIEW, (e, args) => {
        const { key, loadURL, position } = args
        myApp.windowManager?.addBroswerView(key, loadURL, position)
    })
}