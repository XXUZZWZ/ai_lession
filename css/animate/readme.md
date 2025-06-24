# 动画

- transition 过渡
- transfrom 变换
- animation 动画

```css
animation-name：动画名称
animation-duration：动画持续时间
animation-timing-function：速度曲线
animation-delay：延迟时间
animation-iteration-count：重复次数
animation-direction：动画方向
animation-fill-mode：动画结束后状态
animation-play-state：运行或暂停
```
- js 动画
  - dom对象
  - 频繁修改dom节点属性
  - requestAnimationFrame 自动适应显示器刷新率
  - dom 动画和屏幕刷新率一致
  - 递归函数
- @keyframes
- 使用transform和opacity属性动画性能最佳

- web 程序
  - 浏览器程序 由浏览器引擎，渲染引擎，JS引擎 都是c++ 编写的
  - 输入是 html css
  - 输出 静态页面
  - domContentLoaded事件还没有完成页面渲染
  - setTimeout(()={},0) 排在页面渲染任务队列后面 

- js 动画和css transition 动画选择哪一个
  - js 处理复杂情况
  - 性能js差 ？不推荐这样做动画。
    - 频繁的操作dom ,js开销的主要问题。
    - 页面要重新绘制(开销很大)
  - css 有些 (挺好 transfrom opacity) 在合成阶段执行
  - transition 不用去不停的绘制吗？。
      - 浏览器会自动优化,不会那么频繁的绘制。为啥呢？因为 js 绘制的开销大。
  - 省去了dom对象的操作
  
- DOM 树的构建
  - 从字节开始网络层的传输的字节流
  - 根据字节流解码按utf-8解码为字符串
  - 令牌化 令牌 标签名 属性  解析 
  - 转成一个dom节点对象
    - 例如 
    ```html
    <div id="app">
      <h1>hello world</h1>
      <p>hello world</p>
    <div>
      {
        type: "div",
        props: {
          id: "app",
        }
        children: [
        {type: "h1", props: {}, children: ["hello world"]},
        {type: "p", props: {}, children: ["hello world"]}
        ]
      }
    ```
    
- dom树的构建
  与树的数据结构的结合，在查找和操作这块很快
  - cssom 树的构建


- dom 和 cssom 树 结合 生成渲染树Render Tree
- layout 概念 布局 结合盒子模型和大小计算
- 应用规则和计算的过程
- 文档流的位置和大小 计算在屏幕上的确切位置和尺寸 绘制像素点

- 图层 
 例如：z-index ，离开文档流，transform,opacity
 用新的图层计算和绘制，绘制(修改的时候只要改这一个图层)
 GPU 加速计算 性能很好


- 第一次的绘制
- 更新？ js ,transiton 
  - 修改他的颜色 ，重绘？
  - 修改他的盒子位置和大小 ，重排？ 可能带来页面重排 ，开销大 js外侧重排
  - transition left 的修改 posotion:absolute
