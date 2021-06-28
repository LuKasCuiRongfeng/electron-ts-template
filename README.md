# electron-ts-template
从0开始搭建，electron + typescript + webpack一套完整的解决方案
# git clone 
```
git clone git@github.com:LuKasCuiRongfeng/electron-ts-template.git
npm install
```
# 启动
`npm start`
# debug main process
`npm run debug`
> 注意：该脚本还不完善，每次调试前，先把当前的electron先杀掉，否则看不到控制台信息
# 构建
`npm run build`
> 将根据使用的操作系统打包到release文件夹下
**********
# introduce
结合了
+ [electron](https://www.electronjs.org/ "electron")
+ [typescript](https://www.typescriptlang.org/ "typescript") + [webpack](https://webpack.js.org/ "webpack")
+ [rollup](https://rollupjs.org/ "rollup")
的一套完整的构建桌面端流程的模板，这里使用的是[react](https://reactjs.org/ "react")，
但实际上你可以很方便的嵌入任何当前流行的前端框架，注意该版本不支持热更新，支持热更新可移动至
[vite-typescript-electron](https://github.com/LuKasCuiRongfeng/vite-typescript-electron)，使用了最新一代的打包神奇vite，开发启动速度快的像打飞机
********
# 点个赞？
手滑给个star？
