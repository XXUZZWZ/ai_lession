## 原型机制
- oop 机制 Object Oriented Programming 
- 封装。**继承**，多态，接口 。

## js的oop 
- 内置对象字面量
- 类的概念，没有claa关键字。
- 构造函数不能没有
- 赋予函数新使命
  类+构造函数
## js面向对象更强大，它是原型式的
- 任何对象 默认的指向object __prototo__ 
- __prototo__
 任何对象都有这个私有属性，对象和构造函数和类之间没什么血缘关系 ，代孕。
- js本没有类 
  只不过用function 函数 来模拟类的概念。 
- js对象和类，构造函数，没有血缘关系
 __proto__ 指向构造函数都prototype对象
 __proto__可以指向任何元素
 默认是object
 - 原型对象，原型链
- 类是大写的函数
- 实例 new 出来的对象
- 任何函数都有prototype属性,值就是构造函数的原型函数。


## new 的过程
new -> {} ---> constructor -> this -> {}->完成了构造--> __proto__ -->constructor.prototype-->Object 原型链-->null终点 。


