/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const mp = {};
  function f(n) {
    if (n <= 2) return n;
    if (mp[n]) return mp[n];
    mp[n] = f(n - 1) + f(n - 2);
    return mp[n];
  }
  return f(n);
};
