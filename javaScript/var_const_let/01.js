// 代码
//  编译阶段
//  期间会进行语法检测  
//  1. 变量提升  2. 函数提升
// js 的缺陷 执行和阅读顺序不同
//  执行 
// 当前作用域的顶部
showName()  // 驼峰式命名

console.log(myName)

var myName = "myname"

function showName(){
    console.log(myName)
}
