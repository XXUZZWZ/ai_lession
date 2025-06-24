# 手写call

- 手动指定函数内部的this
- 传参 一个个传和apply传一个数组不同
- 当第一个参数是null 或 undefined时，this指向window
严格模式报错
- 应用场景的区别
- call apply 是立即执行的，区别是参数的传入方式，可以互换使用
- bind 适合延时执行的函数 返回一个函数

##  手写call
- call 是属于所有函数，是属于Function.prototype。
- call 是属于Function.prototype 的方法

## 包含的技能
- 原型 Function.prototype
- 函数理解
   - context ,rest 运算符
   - context 为空，null ,undfined ,--> window
   - 在 context 上挂载 方法，轻松实现函数内部的this指向 context;
      - js 动态性 ：函数内部this指向调用者
   - context[fnkey] = this ;
      - fnkey = Sybol('fnkey');
   - delete context[fnkey],要清除的是，delete 删除的是对象上我们自作主张挂载上的属性，防止污染对象
   - result =   context[fnkey]() // 执行方法 ,并获得返回值
   - return 返回值
