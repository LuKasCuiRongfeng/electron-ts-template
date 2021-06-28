import { BrowserWindowConstructorOptions } from 'electron'

const SEND_MSG = "SEND_MSG"
const CREATE_WIN = "CREATE_WIN"

interface Opts {
    data?: { type: string, payload: any },
    winOpts?: BrowserWindowConstructorOptions,
    beforeClosed?: (remote: Electron.Remote) => void
}

export {
    SEND_MSG,
    CREATE_WIN,
    Opts
}