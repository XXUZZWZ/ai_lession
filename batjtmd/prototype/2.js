// 没有class 的js 如何在苦苦追求oop 呢？

// 首字母大写 约定
//  1.类的概念 
//  2.构造函数 
//  3.
function Person(name,age){
  // this 指向当前实例化对象  
  this.name = name;
  this.age = age;
}
// 原型对象   
// 类的方法  
Person.prototype = {
  say:function(){
    console.log(`my is ${this.name}`);
  }
}
// new 一下就建立了实例化对象 
// new 运行构造函数
console.log(new Person("胡夏婷",20));
console.log(new Person("胡婷",18));

let hu = new Person("胡夏婷",20);
let o = {q:1}
console.log(o.__proto__.__proto__);// null
hu.say();
// my is 胡夏婷
console.log(hu);
console.log(hu.__proto__.__proto__.__proto__);
// { say: [Function: say] }
// 指向原型对象