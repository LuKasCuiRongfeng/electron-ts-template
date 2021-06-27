declare module NodeJS {
    export interface Global {
        win: {
            [prop: string]: Electron.BrowserWindow | null
        },
        baseUrl: string
    }
}