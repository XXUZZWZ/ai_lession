# src 和 href 的 f 的比较

## 重点

### 作用

1. src (souce 来源)：属性的作用是指定要加载的资源路径，常用于 <script> <link> <img> <audio> <video> <track> <source> <iframe> <object> <embed> <script> <style> <meta> <base> <link> <frame> <iframe> 用于加载 JavaScript 脚本，图像，音频，视频，或者嵌入的网页文件

2.href (hyperlink reference 链接引用)：属性的作用是指定超链接的 URL 地址，常用于 <a> <area> <link> 标签

### 资源加载方式

1. src : 当浏览器解析到适用于 src 属性的标签时 会暂停其他资源下载和处理，直到将该资源下载 执行（js）。这叫做阻塞加载。
2. href : 当浏览器解析到适用于 href 属性标签时如<a>和 link 时，会并行下载资源，不会停止对当前文档的处理。这种方式称为非阻塞加载。浏览器可以同时处理超链接或引入样式表

