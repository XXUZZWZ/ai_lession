# flex 布局

## 1.写法

```css
div.father {
  display: flex;
}
```

写在父元素，作用在子代元素

```html
<div class="father">
  <div class="son"></div>
  <div class="son"></div>
  <div class="son"></div>
</div>
```

要直接在父元素中写对齐方式写法是

`justify-content: start;`
作用对象：整个 Flex 容器（父元素）。
它用于控制 所有 Flex 项目在主轴（main axis） 上的对齐方式。
例如，在 flex-direction: row 的容器中，主轴是水平方向，justify-content 会控制所有子元素在水平方向上的对齐。

```CSS
div.father{
	display:flex;
	justify-content: center/space-between/space-around/space-evenly;   主轴对齐方式
	align-items:center/flex-start/flex-end/;   侧轴对齐方式
}
```

要直接在子元素中写对齐方式写法是

`justify-self:start;`

> ⚠️ 注意：`justify-self` 是 Grid 布局属性，Flexbox 中不存在该属性

作用对象：单个 Grid 项目（即子元素）。
它用于控制 单个元素在交叉轴（cross axis） 上的对齐方式。
例如，在 flex-direction: row（主轴为水平方向）的容器中，交叉轴是垂直方向，justify-self 会控制该元素在垂直方向上的对齐。

**`justify-self`**

- **用途**：覆盖 `align-items` 的默认对齐方式，单独调整某个元素在交叉轴上的位置。

- 示例

  ```
  .item {
    align-self: flex-end; /* 更常用 */
    justify-self: flex-end; /* 在 Grid 布局中更常见，Flexbox 中较少使用 */
  }
  ```

### 关键区别总结

| **属性**          | **作用对象**         | **作用方向** | **默认行为**       | **常见值**               |
| ----------------- | -------------------- | ------------ | ------------------ | ------------------------ |
| `justify-self`    | 单个元素             | 交叉轴       | 遵循 `align-items` | `start`, `end`, `center` |
| `justify-content` | 整个容器的所有子元素 | 主轴         | `flex-start`       | `flex-start`, `center`   |

`align-items:center/flex-start/flex-end/;` 和 `align-slef:center/flex-start/flex-end/;` 也类似

前者是调整 flex 容器侧轴的对齐方向 后者则是对单个元素。

**主轴方向**

`flex-direction: row/row-reverse /column/column-reverse;`

分别对应 主轴为 行 和 行反向排列 列 和 列反向排列

行 `flex-direction: row` ：

| 1   | 2   | 3   |
| --- | --- | --- |
| 4   |     |     |
|     |     |     |
|     |     |     |

行反向排列 `flex-direction: row-reverse；`

| 4   | 3   | 2   |
| --- | --- | --- |
| 1   |     |     |
|     |     |     |
|     |     |     |

列 `flex-direction:column；`

| 1   |     |     |
| --- | --- | --- |
| 2   |     |     |
| 3   |     |     |
| 4   |     |     |

列反向排列 `flex-direction: column-reverse;`

| 4   |     |     |
| --- | --- | --- |
| 3   |     |     |
| 2   |     |     |
| 1   |     |     |

## 换行

`flex-wrap: wrap /nowrap;`对应换行不换行

### 排序

order:1 ;原本位置优先级加一，但是页面代码实际位置不变，可能影响无障碍的设计。

order:-1 ;原本位置优先级减一，但是页面代码实际位置不变 可能影响无障碍的设计。
