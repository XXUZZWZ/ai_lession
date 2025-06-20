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
    一直写 float :right 多列 -这种 CSS 样式设置方式确实是用来创建一个覆盖整个父元素的效果。
    position: absolute; top: 0; right: 0; bottom: 0; left: 0; 这组属性组合的意思是:
    position: absolute - 元素脱离正常文档流，相对于最近的定位祖先元素定位
    四个方向的值都设为 0 - 意味着这个元素会拉伸填满其定位上下文的全部空间
    这常用于创建覆盖层、遮罩或背景效果。在您的代码中，它与半透明黑色背景色 background-color: rgb(0 0 0 / 50%); 结合使用，很可能是在文件上传组件中创建一个遮罩效果，表示文件的某种状态（如上传中、错误等）。

github 地址：https://github.com/Tencent/weui/blob/master/src/style/widget/weui-cell/weui-uploader.less
演示地址：https://weui.io/#uploader
css 官方源码：用less 语法编写
```less
/*
* Tencent is pleased to support the open source community by making WeUI available.
* 
* Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
* 
* Licensed under the MIT License (the "License"); you may not use this file except in compliance
* with the License. You may obtain a copy of the License at
* 
*       http://opensource.org/licenses/MIT
* 
* Unless required by applicable law or agreed to in writing, software distributed under the License is
* distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
* either express or implied. See the License for the specific language governing permissions and
* limitations under the License.
*/

@import "../../base/fn";

.weui-cell_uploader {
  padding-bottom: 24px;
}
.weui-uploader {
  flex: 1;
}
.weui-uploader__hd {
  display: flex;
  padding-bottom: 12px;
  align-items: center;
}
.weui-uploader__title {
  flex: 1;
}
.weui-uploader__info {
  color: @weuiTextColorTips;
}

.weui-uploader__bd {
  margin-bottom: @weuiCellGapH - (@weuiCellGapV + @weuiUploaderFileSpacing);
  margin-right: -@weuiUploaderFileSpacing;
  overflow: hidden;
}
.weui-uploader__files {
  list-style: none;
}
.weui-uploader__file {
  float: left;
  margin-right: @weuiUploaderFileSpacing;
  margin-bottom: @weuiUploaderFileSpacing;
  width: @weuiUploaderSize;
  height: @weuiUploaderSize;
  background: no-repeat center center;
  background-size: cover;
}
.weui-uploader__file_status {
  position: relative;
  &::before {
    content: " ";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5); // 固定色值
  }
  .weui-uploader__file-content {
    display: block;
  }
}
.weui-uploader__file-content {
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--weui-WHITE);
  .weui-icon-warn {
    display: inline-block;
  }
}
.weui-uploader__input-box {
  float: left;
  position: relative;
  margin-right: @weuiUploaderFileSpacing;
  margin-bottom: @weuiUploaderFileSpacing;
  width: @weuiUploaderSize;
  height: @weuiUploaderSize;
  box-sizing: border-box;
  background-color: #ededed;
  .dark({
    background-color: #2e2e2e;
  });
  &::before,
  &::after {
    content: " ";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #a3a3a3;
    .dark({
      background-color: #6d6d6d;
    });
  }
  &::before {
    width: @weuiUploaderBorderWidth + 1;
    height: 33.33%;
  }
  &::after {
    width: 33.33%;
    height: @weuiUploaderBorderWidth + 1;
  }
  &:active {
    &::before,
    &::after {
      opacity: 0.7;
    }
  }
}
.weui-uploader__input {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  .setTapColor();
}
```
