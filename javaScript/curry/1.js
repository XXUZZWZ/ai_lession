function add(a, b, c, d) {
  return a + b + c + d;
}
function curry(fn) {
  const nowArg = [];
  return function curried(newArg) {
    nowArg.push(newArg);
    if (nowArg.length === fn.length) {
      return fn(...nowArg);
    } else {
      return curried;
    }
  };
}
const addCurry = curry(add);
console.log(addCurry(1)(2)(3)(4));
