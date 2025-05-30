//console.log(vaule);
//var vaule; //全局的 变量提升了，直接自动放到所有内容前面
// let 块级作用域
// if (false) {
//   let vaule = 1;
// }
// console.log(vaule);
// 报错信息;
// console.log(vaule);
//             ^
// ReferenceError: vaule is not defined
console.log(value);
//value = 1;
if (false) {
  var value = 1;
}
console.log(value);
