# 微信当家框架

## BEM 国际命名规范
- 项目 .weui 开头 - page 页面
    - page 页面
    - button 页面
    
- Block 概念
    - 它是一块内容  项目代号 风格 + 可复用方法 + 可复用样式 
    - 项目代号+ ‘-’ + 区块作用或职责
    
- Element 概念
    -元素
       块 __header
       块中只要概念不重叠就不用递归使用规则  
       `.weui-page__ title`
       `.weui-page__desc` 
       **框架**中button ，input ,cell,通用的组件 也为 block
    
       `.weui-btn]()`      **复用**
    
       业务代码
    
    组件开发 
    
    

-Modifier 概念

​	状态

​	`.weui-btn_primary`

​	`weui-btn_default`

- BEM 规范让协作更方便

  

  ​	 -页面由Blcok构成

  ​	- Block 包含一些element      `class = "- weui-{block}__{element}  "`

  ​	- element 会有些状态           `class = "weui-{block}__{element}  weui-{block}_{status}"`
