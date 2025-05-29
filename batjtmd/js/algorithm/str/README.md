# tx 字符串考法

## 字符串和数组上的方法

-包装类
将简单数据类型包装一下变成对象，实现统一写法之后立即销毁
其他一样

### 数组方法

-reverse
-join('x') 以 x 为连接符号连接起来



### 问题：要求实现一个函数传入一个字符串，返回它的翻转字符串



~~~javascript
// es5写法
function rStr(str) {
    return str.split('').reverse().join('').toString()
}
function rStr1 =  


const reverseString = str => str.split('').reverse().join('').toString()
~~~

