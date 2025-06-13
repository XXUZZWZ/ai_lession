function add(a, b, c) {
  return a + b + c;
}
add(1, 2, 3);

// 柯里化是一个函数转换的过程，将一个多参数的函数转换成一个单参数的函数，单参数的函数返回一个多参数的函数。
function curry(fn) {
  // fn 是参数 闭包中的自由变量 词法定义环境
  // curry 函数包装fn去慢慢搜集参数
  // ... args 所有的参数 自由变量
  let judge = (...args) => {
    // 任何地方都可以访问到定义的fn
    if (args.length >= fn.length) {
      // 递归的退出条件
      return fn(...args);
    } else {
      return (...newArgs) => judge(...args, ...newArgs);
    }
  };
  return judge;
}

const addCurry = curry(add);
//  逐步的去获取函数需要的参数，当到达fn 需要的参数数量时，执行结果
console.log(addCurry(1)(2)(3)(6));
