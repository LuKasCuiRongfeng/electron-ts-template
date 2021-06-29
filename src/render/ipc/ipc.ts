import { SEND_MSG } from '../../consts/ipc'
import store from '../store/index'
const { ipcRenderer } = require('electron')

ipcRenderer.on(SEND_MSG, (e, args) => {
    store.dispatch(args)
})

export {
    ipcRenderer
}