// NaN not a number
// parseInt() 解析一个字符串并返回指定基数的十进制整数， radix 是 2-36 之间的整数，表示 radix 进制数。
// input输入----转成---->number------>radix进制数 
// forEach              
const n = [1,2,3].map(parseInt);
// 传给 parseInt 的参数依次是：1，0 ，[1,2,3]    2，1，[1,2,3]    3，2，[1,2,3]
// 返回的结果是 1，NaN，NaN
//返回新数组 
console.log(n);
// [ 1, NaN, NaN ]
console.log(parseInt(1,0 ,[1,2,3] ));
console.log(parseInt(2,1 ,[1,2,3] ));
console.log(parseInt(3,2 ,[1,2,3] ));
/**
 * radix 从 2 到 36 的整数，表示进制的基数。例如指定 16 表示被解析值是十六进制数。如果超出这个范围，将返回 NaN
 */

   