# 智能前端之图片识别

- StrictMode React 默认启动的严格模式
  执行一次，测试一次
- 要有良好的编程风格
- 要移除不必要的 `improt` -什么是 import.meta.env 环境变量
  improt.meta.env.VITE_API_KEY
  是一个变量对象
  代码运行时可以和环境变量交互
  不能把 env 写到代码里

- async await
  then
  异步流程控制
  await 比 then 更简单 更同步

- 为啥用 className 而不用 class
  - class 是关键字
  - react jsx 运行，以原生 js 来运行
  - className 来代替 class
- 无障碍访问
  label htmlFor = input id

- 本地预览 preview
  - 良好且必须的用户体验，实施告诉用户在发生什么
  - 图片上传挺慢的，所以需要 preview 预览
- onChange
  e.target.files[0]
  FileReader 实例
  readerAsDataURL

  - 得到的是 base64 字符串
  - base64 直接作为 img src 属性

- 静态的 html ->动态模板{data}-> 状态 State useState
