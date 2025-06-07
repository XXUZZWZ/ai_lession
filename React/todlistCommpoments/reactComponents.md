# React 组件化

- vite 是啥？
  **工程**化套件 像塔吊 ，搅拌机 前端的 1/10 功底在这里
  大型项目

- 何为组件
  组合了 html,css,js 的开发单元
  App.jsx 根组件
  - 标签粒度太细，只是工作的一个环节，不利于表达业务单元的抽象。
  - Todolist 组件
  - 工作单位
  - 功能单位
- 组件如何划分 以一个 Todolist 为例
- 函数就是组件
  - return html 完成了模板{数据}
  - return 之前完成 js 逻辑， 数据·····。
  - 复用
  - html 的形式，插入。

## 开发目录

- todoListComponent 项目目录
- src 开发目录
  - App.jsx 根组件
  - 组件放到 components 目录下
  - css 放在 src 目录下/
    相对路径../

## 模块化

- 大型多人协作项目
- 模块化文件分离

  - 函数
  - 类
  - 文件分离 一个文件一个模块（类，函数，组件）
  - improt XXX form '../components/XXX'
  - export default XXX

## 组件化思想

- 现代前端开发框件的核心思想
- 低级 dom 树编程，--> 组件树编程
- 开发的最小单元
  html 只是沙子
  组件才是任务单元
- 组件组合一堆 html ,css,js 实现一个组合功能
  方便复用
- 组件组合在一起，完成页面开发
  页面由组件构成，现代前端就是用组件搭乐高积木
  
