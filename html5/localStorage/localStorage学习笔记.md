# localStorage 学习笔记

## 1. 基础知识

- localStorage 是 HTML5 提供的客户端存储技术，允许网页在用户浏览器中存储数据
- 数据会一直保存在浏览器中，除非被手动清除
- 存储容量通常为 5MB
- 只能存储字符串，其他类型需要转换（如使用 JSON.stringify 和 JSON.parse）

## 2. CSS 相关知识

### Stylus 预处理器
- Stylus 是 CSS 的超集，需要编译成浏览器能识别的 CSS
- 全局安装 Stylus：`npm install -g stylus`
- 使用 `stylus --version` 检查版本

### CSS 样式技巧
- `box-shadow` 可以为盒子添加立体感效果
- CSS 属性继承：
  - 某些属性会自动继承父元素（如颜色、字体）
  - 默认字体大小为 16px，颜色为黑色
  - body 上设置的 color 会被子元素继承
  - 某些属性不会继承，需要单独设置
- 背景图片处理：
  - `background-size: cover;` - 等比例缩放并裁剪，填满容器
  - `background-size: contain;` - 完整显示背景图片，可能会留白

### 盒模型
- `box-sizing: border-box;` 使元素的宽度包含内边距和边框
- 默认情况下，width 只包含内容区域

### 布局技巧
- Flex 布局用于灵活的一维布局
- 使用 `display: inline-block;` 实现元素并排显示

## 3. 移动端适配

### Viewport 视口设置
- `<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">`
- `user-scalable: no;` 禁止用户缩放页面
- `width: device-width;` 使视口宽度与设备宽度一致
- 这些设置确保网页在移动设备上以设计师预期的方式显示

## 4. localStorage 项目实践

### HTML 结构
```html
<div class="warpper">
  <h2>localStotage</h2>
  <p>
    <ul class="paltes">
      <li>loading Tapas.....</li>
      <form action="" class="add-item">
        <input type="text" name="Item" placeholder="Item name" required>
        <label for="Item">Item</label>
        <input type="submit" value="+Add Item">
      </form>
    </ul>
  </p>
</div>
```

### JavaScript 实现
```javascript
const addItem = document.querySelector('.add-item'); // 表单
const itemsList = document.querySelector('.paltes'); // 列表

function addItem(e){
  e.preventDefault();
  alert("阻止了");
}

addTtems.addEventListener('submit', addItem);
```

### 样式设计
- 使用 Stylus 预处理器编写样式
- 背景图片覆盖整个页面
- 半透明背景的内容区域
- 表单样式美化
- 列表项使用 Flex 布局

## 5. 学习要点总结

- localStorage API 的基本使用
- 表单数据处理与本地存储结合
- CSS 预处理器的使用（Stylus）
- 移动端适配技巧
- 盒模型和布局方法
- 事件处理与表单提交 