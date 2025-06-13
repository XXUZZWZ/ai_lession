// 接收三个参数
function add(a, b, c) {
  console.log(
    arguments,
    "???",
    Object.prototype.toString.call(arguments),
    arguments.length
  );
  // [Arguments] { '0': 1, '1': 2, '2': 3 } ??? [object Arguments]
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
  return a + b + c;
}
function add2() {
  // arguments 函数运行时 , 参数总管
  // 下标访问第几个参数   类数组
  // 类数组，用length属性，可以通过下标访问，但是没有太多其他方法
  // arguments.map = Array.prototype.map;
  // console.log(arguments.map((item) => item + 1));
  // 它没有map 方法
  // 如何将类数组转化成真正的数组
  const args = Array.from(arguments);
  console.log(Object.prototype.toString.call(args));
  let result = 0;
  for (let i = 0; i < args.length; i++) {
    result += args[i];
  }
  return result;
}
add(1, 2, 3);
console.log(add2(1, 2, 3));
//console.log(add.length);
// let addCurry = curry(add);
// addCurry(1)(2)(3);
