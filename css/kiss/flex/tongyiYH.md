# Flex 布局详解

## 一、基础语法结构

```css
/* 父容器设置 */
.father {
  display: flex; /* 启用Flex布局 */
}
```

```html
<!-- HTML结构 -->
<div class="father">
  <div class="son"></div>
  <div class="son"></div>
  <div class="son"></div>
</div>
```

**核心特性**：
- Flex布局作用于**直接子元素**
- 父容器通过属性控制布局规则
- 子元素继承默认Flex行为

## 二、主轴与交叉轴对齐

### 1. 容器级对齐（作用于所有子元素）

```css
.father {
  justify-content: flex-start | center | space-between | space-around | space-evenly;
  align-items: flex-start | center | flex-end | stretch | baseline;
}
```

| 属性              | 作用方向   | 控制维度      | 默认值       |
| ----------------- | ---------- | ------------- | ------------ |
| `justify-content` | 主轴方向   | 水平/垂直排列 | `flex-start` |
| `align-items`     | 交叉轴方向 | 垂直/水平排列 | `stretch`    |

**主轴方向设置**：
```css
flex-direction: row | row-reverse | column | column-reverse;
```

### 2. 元素级对齐（单个子元素）

```css
.son {
  align-self: auto | flex-start | center | flex-end | stretch | baseline;
}
```

> ⚠️ 注意：`justify-self` 是Grid布局属性，Flexbox中不存在该属性

## 三、布局方向详解

| 属性值           | 主轴方向 | 交叉轴 | 排列示意图      |
| ---------------- | -------- | ------ | --------------- |
| `row` (默认)     | 水平→    | 垂直   | 1 2 3           |
| `row-reverse`    | 水平←    | 垂直   | 3 2 1           |
| `column`         | 垂直↓    | 水平   | <br>1<br>2<br>3 |
| `column-reverse` | 垂直↑    | 水平   | <br>3<br>2<br>1 |

## 四、高级特性

### 1. 换行控制
```css
.father {
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```

- `nowrap`: 不换行（默认）
- `wrap`: 溢出自动换行
- `wrap-reverse`: 反向换行

### 2. 元素排序（影响视觉顺序不影响DOM顺序）
```css
.son {
  order: [整数]; /* 默认值0 */
}
```

**注意事项**：
- 改变视觉顺序可能导致无障碍访问问题
- 数值越小优先级越高
- 相同order值按DOM顺序排列

## 五、典型场景应用

### 1. 响应式导航栏
```css
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

### 2. 卡片式布局
```css
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
.card {
  flex: 1 1 200px; /* 可伸缩弹性布局 */
}
```

### 3. 中心对齐
```css
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
```

## 六、兼容性说明

| 浏览器     | 兼容版本 |
| ---------- | -------- |
| Chrome     | 21+      |
| Firefox    | 20+      |
| Safari     | 9.1+     |
| Edge       | 12+      |
| iOS Safari | 7.1+     |
| Android    | 4.4+     |

> ✅ 现代浏览器广泛支持，IE11需添加`-ms-`前缀

## 七、调试技巧

1. 使用开发者工具查看Flex属性面板
2. 为容器添加`border`辅助观察
3. 通过`gap`属性快速设置间距
4. 利用`flex-grow`/`flex-shrink`测试弹性伸缩

## 八、常见问题解答

**Q: 为什么元素超出容器不换行？**  
A: 需要设置`flex-wrap: wrap`允许换行

**Q: 如何实现等高列布局？**  
A: 设置容器`align-items: stretch`（默认值）

**Q: 如何让某个元素单独居中？**  
A: 使用`align-self: center`覆盖容器设置

