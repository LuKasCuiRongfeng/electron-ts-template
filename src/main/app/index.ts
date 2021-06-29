// 代表当前的应用
import WindowsManager from "../class/WindowsManager";

class App {
    windowManager: WindowsManager | null = null

    /**你必须先调用此方法才可以使用app的所以功能 */
    initApp() {
        const windowManager = new WindowsManager()
        this.windowManager = windowManager
    }
}


export default App

export type {
    App
}