/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  res = new Array(numRows);
  res.push([1]);
  if (numRows >= 2) res.push([1, 1]);
  if (numRows >= 3) {
    for (let i = 3; i <= numRows; i++) {
      arr = new Array(i);
      arr[0] = 1;
      for (let j = 1; j < i; j++) {
        arr[j] = res[i - 2][j - 1] + res[i - 2][j];
      }
      arr[i - 1] = 1;
      res.push(arr);
    }
  }

  return res;
};

console.log(generate(5));
