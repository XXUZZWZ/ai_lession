const sym = Symbol();
const sym1 = Symbol();
const sym2 = Symbol("desc"); //label标签
console.log(typeof sym, sym);
console.log(sym === sym1, sym2);
// Symbol用于对象key的创建
// 使用symbol构造函数实例化，一个标记为id 的唯一值ID
// ID唯一性 Symbol
const ID = Symbol("id");
// es6之前key 是string
// symbol 作为key
// 当我们在大厂。如果我们要去修改别人代码的对象
// 对象动态的，不希望出错，
// 我们可以不影响之前的代码实现添加。
//非侵入性代码
const age = Symbol("age");
const user = {
  name: "Alice",
  [ID]: 123, //[]的意思是取唯一值
};
user[age] = 18;
// 我们可以在不影响原来数据结构下新增成员变量通过obj[age]访问
console.log(user.name, user[ID], user[age]);

for (let key in user) {
  console.log(`这是key  ${key} --- `); // 
}
