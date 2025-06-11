# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# 智能前端 之语音 
- AI 时代的交互体验 ，语音交互 
 虚拟数字人 AIGC -> 语音 --> 虚拟数字人

- 敏感信息怎么保护？
   .gittignore 那些文件不用提交到远程，仓库也不进入
   node_modules/ 代表目录下的文件不用提交 太大 没有必要提交 数量过多 
   
- 环境变量
 .env.local   .开头 是隐藏文件  本地项目需要的一些key
 添加到 .gitignore

 - 单向数据流 
  input value绑定了 {prompt}
  保持数据状态和界面状态的统一
  UI = f(state) state 驱动界面
- 事件机制 
  onChange 修改 状态 

-   reqid: Math.random().toString(36).substring(7), 生成uuid 

- base64 格式的语音
表达图片，声音，视频
编解码的问题
  


