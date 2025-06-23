# BFC (Block Formatting Context) 详解

## 什么是 BFC？

BFC（Block Formatting Context，块级格式化上下文）是 CSS 中的一个重要概念，它是一个独立的渲染区域，有自己的渲染规则，内部元素的渲染不会影响到外部元素，外部元素也不会影响到 BFC 内部的元素。

## BFC 的特性

1. **内部的盒子会在垂直方向上一个接一个地放置**
2. **同一个 BFC 中的相邻盒子的 margin 会发生重叠**
3. **BFC 区域不会与浮动元素重叠**
4. **计算 BFC 的高度时，浮动元素也会参与计算**
5. **BFC 是一个独立的容器，容器内部元素不会影响到外部元素**

## 如何创建 BFC

以下方式都可以创建 BFC：

- `overflow` 值不为 `visible` 的块元素（如：`hidden`、`auto`、`scroll`）
- `float` 值不为 `none` 的元素
- `position` 值为 `absolute` 或 `fixed` 的元素
- `display` 值为 `inline-block`、`table-cell`、`table-caption`、`flex`、`inline-flex` 的元素

## BFC 的应用场景

### 1. 清除浮动（包含浮动）

当一个容器内部有浮动元素时，如果容器没有设置高度，容器的高度不会被浮动元素撑开，这就是所谓的"高度塌陷"问题。通过将容器变为 BFC，可以清除浮动，让容器包含浮动元素。

#### 示例分析（1.html vs 2.html）

**1.html 中的问题：**

```html
<div class="container">
  1
  <div class="box"></div>
  212342432，我爱黎明，我爱xxx我爱xxx我爱xxx我爱xxx我爱xxx我爱xxx我爱xxx我爱xxx我爱xxx我爱xxx我爱xxx我爱xxx
</div>
```

```css
.container {
  background-color: green;
  width: 340px;
}

.box {
  margin: 100px;
  width: 100px;
  height: 100px;
  background-color: red;
  float: left;
}
```

在这个例子中：
- `.box` 元素设置了 `float: left`，使其脱离了文档流
- 文字会围绕着浮动元素，但容器的高度不会被浮动元素撑开
- 由于浮动元素设置了 `margin: 100px`，文字会被推开

**2.html 中的解决方案：**

```html
<div class="container">
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
</div>
```

```css
.container {
  background-color: green;
  overflow: hidden; /* 创建了一个BFC，并且父元素是container，不受外界影响*/
}

.box {
  margin: 100px;
  width: 100px;
  height: 100px;
  background-color: red;
  float: left;
}
```

在这个例子中：
- 通过给 `.container` 添加 `overflow: hidden`，创建了一个 BFC
- BFC 会计算浮动元素的高度，解决了高度塌陷问题
- 多个浮动元素的 margin 不会合并，每个元素都保持各自的 margin

### 2. 防止 margin 重叠

在正常文档流中，相邻块级元素的垂直 margin 会发生重叠。但是，如果这些元素处于不同的 BFC 中，则 margin 不会重叠。

### 3. 实现两列布局

利用 BFC 不会与浮动元素重叠的特性，可以实现两列自适应布局。

```html
<div class="aside"></div>
<div class="main"></div>
```

```css
.aside {
  float: left;
  width: 100px;
}
.main {
  overflow: hidden; /* 创建 BFC */
}
```

这样，`.main` 元素不会与浮动的 `.aside` 元素重叠，从而形成两列布局。

## BFC 与文档流

HTML 文档是一个默认的 BFC，在这个默认的 BFC 中：
- 块级元素从上到下排列
- 行内元素从左到右排列

当我们创建新的 BFC 时，实际上是创建了一个新的渲染区域，这个区域有自己的渲染规则，不受外界影响。

## 浮动与 BFC 的关系

浮动元素会脱离文档流，但与绝对定位不同：
- 浮动元素不会完全脱离文档流，它仍然会影响周围的文本
- 浮动的初衷是为了实现文字环绕效果
- 多个浮动元素会按照指定方向（left/right）依次排列，直到遇到容器边缘或另一个浮动元素

当容器成为 BFC 后：
- 可以包含内部的浮动元素
- 计算高度时会考虑浮动元素
- 不会与外部的浮动元素重叠

## BFC 与其他格式化上下文

CSS 中还有其他类型的格式化上下文：
- FFC（Flex Formatting Context）：弹性布局格式化上下文
- GFC（Grid Formatting Context）：网格布局格式化上下文
- IFC（Inline Formatting Context）：行内格式化上下文

每种格式化上下文都有自己的渲染规则，BFC 主要处理块级盒子的布局。

## 总结

BFC 是 CSS 布局中的一个重要概念，它提供了一种机制，使得内部元素与外部元素相互隔离，不会相互影响。理解 BFC 的特性和应用场景，可以帮助我们解决很多常见的布局问题，如清除浮动、防止 margin 重叠、实现多列布局等。

在弹性布局（Flexbox）和网格布局（Grid）出现之前，浮动和 BFC 是实现复杂布局的主要手段。即使在今天，理解 BFC 仍然对掌握 CSS 布局机制有很大帮助。
