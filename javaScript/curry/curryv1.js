function curryV1(fn) {
  const collectedArgs = [];
  return function curried(arg) {
    collectedArgs.push(arg);
    if (collectedArgs.length === fn.length) {
      return fn(...collectedArgs);
    } else {
      return curried;
    }
  };
}
