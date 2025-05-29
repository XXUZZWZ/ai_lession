# 大数相加

- 高精度加法
- javascipt Number 类型，不分整数，浮点数，高精度···
  - javascipt 不适合计算 。
- 大数字：
  会出现边界问题
  Number.MAX_VALUE。
  Infinity
  -Infinity
- 字符串化
  从最后一位相加

- ES6 处理 BigInt
  js 默认 中安全 2^53 - 1 9007199254740991;
  因为用 IEEE745 编码
  IEEE 754 双精度存储结构：

总长度：64 位
符号位：1 位
指数部分：11 位（偏移量为 1023）
尾数部分（有效数字）：52 位
尾数部分隐含前导 1，因此实际有效数字为 53 位（即 2^53）。
Number.MAX_SAFE_INTEGER; // 9007199254740991
Number.MIN_SAFE_INTEGER; // -9007199254740991
