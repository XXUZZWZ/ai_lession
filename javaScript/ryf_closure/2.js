// 如何让局部变量在外部访问

function f1() {
  // 局部变量
  var n = 999; // 自由变量
  function f2() {
    console.log(n);
    n += 1;
    return n;
  }
  return f2;
}

var f2 = f1();
f2();
// 执行完后变量没有立即被销毁，而是被保存在函数f2中，当f2被调用时，变量n才被回收
// console.log(n);
console.log(f2());

/*

*/
