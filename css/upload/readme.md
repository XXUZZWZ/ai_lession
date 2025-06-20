# uploader 大厂必考

- 源码学习是核心 https://weui.io

  - 高质量
  - 思维方式

- 技能点

  - 语义化标签
  - BEM 命名规范
  - 弹性布局
  - stylus 变量 ，模块化

- weui-uploader 源码

  - `.weui-uoloader `外面严谨的套上了
    `.weui-cells`
  - `.weui-cells` 移动端收集用户数据或表单表格
    - `.weui-cell__bd` 内容

- `-webkit-overflow-scrolling:touch`
  - 滚动更敏感
  - 滚动力度
  - 滚动可以暂停
  - 滚动更流畅

-`webkit`

- 它是 chrome 浏览器的引擎代号
- 可能支持的浏览器就会显示这些某些 CSS3 属性
- 移动端没有微软 IE，全部支持 webkit

- 变量组成了 weui 主题风格

- stylus

  - `&::before：通过&引用父级选择器，创建伪元素，伪类` 引用上一层

- float 布局
  - 早于 flex 布局都方案
  - float :left ，float :right 左浮动，右浮动 两列式
  - 脱离文档流
    一直写 float :right 多列
