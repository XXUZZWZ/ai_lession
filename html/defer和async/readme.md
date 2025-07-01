# HTML 的 script 标签中的 defer 属性 和 async 属性

## 共同点

1. defer 和 async 属性用于控制脚本的加载和执行，都是异步加载外部加载 js 脚本文件，两者都不会阻塞 html 的解析。

## 不同点

1. 执行顺序：defer 保证脚本按照html中出现的顺序执行，一般在html解析完成之后才执行

，一般在html解析后才执行而async 则是谁先下载完成谁先执行，async可能会阻断解析以执行脚本

2. 适用场景 ： async 适合不依赖于其他脚本且不被其他脚本依赖的独立模块。例如计数器和广告加载。而defer适用于需要html 完全解析后才能运行的脚本，尤其是依赖于dom的js脚本，它保证了脚本执行顺序性和依赖关系，适合用于包含多个脚本的页面

   

![区别](C:\Users\HP\Desktop\AIFullStackJourney\html\defer和async\defer和async.jpg)

## 性能

- 性能优化：使用defer和async 可以显著改善页面的加载时间，特别是加载大型脚本或依赖多个脚本的页面时，合理使用这两个属性可以减少页面阻塞的时间，提升用户体验。

- 减少首屏加载时间：由于async 和defer 脚本不阻塞html解析，可以减少首次内容绘制（FCP)和首次有意义（FMP）的时间，在做SEO的时候可以用上这两个属性

- 脚本管理技巧，可以通过现代的模块打包工具如Webpack。vite，管理脚本依赖，并自动为不同的脚本分配最合适的加载策略，例如动态导入。

- 兼容性，老版本浏览器可能不支持

  


  ## 使用

  ```javascript
  <script src="lib.js" defer></script>
  <script src="main.js" defer></script>
  
  ```

  
