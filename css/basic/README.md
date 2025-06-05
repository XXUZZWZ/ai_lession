# css基础

定义: 层叠样式表(Cascading Style Sheets)
作用：设置网页样式
声明格式：选择器{属性:值;}




## 选择器

### 标签选择器
p,h1,body,div,span·····等
### 类选择器
.类名{属性:值;} ,注意类名要符合规划，一个元素可以有多个类名，多个类名之间用空格隔开。BEM命名法,
### id选择器
#id名{属性:值;}，id一般用于js操作
### 后代选择器
    作用：选择某元素的后代 
    格式：元素1 元素2{属性:值;} 这个意思是选择元素1里的所有元素2
### 子选择器
    作用：选择某元素的子元素
    格式：元素1 > 元素2{属性:值;} 这个意思是选择元素1里子元素2
### 相邻兄弟选择器
    作用：选择某元素的相邻兄弟元素
    格式：元素1 + 元素2{属性:值;} 这个意思是选择元素1后面的元素2
### 通用兄弟选择器
    作用：选择某元素的所有兄弟元素
    格式：元素1 ~ 元素2{属性:值;} 这个意思是选择元素1后面的所有元素2
### 通配符选择器
    作用：选择所有元素
    格式：*{属性:值;}
### 选择器运算符
    比如 
    并集：p,h1{属性:值;} 这个意思是选择p和h1
    交集：p.h1{属性:值;} 这个意思是选择p和h1
    伪类：a:hover{属性:值;} 这个意思是选择a的伪类
    伪元素：p::first-letter{属性:值;} 这个意思是选择p的伪元素


## 属性

### 字体属性
    font-family:字体名;
    font-size:字体大小;
    font-weight:字体粗细;
    font-style:字体样式;
    font-variant:字体变体;
    font:字体属性;
### 文本属性
    color:颜色;
    text-align:文本对齐方式;
    text-decoration:文本装饰;
    text-indent:文本缩进;
    line-height:行高;
    word-spacing:单词间距;
    letter-spacing:字母间距;
    white-space:空白处理;
    text-transform:文本转换;
    vertical-align:垂直对齐;
### 列表属性
    list-style-type:列表样式类型;
    list-style-position:列表样式位置;
    list-style-image:列表样式图片;
    list-style:列表样式;
### 表格属性
    border-collapse:表格边框合并;
    border-spacing:表格边框间距;
    caption-side:表格标题位置;
    empty-cells:表格空单元格显示;
### 背景属性
    background-color:背景颜色;
    background-image:背景图片;
    background-repeat:背景重复;
    background-position:背景位置;
    background-attachment:背景附件;
    background:背景属性;
### 定位属性
    position:定位方式;
    top:顶部位置;
    right:右侧位置;
    bottom:底部位置;
    left:左侧位置;
    z-index:层级;
### 浮动属性
    float:浮动方式;
    clear:清除浮动;
### 显示属性
    display:显示方式;
    visibility:可见性;
    overflow:溢出处理;  
    cursor:光标样式;
    opacity:透明度;
    filter:滤镜;
    transform:变换;
    transition:过渡;
    animation:动画;
    box-shadow:阴影;
    border-radius:圆角;
    resize:调整大小;
    background-size:背景大小;
    background-origin:背景原点;
    background-clip:背景裁剪;
    
## 选择器优先级

    内联样式 > id选择器 > 类选择器 > 标签选择器 > 通配符选择器 > 继承
    注意：
        1. 选择器优先级相同，后面的样式会覆盖前面的样式
    (内联,id,class,tag,*)权重依次减小
    权重计算：
        1. 内联样式：1000
        2. id选择器：100
        3. 类选择器：10
        4. 标签选择器：1
        5. 通配符选择器：0
        6. 继承：0
        7. 其他：0
## 伪类和伪元素
    伪类：
        1. 链接伪类
            a:link 未访问的链接
            a:visited 已访问的链接
            a:hover 鼠标悬停 
            a:active 鼠标点击
        2. 动态伪类
            :hover 鼠标悬停
            :active 鼠标点击
            :focus 元素获得焦点
            :visited 已访问的链接
            :checked 选中的元素
            :enabled 可用的元素
            :disabled 禁用的元素
            :checked 选中的元素
            :first-child 第一个子元素
            :last-child 最后一个子元素
            :nth-child(n) 第n个子元素
            :nth-last-child(n) 倒数第n个子元素
            :first-of-type 第一个同类型元素
            :last-of-type 最后一个同类型元素
            :nth-of-type(n) 第n个同类型元素
            :nth-last-of-type(n) 倒数第n个同类型元素
## 盒子模型
    盒子模型：
        1. 内容区
        2. 内边距
        3. 边框
        4. 外边距
    盒子模型的属性：
        1. width:宽度
        2. height:高度
        3. padding:内边距
        4. border:边框
        5. margin:外边距
        6. box-sizing:盒子模型
            1. content-box:默认值，盒子模型的宽度和高度只包括内容区
            2. border-box:盒子模型的宽度和高度包括内容区、内边距和边框
            3. inherit:继承父元素的box-sizing属性
            4. initial:初始值
            5. unset:取消设置
            6. revert:重置为默认值
            7. revert-layer:重置为层叠值
            8. all:所有属性
            9. none:所有属性
            10. unset:所有属性
            11. revert:所有属性
            12. revert-layer:所有属性
            13. content-box:所有属性
            14. border-box:所有属性 
  
## 布局
    1. 浮动布局
        1. 浮动元素会脱离文档流
        2. 浮动元素会向左或向右移动，直到碰到父元素的边界或另一个浮动元素
        3. 浮动元素不会影响其他元素的位置
        4. 浮动元素会影响父元素的高度
        5. 浮动元素会影响其他元素的布局
    2 . 绝对定位布局
        1. 绝对定位元素会脱离文档流
        2. 绝对定位元素会向左或向右移动，直到碰到父元素的边界或另一个绝对定位元素
        3. 绝对定位元素不会影响其他元素的位置
        4. 绝对定位元素会影响父元素的高度
    3. flex布局
        1. flex布局是一种一维布局
        2. flex布局是一种弹性布局
        3. flex布局是一种自适应布局
        基本属性：
            1. flex-direction:主轴方向
            2. flex-wrap:换行
            3. flex-flow:主轴方向和换行
            4. justify-content:主轴对齐方式
            5. align-items:交叉轴对齐方式
            6. align-content:交叉轴对齐方式
            7. flex:弹性
            8. order:顺序
            9. flex-grow:放大比例
            10. flex-shrink:缩小比例
    4 . grid布局
        1. grid布局是一种二维布局
        2. grid布局是一种网格布局
        3. grid布局是一种自适应布局
        基本属性：
            1. grid-template-columns:列宽
            2. grid-template-rows:行高
            3. grid-template-areas:网格区域
            4. grid-gap:网格间距
            5. grid-column-gap:列间距
            6. grid-row-gap:行间距
            7. grid-column:列
            8. grid-row:行
    5. 媒体查询
        1. 媒体查询是一种响应式布局
        2. 媒体查询是一种自适应布局
        3. 媒体查询是一种媒体类型
        基本属性：
        //这个的意思是当屏幕宽度小于768px时，body的背景颜色为红色
            1. @media screen and (max-width: 768px) {
                body {
                    background-color: red;
                }
            }
        //这个的意思是当屏幕宽度大于768px且小于1024px时，body的背景颜色为蓝色，这里的大小为[)区间
            2. @media screen and (min-width: 768px) and (max-width: 1024px) {
                body {
                    background-color: blue;
                }
            }
        //这个的意思是当屏幕宽度大于1024px时，body的背景颜色为绿色
            3. @media screen and (min-width: 1024px) {
                body {
                    background-color: green;
                }
            }
    