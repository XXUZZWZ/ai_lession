# (原生)->vue+react

## 语义化标签
  - 图表，表格，给老板看。thead,tbody,tfooter。
    - table
      thead
        tr
          th 
        tr
## DOM 编程
  操作DOM节点，将页面动态更新

## 样式  用户体验
  - 引入第三方库 bootstrap pc端 css框架 ，业务类。
     - 让我们不用写细节和重复代码，focus 于业务。
       - 加一个.container 容器类 固定宽度 
       - 加一个 .table-striped
  - 

## 如何将JS代码找到挂载点后的事情交给框架去做,去focus于**业务**。
- jquery //已退出历史舞台
- vue
  - focus 于业务。
   我们需要将friends数据挂载到页面上
   远离api 循环输出tr
- react 
## 现代前端开发框架
  - 离开原生js的刀耕火种
  - focus 于业务
    - App 的概念
    切图崽 html + css + 简单js(dom+event)
   App应用开发工程师
   Vue.createApp(App).mount('#app') //直接创建一个应用
   #app 是这里支持Vue app接管
   不用低级的DOM API
   - app里可以直接循环输出数据。
     - vue App中提供了 data(){
      friends
     }
     - tr v-for 配合需要循环输出的业务要求

## react  来自于facebook,适合大型应用。
  - 创建react 应用

