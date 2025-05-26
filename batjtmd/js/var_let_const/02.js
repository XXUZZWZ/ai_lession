const arr = ["1", "2", "3"];
console.log(typeof arr);
const date = new Date();
console.log(typeof date);
// 如何区分Object 的这些类型？
console.log(Object.prototype.toString.call(arr));
console.log(Object.prototype.toString.call(date));

function getvauleOfType(vaule) {
  //   let str = Object.prototype.toString.call(vaule);
  //   let res = '';
  //   str.split("");
  //   for (let i = 8; i < str.length - 1; i++) {
  //     res+=str[i];
  //   }

  //   console.log(res);
  //   return res;
  // api写法
  return Object.prototype.toString.call(vaule).slice(8, -1);
}
console.log(getvauleOfType(arr));
