let a = "1111111111111111111111111111111111111111111111111111";
// console.log(a + 1);
const bigNum = 9007199254740991n + 1n;
console.log(bigNum); // 9007199254740992n（精确表示）
// const bigNum1 = 9007199999999911n + 1;
// TypeError: Cannot mix BigInt and other types, use explicit conversions

// bigint 声明 ，函数声明；
// bigint 是简单数据类型
// const bigNum11 = new BigInt("111111111111111")
/**
 * 会报错，因为BigInt是简单数据类型 
 * 
 * const bigNum11 = new BigInt("111111111111111")
                 ^
TypeError: BigInt is not a constructor
 * 
 */
const theNum = BigInt("11111111111111111111111111");
