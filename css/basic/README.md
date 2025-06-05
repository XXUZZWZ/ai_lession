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
        3.结构伪类
             :first-child 第一个子元素
            :last-child 最后一个子元素
            :nth-child(n) 第n个子元素
            :nth-last-child(n) 倒数第n个子元素
 

 如果我们要选择.container 里面的第三个元素，我们怎么写？
   .container p:nth-of-type(3){
    background-color: red;
    color:#fff;
   }
    