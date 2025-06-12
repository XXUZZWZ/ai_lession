// 一句代码
// v8 引擎
// 变量提升
// 编译阶段
// 执行阶段
// 全局作用域的变量
// 浏览器中运行 a 挂载在 window.a里
// node 服务器a 挂载在global 里

var a = 1;
console.log(globalThis.a); //输出  undefined
//  ESM 中顶层 var 不绑定全局对象）
// common 模式才绑定

global.a = 1; // 显式声明全局变量
console.log(globalThis.a); // 应输出 1

function f() {
  console.log("/////");
}
console.log(global.f);

const global.f =()=> {
  console.log("////");
}