# flex 布局

##   1.写法

~~~css
div.father{
	display:flex;
	justify-content: center/space-between/space-around/space-evenly;
    align-items:center/flex-start/flex-end/;
}
~~~

写在父元素，作用在子代元素

~~~html
<div class = "father">
    <div class = "son">
        
    </div>
    <div class = "son">
        
    </div>
    <div class = "son">
        
    </div>
</div>
~~~

~~~CSS
justify-content: center/space-between/space-around/space-evenly;   主轴对齐方式
align-items:center/flex-start/flex-end/;   侧轴对齐方式
~~~

