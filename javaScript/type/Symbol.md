# 如何在接手离职同事的代码，ES6 Symbol,你值得了解

## 一.简单介绍一下 Symbol 类型

1. 首先它是一种基本类型，像 string,bigInt 这些数据类型，没有方法，也不能 new,声明方法 `const s1 = Symbol("desc")`和其他基本类型相似 。
2. 其次它的返回值是唯一且不可变的原始值，猜测在 V8 引擎中原理可能是由一个自增 symbol 链表或哈希实现。

## 二.代码实际中理解

### 一是用于做对象的键名，使得键名独一无二，这就是我为啥说 symbol 有利于接手离职同事的代码。

```javaSctipt


//现在我需要添加一下新的成员变量age存储age信息，你也不知道原来有木有这个变量。
const age = Symbol("age");
//这样声明的age变量一定不会覆盖本来成员变量
user[age] = 18;
// 我们可以在不影响原来数据结构下新增成员变量通过obj[age]访问
console.log(user.name, user[ID], user[age]);

```

```javascript
const user = {
  name: "Alice",
  [ID]: 123, //[]的意思是取值
  /*
  ·
  ·很多成员变量，而且变量名抽象
  ·
  ·
  */
};
```

假如这个对象成员很多，我想加一个`age`，但是懒得看原来的代码，可能因为原来的代码根本不知道变量的含义，前同事命名方式太抽象。

我们可以这样做

```javascript
//现在我需要添加一下新的成员变量age存储age信息，你也不知道原来有木有这个变量。
const age = Symbol("age");
user[age] = 18;
// 我们可以在不影响原来数据结构下新增成员变量通过obj[age]访问
```

你可能会想到你的离职同事之前也和你一样写方式的，你不就炸了吗？

不用担心，并不会，其实这样添加的age变量一定不会覆盖本来成员变量。

它的返回值通过js机制和v8引擎的某种实现有关，前面也提了可能就是用递增链表或者哈希实现的。

```javascript
console.log( Symbol("age") === Symbol("age")) //  输出 false 
console.log( Symbol() === Symbol() ) //  可以不传description参数 一样 输出 false 
```

哎，这时候可能会有疑问，那我就要创建可复用的Symbol,怎么弄呢？

用Symbol.for('key')方法就行了，代码如下：

```javascript
const s1 = Symbol.for('shared');
const s2 = Symbol.for('shared');
console.log(s1 === s2); // 这个时候就是true啦，不过感觉没啥用
```





 另外**Symbol 作为对象的键时不可枚举**，可以避免外部直接修改状态。

补充一点***Symbol 作为对象的键时不可枚举***是什么意思呢？

就是说在用for，Obj.key()方式遍历时，用Symbol 作为对象的键不能被访问到。

那你会有疑问了，那我就要访问咋办？

用这个方法这个 Object.getOwnPropertySymbols(obj) 方法就可以了

请看代码：

```javascript

const user = {
  name: "Alice",
  [ID]: 123, //[]的意思是取值
};
const age = Symbol("age");
user[age] = 18;
for (let i in user) {
  console.log(i); // 输出 name
}
Object.getOwnPropertyNames(user) // [name]
Object.getOwnPropertySymbols(user) // [Symbol(id),Symbol(age)]
```





有人问看不懂怎么办？我只能说懂得都懂，不懂你问ai就行了，~~因为作者也不太懂~~。

### 二是用来做对象的值，实现类型c++中的有的而js没有枚举类型

比如我们来写一个订单订单的状态：
```javascript
// orderStatus.js
const ORDER_STATUS = {
  PENDING: Symbol("pending"), // 待支付
  PAID: Symbol("paid"), // 已支付
  SHIPPED: Symbol("shipped"), // 已发货
  COMPLETED: Symbol("completed"), // 已完成
  CANCELLED: Symbol("cancelled"), // 已取消
};
module.exports = ORDER_STATUS;
```

然后再来写订单的状态变化：
```javascript

// orderService.js
const STATUS = require("./orderStatus");

function updateOrderStatus(currentStatus, newStatus) {
  // 安全校验：确保新状态是有效的 Symbol 值
  if (!Object.values(STATUS).includes(newStatus)) {
    throw new Error("Invalid order status 无效的订单状态");
  }

  // 仅允许合法的状态转换（示例逻辑）
  if (currentStatus === STATUS.PAID && newStatus !== STATUS.SHIPPED) {
    throw new Error(
      "Paid order must transition to shipped  已付订单必须过渡到已付订单"
    );
  }

  // 更新状态...
  console.log(
    `Order status updated to:订单状态更新为： ${newStatus.description}`
  );
}
// 调用示例
updateOrderStatus(STATUS.PENDING, STATUS.PAID); // 合法操作
updateOrderStatus(STATUS.PAID, "invalid_status"); // 抛出异常（字符串无法通过校验）

```

这样可以防止字符串误写影响，像这样：`updateStatus("paied")`写错 。
## 三、总结



 Symbol是一个es6的基本数据类型，为中大型项目而生，其实有关它的用法还很丰富，特别是访问方法那一块。这里推荐es6大佬阮一峰的讲解[Symbol - ECMAScript 6入门](https://es6.ruanyifeng.com/#docs/symbol)
