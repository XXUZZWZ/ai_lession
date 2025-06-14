function curryV3(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    const storedArgs = args.slice();
    return function (...nextArgs) {
      const combinedArgs = storedArgs.concat(nextArgs);
      return curried.apply(this, combinedArgs);
    };
  };
}
