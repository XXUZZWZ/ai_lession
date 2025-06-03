/**
 * @param{number} num
 *  @param{number} total
 * @return {number[]}
 */

function hongbao(total, num) {
  const arr = [];
  let restAmount = parseFloat(total); //剩余金额
  let restnum = num; //剩余人数

  for (let i = 0; i < num - 1; i++) {
    // 最后一位哥们拿剩余的钱，简化代码
    const randomnum = parseFloat(
      (restAmount / (restnum * 2) + 0.01 * Math.random()).toFixed(2) //float.toFixed 包装类有一次体现
    );
    arr.push(randomnum);
    restAmount -= randomnum;
    restnum--;
  }
  arr.push(restAmount);
  return arr;
}

const arr = hongbao(30, 31);
let sum = parseFloat(0);
for (it of arr) {
  sum += it;
}
console.log(hongbao(31, 31), sum);
