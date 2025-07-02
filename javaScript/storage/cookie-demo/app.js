// es6 模块化
// mjs 后缀使用es6模块化
// 模块化是语言的能力
// node.js 默认不支持es6模块化
// 之前只能用mjs后缀
// 但是在v22.16.0已经支持了
// node 准备和commonjs 告别
// es module 更先进
import http from "http";

const sever = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, World! http://localhost:1234\n");
});
// http://localhost 默认是80端口
sever.listen(1234);
