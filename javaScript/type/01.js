/**
 *
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */

// 函数编写者
// 函数调用者不同
// 健壮性
// typeof 是 js里的 运算符 可以判断简单数据类型   symbol
// 返回的结果是类型字符串
// 注意对 进行 null  object
function add(a, b) {
  // 函数参数的校验
  if (typeof a !== "number" || typeof b !== "number" || isNaN(a) || isNaN(b)) {
    throw new TypeError("a和b必须是数字");
    //到此为止了吗？还要防一手NaN,它是不是数字的数字,一个特殊值。Not a Number
  }

  return a + b;
}
console.log(add("1", 2));

console.log(add(1, NaN));

//到此为止了吗？还要防一手NaN,它是不是数字的数字。Not a Number
// //NaN来自错误运算
