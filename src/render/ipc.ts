import { SEND_MSG } from '../consts/ipc'
import { ipcRenderer } from 'electron'
import store from './store/index'

ipcRenderer.on(SEND_MSG, (e, args) => {
    store.dispatch(args)
})