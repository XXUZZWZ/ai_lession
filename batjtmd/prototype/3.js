function Person(name,age){
  // this 指向当前实例化对象  
  this.name = name;
  this.age = age;
}
// 原型对象   
// 类的方法  
Person.prototype.say =function() {

    console.log(`my is ${this.name}`);
  
}
let hu = new Person("胡夏婷",20);
var a = {
  name:"孔子",
  country:"中国"
}
console.log(hu.__proto__);
hu.__proto__ = a;
console.log(hu.__proto__);
console.log(hu.country);
console.log(Person.prototype);
console.log(Person.prototype.constructor);
console.log(hu.constructor);
console.log(hu.constructor === Person);// false
console.log(hu.constructor === Person.prototype.constructor);// false
console.log(hu instanceof Person);// false
console.log(hu instanceof Object);// true
console.log(hu instanceof Array);// false
console.log(hu.eee,hu.name);//undefined 胡夏婷

// 