# Sass 使用教程

Sass (Syntactically Awesome Style Sheets) 是一种CSS预处理器，它扩展了CSS语言，增加了变量、嵌套、混合器、函数等特性，使CSS的编写更加高效和易于维护。

## 安装

使用npm安装Sass：

```bash
# 本地安装
npm install --save-dev sass

# 全局安装
npm install -g sass
```

## Sass的主要特性

### 1. 变量

使用`$`符号定义变量，可以存储颜色、字体或任何CSS值。

```scss
$primary-color: #3498db;
$font-stack: Arial, sans-serif;

body {
  font-family: $font-stack;
  color: $primary-color;
}
```

### 2. 嵌套

允许CSS选择器嵌套，使代码结构更清晰。

```scss
nav {
  background-color: #333;
  
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  
  li {
    display: inline-block;
    
    a {
      color: white;
      text-decoration: none;
    }
  }
}
```

### 3. 混合器(Mixins)

使用`@mixin`定义可重用的样式块。

```scss
@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
  -moz-border-radius: $radius;
  border-radius: $radius;
}

.box {
  @include border-radius(10px);
}
```

### 4. 继承/扩展

使用`@extend`继承其他选择器的样式。

```scss
%message-shared {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

.success {
  @extend %message-shared;
  border-color: green;
}

.error {
  @extend %message-shared;
  border-color: red;
}
```

### 5. 运算符

Sass支持标准的数学运算符。

```scss
.container {
  width: 100%;
}

article[role="main"] {
  float: left;
  width: 600px / 960px * 100%;
}

aside[role="complementary"] {
  float: right;
  width: 300px / 960px * 100%;
}
```

### 6. 函数

Sass提供了许多内置函数，也可以自定义函数。

```scss
$base-color: #036;

.element {
  background-color: lighten($base-color, 20%);
  border-color: darken($base-color, 10%);
}
```

### 7. 条件语句

使用`@if`、`@else if`和`@else`控制样式的应用。

```scss
$theme: 'dark';

body {
  @if $theme == 'light' {
    background-color: #fff;
    color: #000;
  } @else {
    background-color: #222;
    color: #fff;
  }
}
```

### 8. 循环

Sass提供`@for`、`@each`和`@while`循环。

```scss
// @for循环
@for $i from 1 through 3 {
  .item-#{$i} {
    width: 2em * $i;
  }
}

// @each循环
$colors: (red, green, blue);
@each $color in $colors {
  .#{$color}-text {
    color: $color;
  }
}
```

## 编译Sass文件

### 单个文件编译

```bash
npx sass input.scss output.css
```

### 监视文件变化并自动编译

```bash
npx sass --watch input.scss output.css
```

### 编译整个目录

```bash
npx sass input-dir:output-dir
```

### 压缩输出

```bash
npx sass input.scss output.css --style compressed
```

## 项目示例

在`demo1`目录中有一个简单的Sass示例项目，展示了变量、嵌套、混合器等功能的使用。

运行以下命令编译示例项目：

```bash
cd css/sass/demo1
npx sass style.scss style.css
```

然后在浏览器中打开`index.html`查看效果。

## 注意事项

1. Sass有两种语法：`.scss`（更接近CSS）和`.sass`（使用缩进而非花括号）
2. 推荐使用`.scss`语法，因为它与CSS完全兼容
3. 在生产环境中，应该使用压缩版本的CSS以减少文件大小 