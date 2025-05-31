//javascript 是静态作用域的验证代码
function bar() {
  console.log(myname);
}

function foo() {
  var myname = "极客";
  bar();
}
var myname = "骑士";
foo();// 输出什么？ 输出: 骑士




