# 阮一峰 closure

- 闭包是核心考点和难点
  定义：函数内部定义的函数，这个函数可以访问到函数外部的变量，这个函数外部的变量，被函数内部定义的函数所引用。
- 闭包可以帮助外部读取函数内部的变量
- 声明不带 var 就是全局
  the good part of the bad parts
- 如何介绍闭包

  - 函数嵌套函数(作用域链的嵌套)
  - f2 在 f1 里定义 就形成了闭包
  - 内部函数要返回
  - 背包
  - 外层函数的变量为什么不会被销毁？ 垃圾回收机制 ，**引用计数**，很重要一个机制。
    - 执行顺序带来的
    - 会引用自由变量
    - 内层函数也叫闭包函数
  - 闭包可能带来内存泄漏

- 闭包就是将函数内部和函数外部连接起来的桥梁

## 闭包的用途

- 读取函数内部的变量
- 让这些变量始终保存在运行过程中
- 怎么说明外部函数的自由变量不会销毁？
  - 多次执行闭包函数，可以观察
    垃圾回收机制(引用计数)

## 注意

- 闭包内存消耗大 可能内存泄漏。
  在退出函数之前，将不使用的局部变量全部销毁
  = null 对象就用 delete
- 会带来不确定性
  - **自由变量**
  - 自由是指生命周期
