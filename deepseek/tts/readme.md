# tts 智能语音

## 智能前端 AI 用户体验

- webllm
  aigc api remote call
- tts 语言
  网易音乐
- 用户体验
  音乐不要自动播放

## 如果 不能用 DOM 编程 ，react 里面怎么播放音乐

- 原生 js dom 低效 document.querySelector 不去使用
- 原生 js DOM API 低效

## 路径

- 相对路径·
  ./ 同一级别
  ../ 上一级别
  ./demo/走
- 绝对路径
  物理路径 C:/
  网站根路径 / index.html
  localhost:5173/sounds/tli.mp3
  npm run dev
  启动了一个本地服务器
  http://127.0.0.1:5173/sounds/tli.mp3
  端口背后对应的是不同服务
  index.html 首页
- /sounds/tli.mp3
- public 放静态资源 它约定所有资源可以直接访问

## react 事件机制

- 不可以用 addEventListener DOM Event 事件
- onClick 其实是 React 事件 ，和 html 原生支持的事件有点像

## 小红书的 event 事件 JavaScript 高级程序设计 1000

- 多种事件
- DOM0 事件
  onclick html 缺点是耦合了，不推荐。
- DOM2 事件
  adddEventListener' html 和 js 事件上分明

- react
  采用了 DOM0 事件 的方式。
  有利于组件 html 的表达
  @click react 优于 vue 事件实现更好理解
  API 层面看过去是这样的，其实底层还有天地

## useRef

- 获取 DOM 元素对象
  - useRef(null) 空对象
  - current 属性 null
  - jsx ref = {ref} 和 DOM 绑定
  - ref.current 获得引用的 DOM 对象
