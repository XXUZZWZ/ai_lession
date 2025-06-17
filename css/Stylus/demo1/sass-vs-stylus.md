# Sass与Stylus：两大CSS预处理器的深度对比

CSS预处理器已成为前端开发不可或缺的工具，它们通过提供变量、嵌套规则、混合器等功能，使CSS代码更加模块化和可维护。在众多CSS预处理器中，Sass和Stylus是两个广受欢迎的选择。本文将对这两种技术进行深入对比，帮助开发者根据项目需求做出明智的选择。

## 基本介绍

### Sass

Sass(Syntactically Awesome Stylesheets)诞生于2006年，是最早的CSS预处理器之一。它有两种语法：

- SCSS（Sassy CSS）：使用与CSS相似的语法，文件扩展名为`.scss`
- 缩进语法：使用缩进而非花括号，文件扩展名为`.sass`

Sass由Ruby开发，后来也有了LibSass（C/C++实现）和Dart Sass（现在的官方实现）。

### Stylus

Stylus诞生于2010年，由Node.js社区的TJ Holowaychuk创建，受到Sass和LESS的影响。Stylus以其极简的语法和灵活性著称，允许开发者选择是否使用冒号、分号和括号。

## 语法对比

### 变量定义

**Sass:**
```scss
$primary-color: #3498db;
$font-stack: Helvetica, sans-serif;

body {
  color: $primary-color;
  font: 100% $font-stack;
}
```

**Stylus:**
```stylus
primary-color = #3498db
font-stack = Helvetica, sans-serif

body
  color primary-color
  font 100% font-stack
```

### 嵌套规则

**Sass:**
```scss
nav {
  ul {
    margin: 0;
    padding: 0;
    
    li {
      display: inline-block;
      
      a {
        display: block;
        padding: 6px 12px;
      }
    }
  }
}
```

**Stylus:**
```stylus
nav
  ul
    margin 0
    padding 0
    
    li
      display inline-block
      
      a
        display block
        padding 6px 12px
```

### 混合器(Mixins)

**Sass:**
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

**Stylus:**
```stylus
border-radius(radius)
  -webkit-border-radius radius
  -moz-border-radius radius
  border-radius radius

.box
  border-radius(10px)
```

## 功能特性对比

### 运算能力

两者都支持基本的数学运算，但在处理单位和复杂运算方面有所不同。

**Sass:**
```scss
$width: 100px;
.container {
  width: $width * 2;
  height: floor(100.5px); // 内置函数
}
```

**Stylus:**
```stylus
width = 100px
.container
  width width * 2
  height floor(100.5px) // 内置函数
```

### 条件语句

**Sass:**
```scss
$theme: 'dark';

body {
  @if $theme == 'dark' {
    background-color: #333;
    color: white;
  } @else {
    background-color: white;
    color: #333;
  }
}
```

**Stylus:**
```stylus
theme = 'dark'

body
  if theme == 'dark'
    background-color #333
    color white
  else
    background-color white
    color #333
```

### 循环

**Sass:**
```scss
@for $i from 1 through 3 {
  .item-#{$i} {
    width: 100px * $i;
  }
}
```

**Stylus:**
```stylus
for i in 1..3
  .item-{i}
    width 100px * i
```

## 实际应用对比

我们以一个星空背景效果为例，对比两种预处理器的实现方式：

### Sass实现

```scss
@use "sass:math";

.title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 5rem;
  font-weight: bold;
  background-image: linear-gradient(to right, #f6d365, #fda085);
  -webkit-background-clip: text;
  color: transparent;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
}

body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
  overflow: hidden;
}

@function star($n) {
  $result: #{math.random(100)}vw #{math.random(100)}vh #fff;
  @for $i from 1 through $n {
    $result: #{$result}, #{math.random(100)}vw #{math.random(100)}vh #fff;
  }
  @return $result;
}

$n: 5;
$duration: 400s;
$count: 1000;
@for $i from 1 through $n {
  $duration: floor($duration/2);
  $count: floor($count/2);
  .layer#{$i} {
    position: fixed;
    left: 0;
    top: 0;
    width: #{$i}px;
    height: #{$i}px;
    border-radius: 50%;
    background-color: transparent;
    box-shadow: star($count);
    animation: moveUp $duration linear infinite;
  }
  
  .layer#{$i}::after {
    content: '';
    position: inherit;
    width: inherit;
    height: inherit;
    border-radius: inherit;
    box-shadow: inherit;
    left: 0;
    top: 100vh;
  }
}

@keyframes moveUp {
  to {
    transform: translateY(-100vh);
  }
}
```

### Stylus实现

```stylus
// 使用硬编码的星星位置
star(n)
  return '10vw 20vh #fff, 30vw 40vh #fff, 50vw 60vh #fff, 70vw 80vh #fff, 90vw 10vh #fff, 15vw 25vh #fff, 35vw 45vh #fff, 55vw 65vh #fff, 75vw 85vh #fff, 95vw 5vh #fff, 5vw 15vh #fff, 25vw 35vh #fff, 45vw 55vh #fff, 65vw 75vh #fff, 85vw 95vh #fff'

// 标题样式
.title
  position absolute
  top 50%
  left 50%
  transform translate(-50%, -50%)
  font-size 5rem
  font-weight bold
  background-image linear-gradient(to right, #f6d365, #fda085)
  -webkit-background-clip text
  color transparent
  text-shadow 0 0 10px rgba(255, 255, 255, 0.3)

// 背景样式
body
  margin 0
  padding 0
  min-height 100vh
  background linear-gradient(135deg, #0f0c29, #302b63, #24243e)
  overflow hidden

// 变量定义
n = 5
duration = 400s
count = 1000

// 创建多层星星
for i in 1..n
  duration = floor(duration / 2)
  count = floor(count / 2)
  
  .layer{i}
    position fixed
    left 0
    top 0
    width i * 1px
    height i * 1px
    border-radius 50%
    background-color transparent
    box-shadow unquote(star(count))
    animation moveUp duration linear infinite
  
  .layer{i}::after
    content ''
    position inherit
    width inherit
    height inherit
    border-radius inherit
    box-shadow inherit
    left 0
    top 100vh

// 动画定义
@keyframes moveUp
  to
    transform translateY(-100vh)
```

## 优缺点分析

### Sass优点

1. **成熟稳定**：作为最早的CSS预处理器之一，Sass拥有完善的文档和庞大的社区支持
2. **丰富的生态系统**：有大量的库和框架支持，如Compass、Bourbon等
3. **强大的函数库**：内置了许多实用函数，如颜色操作、数学计算等
4. **与主流框架集成良好**：Bootstrap、Foundation等主流框架都使用Sass
5. **两种语法选择**：可以选择SCSS（更接近CSS）或缩进语法

### Sass缺点

1. **学习曲线**：对于初学者来说，需要学习较多的语法和规则
2. **编译速度**：在大型项目中，编译速度可能会较慢
3. **依赖**：传统上依赖Ruby环境（现在的Dart Sass已解决此问题）

### Stylus优点

1. **极简语法**：可以省略冒号、分号和括号，代码更简洁
2. **灵活性高**：语法非常灵活，可以根据个人喜好调整
3. **强大的表达式**：支持复杂的表达式和条件语句
4. **JavaScript集成**：可以直接在Stylus中使用JavaScript表达式
5. **Node.js原生支持**：作为Node.js生态系统的一部分，集成非常方便

### Stylus缺点

1. **社区较小**：相比Sass，社区和资源较少
2. **灵活性带来的问题**：过于灵活的语法可能导致团队代码风格不统一
3. **学习资源有限**：教程和示例相对较少
4. **错误提示不够清晰**：有时候错误提示不够直观，调试困难

## 如何选择？

### 选择Sass的情况

1. 需要稳定、成熟的解决方案
2. 项目团队较大，需要统一的编码规范
3. 使用基于Sass的UI框架（如Bootstrap）
4. 需要丰富的第三方库支持
5. 项目需要长期维护

### 选择Stylus的情况

1. 喜欢简洁、灵活的语法
2. 项目基于Node.js生态系统
3. 个人项目或小型团队
4. 需要更高的定制性和表达能力
5. 喜欢尝试新技术

## 结论

Sass和Stylus都是优秀的CSS预处理器，它们各有优缺点。Sass更加成熟稳定，拥有庞大的社区和生态系统，适合大型项目和团队；而Stylus语法更加简洁灵活，与Node.js生态系统集成良好，适合个人开发者和小型团队。

在实际项目中，选择哪种预处理器应该基于项目需求、团队熟悉度以及与其他技术栈的兼容性来决定。无论选择哪一个，它们都能显著提高CSS的可维护性和开发效率。

最后，随着CSS标准的不断发展，原生CSS也在不断增强功能（如变量、嵌套等），未来可能会减少对预处理器的依赖。但在可预见的未来，Sass和Stylus仍将是前端开发的重要工具。 