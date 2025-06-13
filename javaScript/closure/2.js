function curry(fn) {
  return function curried(...args) {
    // 参数数量足够时直接执行原函数
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    // 参数不足时返回新函数继续收集参数
    else {
      return function (...nextArgs) {
        return curried.apply(this, args.concat(nextArgs));
      };
    }
  };
}
