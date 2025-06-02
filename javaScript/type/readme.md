# 类型判断

## js 数据类型 八种？

- 简单数据类型 放在栈内存

  string number boolean undefined null (bigint number)Numeric 统称类型
  拷贝式传值

- 复杂数据类型 栈空间（连续）（地址的引用） + 堆内容 （对象的内容）
  引用式赋值
  Object

## Js 有那些数据类型？

七种
string undefined null symbol boolean numeric(包含 number,bigInt)这 6 种 primitive 简单数据类型

## ECMA

-js 是 ECMA 语法规范的一个版本

- JavaScript 和 Java 没有关系

## ES6 新类型 symbol

一种原始数据类型，表示唯一且不可变的值

- 唯一性
  唯一性限制：Symbol 的唯一性仅限于运行时，无法跨 iframe 或 window 共享。

```javaScrit
const s1 = Symbol('key');
const s2 = Symbol('key');

console,log(s1===s2)//false
```

- 不可枚举

```javaScrit
const obj = {
  [Symbol('a')]: 1,
  b: 2
};
- 不能与其他类型运算
console.log(Object.keys(obj)); // ["b"]
```

```javaScrit
const s = Symbol('test');
console.log(s + 'abc'); // TypeError: Cannot convert a Symbol value to a string
```

## 特殊的 number NaN

检测 NaN：使用 isNaN() 或 Number.isNaN()，避免直接比较 === NaN。
跨语言一致性：不同语言（如 Python、C++）的 NaN 行为可能不同，但均遵循 IEEE 754 规范。
序列化：JSON 序列化会将 NaN 转换为 null（如 JSON.stringify({ a: NaN }) 结果为 { "a": null }）。
总结
NaN 的值：二进制形式为 7FF8000000000000（Quiet NaN，符号位为 0），但具体实现可能因平台和语言而异。
核心特性：不等于自身（NaN !== NaN），需通过专用函数检测。
JavaScript 底层：V8 使用 IEEE 754 双精度浮点数规范实现 NaN，并通过 C++ 标准库函数进行操作。
