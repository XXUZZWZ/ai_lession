// 作用域的概念 全局作用域不会被销毁
// 作用域链 内部可以访问外部
// 函数外部无法读取函数内部变量 ？一定吗？
var n = 999;
function f1() {
  // 没有使用var,相当于在全局定义了
  b = 123;
  console.log(n);
  // 函数作用域名
  {
    // 块级作用域
    let a = 1;
  }
}
f1();
console.log(b);
