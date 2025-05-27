/**
 * @param
 * @str
 *
 *
 */

const str = "hello";
console.log(str.split("").reverse().join());
//join默认用 ","连接 输出  o,l,l,e,h
console.log(str.split("").reverse().join(""));
// 传入""不用任何 连接
//MDN :  https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/join
//为啥简单数据类型后面直接用 . 方法，简单数据类型又不是对象，应该没有内置方法？
/**
 * 没有函数用法而是对象用法 len(str) ===> str.length()
 * js自动把 str转换成了 str = new String(str) 对象
 * str == new String(str)
 * ture
 * str === new String(str)
 * falses
 * Obj.prototype.toString.call(new String('hello'))
 * [object string]
 * js 给所有的简单数据类型提供了相应的类 包装类
 * js 会自动把简单数据类型包装成对象
 * 然后自动变回来
 */

function reverseString(str) {
  return str.split("").reverse().join("");
}

// es5
const reverseString1 = function (str) {
  return str.split("").reverse().join("");
};

// es6 返回值的时候，连return都能省略
const reverseString2 = (str) => str.split("").reverse().join("");
// 只有一个值可以这样写
const reverseString3 = str => str.split("").reverse().join("");

reverseString(str);
reverseString1(str);
reverseString2(str);

let str1 = "hello";
var str2 = reverseString3(str);
const strobj = new String("hello");
// 模板字符串 ${任何变量}
const str3 = `hello ${str2}`;
console.log(str3);
