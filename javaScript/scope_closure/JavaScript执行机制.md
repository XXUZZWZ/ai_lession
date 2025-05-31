# 从C++看JavaScript闭包：执行上下文与作用域的跨语言对比

## 要理解JavaScript执行机制就要分别了解以下概念

1. JavaScript的调用栈 的概念：LIFO后来先出，出栈后栈会弹出，出栈后的栈元素会被清空。

2. 栈元素里的三个内容：

- 上下文执行环境:它是JavaScript引擎代码执行时创建的抽象概念包含以下内容
  	- this
  	- 变量
  	- 函数
  	- ·········
- 变量环境：它是储存执行上下文的变量和函数声明的对象，它负责的对象会有变量提升现象（Hoisting），简而言之就是如果变量在声明前访问等于访问了一个var a;一个没有初始值的`undefined`类型变量。
- 词法环境:   它是储存执行上下文的变量和函数声明的对象，它和变量环境不同在于它负责的对象会出现暂时性死区（TDZ），简而言之就是可以像C,java这些语言一样正常报错了，感觉就是ES6打的补丁，让JavaScript越来越像C,C++,Java这些语言的代码执行方式。

3. 作用域 ——JavaScript的作用域就是词法作用域简而言之就是变量和函数可以访问那些变量和函数的规则。

- 特性：函数在声明时就确定了它的作用域，不会因为这个函数的执行位置改变。
- 查找规则：当前词法环境 --> 当前变量环境 --> 外部词法环境 --> 外部变量环境 --> 全局作用域 。





~~~javascript
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


~~~

还记的第一点吗？函数栈调用执行后就一个函数栈被调用后出栈了按道理应该**所有储存的值全部释放**，那如果

将一个函数**内部的一个对象**返回给一个变量并且这个**内部变量**内的方法和值与**外部变量有关**

(就像返回的inner包必须访问test1和myname,这些值并不在innerBar里，按之前的理解应该是innerBar对象不能正常调用)

时怎么处理呢？

JavaScript就搞了个闭包，自动给返回的inner对象里加了一些外部变量，这些外部变量组成的集合就是闭包。

就是这种情况

~~~javascript
function foo() {
  var myName = "极客时间";
  let test1 = 1;
  const test2 = 2;
  var innerBar = {
    getName: function () {
      console.log(test1);
      return myName;
      //当外部函数在函数调用栈弹出是会留一个个闭包{myName: "极客邦" ,test1:1}
    },
    setName: function (newName) {
      myName = newName;
    },
  };
  return innerBar;
}
var bar = foo();
bar.setName("极客邦"); // 1
bar.getName();
console.log(bar.getName()); //1 极客邦
~~~



怎么验证呢？我们只要在  return myName;打个短点就可以看到了



![](C:\Users\HP\Desktop\ai_lession\javaScript\scope_closure\闭包.png)



为了帮助理解我将给出c++代码来实现类似代码。

~~~cpp
#include <iostream>
#include <string>

struct InnerBar {
    std::string myName;
    int test1;

    // 构造函数
    InnerBar(const std::string& name, int t1) : myName(name), test1(t1) {}

    // getName 方法：打印 test1，返回 myName
    std::string getName() {
        std::cout << test1 << std::endl;
        return myName;
    }

    // setName 方法：设置 myName
    void setName(const std::string& newName) {
        myName = newName;
    }
};

// 模拟 foo 函数
InnerBar foo() {
    std::string myName = "极客时间";
    int test1 = 1;
    const int test2 = 2; // 未使用，保留以保持结构一致

    return InnerBar(myName, test1);
    // 重点就在这，c++需要将传值操作明确的写出来而，JavaScipt自动完成了这点,这就是可能闭包的本质吧
}

int main() {
    // 调用 foo 得到 innerBar 对象
    InnerBar bar = foo();

    // 修改名称
    bar.setName("极客邦");

    // 调用 getName，输出 test1（1）
    bar.getName();

    // 再次调用 getName，打印 test1（1），并输出 myName（极客邦）
    std::cout << bar.getName() << std::endl;

    return 0;
}
~~~

