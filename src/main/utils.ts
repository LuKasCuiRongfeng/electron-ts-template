import { app } from 'electron'
import { join } from 'path'
import { config } from 'dotenv'
import { SEND_MSG } from '../consts/ipc'

config()

const baseUrl = app.isPackaged
    ? join(__dirname, "../../dist/render/html#")
    : `http://localhost:${process.env.PORT}/#`

function getBaseUrl() {
    return baseUrl
}


export {
    getBaseUrl
}