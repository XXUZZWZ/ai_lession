# BEM 命名规范-微信weui类名命名规则

## 一、BEM命名规范概述

BEM（Block Element Modifier）是一种面向对象的CSS命名方法论，通过明确的命名规则提升代码可维护性。其核心公式为：

```
class = "{框架名}-{block名}__{element名}"                  // 基础结构
class = "{框架名}-{block名}__{element名} {框架名}-{block名}_{Modifier}"  // 状态/变体
```

## 二、BEM核心概念解析

### 1. Block（模块）

- **定义**：独立功能单元，可复用的UI组件
- **示例**：`.weui-page`（页面容器）、`.weui-btn`（按钮组件）
- **特点**：
  - 可单独存在
  - 不依赖其他模块
  - 可嵌套包含子元素

### 2. Element（元素）

- **定义**：Block的组成部分，不能独立存在

- **示例**：`.weui-page__header`（页面头部）、`.weui-page__title`（标题）

- **命名规则**：

  ```css
  {block名}__{element名}
  ```

### 3. Modifier（修饰符）

- **定义**：表示状态或变体的标识符
- **示例**：`.weui-btn_primary`（主按钮）、`.weui-btn_loading`（加载状态）
- **使用场景**：
  - 功能变体（`.weui-btn_default` vs `.weui-btn_primary`）
  - 交互状态（`.weui-btn_loading`、`.weui-btn_unableclick`）





## 三、最佳实践建议

1. **命名层级控制**：避免超过3层嵌套（如`block__element--modifier`）
2. **语义化命名**：使用有意义的英文单词而非缩写
3. **状态分离**：将状态类（如`.is-loading`）与功能类分离
4. **样式复用**：通过继承减少重复代码
5. **工具辅助**：使用PostCSS、CSS Modules等工具自动处理命名

## 四、效果展示



## 五、总结

BEM规范通过结构化的命名方式：

- 降低样式冲突风险
- 提升代码可维护性
- 增强团队协作效率

WeUI作为微信官方组件库，严格遵循BEM规范，其命名体系已成为移动端开发的重要参考标准。通过合理应用BEM，开发者可以构建出更健壮、易维护的前端架构。



## 六、代码示例

~~~CSS
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>WEUI BUTTON 设计</title>
  <link rel="stylesheet" href="index.css">
</head>
<body>
  <!-- Block -->
  <div class="weui-page">
    <!-- Element -->
    <header class="weui-page__header">
        <h1 class="weui-page__title">Button</h1>
        <p class="weui-page__desc">按钮</p>
    </header>
    <main class="weui-page__body">
      <div class="button-sp-area">
        <button class="weui-btn weui-btn_primary">主要操作</button>
        <!-- 一个下划线表示状态 -->
        <button class="weui-btn weui-btn_loading "></button>
        <button class="weui-btn weui-btn_primary weui-btn_loading ">主要操作</button>
        <button class="weui-btn weui-btn_primary weui-btn_unableclick">主要操作</button>
        <button class="weui-btn weui-btn_default ">次要操作</button>
        <button class="weui-btn weui-btn_default weui-btn_unableclick">次要操作</button>
        <button class="weui-btn weui-btn_default weui-btn_loading">次要操作</button>
        <!-- btn可以单开，和page同级 为 Block -->
        
      </div>
     
  </div>
</body>
</html>
~~~

~~~CSS
 /* index.css */
 *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }
 body{
  background-color: #ededed;
  height: 100%;
 }
 .weui-page {
  padding: 18px;
 }
 .weui-page__header {
  padding: 40px;
 }
 .weui-page__title{
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;

 }
 .weui-page__desc{
  font-size: 12px;
  color:#827856;
 }
 
 .weui-btn-sp-area{
   margin-top: 10px;
 }
 .weui-btn{
  display:block;
  border-width: 0px;
  width: 153px;
  height: 42px;
  font-size: 15px;
  background-color: #00b853;
  color: #fbfbfb;
  margin: 0 auto;
  margin-bottom: 12px;
  border-radius: 4px;
 }
 .weui-btn_default{
  background-color: #dddddd;
  color: #333;
 }
 .weui-btn_loading {
  background: url(./loding.png) no-repeat center center;
  background-color: #00b853;
 }

.weui-btn_default.weui-btn_loading{
  background: url(./wloding.png) no-repeat 30px  center;
  background-color: #dddddd;
 }
 .weui-btn_primary.weui-btn_loading{
  background: url(./loding.png) no-repeat 25px  center;
  background-color: #00b853;
 }
 .weui-btn_unableclick{
  color: #ccc8c9;
 }
 .weui-btn_primary.weui-btn_unableclick{
  background-color:#ddd ;
  color: #333;

 }
~~~

## 效果



![image-20250529005120331](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20250529005120331.png)

设计图

![weui-button](C:\Users\HP\Desktop\ai_lession\css\weui\button\weui-button.png)

简介：🚀 本文深度解析BEM规范在微信WeUI中的实战应用，从命名公式到状态修饰符设计，手把手教你告别样式混乱，提升团队协作效率！#CSS #WeUI #前端开发