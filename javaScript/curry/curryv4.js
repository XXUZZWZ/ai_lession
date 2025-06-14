function curryV4(fn) {
  return function curried(...args) {
    // 检查参数是否足够且无占位符
    const ready =
      args.length >= fn.length && !args.includes(curryV4.placeholder);
    if (ready) return fn.apply(this, args);
    return function (...nextArgs) {
      // 替换占位符
      const mergedArgs = args
        .map((arg) =>
          arg === curryV4.placeholder && nextArgs.length
            ? nextArgs.shift()
            : arg
        )
        .concat(nextArgs);
      return curried.apply(this, mergedArgs);
    };
  };
}
curryV4.placeholder = Symbol("PLACEHOLDER");
