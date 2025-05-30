function foo() {
  var myName = "极客时间";
  let test1 = 1;
  const test2 = 2;
  var innerBar = {
    getName: function () {
      console.log(test1);
      return myName;
    },
    setName: function (newName) {
      myName = newName;
    },
  };
  return innerBar;
}
var bar = foo(); // 函数嵌套函数外部访问的时候 ， 沿着词法作用域链找到它声明的时候的函数中的变量，函数就像有一个背包，里面有外部变量
bar.setName("极客邦"); // 1
bar.getName();
console.log(bar.getName()); //1 极客邦

// 根据词法作用域的规则，内部函数中可以访问外部中声明的自由变量。
// 但通过调用一个外部函数返回一个内部函数，即使该外部函数已经执行结束了，但是内部函数应用的外部函数的变量能  保存在内存（闭包中）中，我们报这些变量集合叫闭包
// foo 外部函数，这些变量的集合称为内部函数的专属背包
