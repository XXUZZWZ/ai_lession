console.log(0 / 0);
//NaN来自错误运算
console.log(Math.sqrt(-1));
// 平方根 Math.sqrt(-1)  NaN
console.log(parseInt("123"), parseInt("123"), parseInt("123a"));
console.log(Number(undefined)); // 返回NaN

console.log(NaN === NaN); //false 特殊值，用于表示非数字值。不等于自身（NaN !== NaN），需通过专用函数检测。

console.log(typeof NaN);

/*
NaN 的值：二进制形式为 7FF8000000000000（Quiet NaN，符号位为 0），但具体实现可能因平台和语言而异。
核心特性：不等于自身（NaN !== NaN），需通过专用函数检测。
JavaScript 底层：V8 使用 IEEE 754 双精度浮点数规范实现 NaN，并通过 C++ 标准库函数进行操作
*/
