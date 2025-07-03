// node 后端
// node 内置的核心模块
// js在命令行运行
// 两种模块化方案
// 模块化方案
// 1.CommonJS require/module.exports
// 2.ES6  import/export 更先进的模块化方案
// old require 模块
// new import 模块
// node中小项目开发
// 端口 ---> 某个服务--->对应一个进程-->线程(代码执行)
//现在 占用1234和1235端口
// domain(localhost) --> ip地址(127.0.0.1)--> port(1234)某个服务或进程
// 一台端口只能启动一个进程
// 一个设备可以有多个端口多个网站
// 不要使用特殊端口
// const http = require("http");
// const fs = require("fs"); // filesystem
// const path = require("path"); // 路径模块
// const server = http.createServer((req, res) => {
//   // http 基于请求响应的协议
//   // 路由 Method + url 定位了服务器端的资源
//   // 为了资源的定位
//   if (req.method === "GET" && req.url === "/") {
//     fs.readFile(
//       path.join(__dirname, "public", "index.html"),
//       //前端体验为主，后端稳定为主
//       (err, content) => {
//         if (err) {
//           res.writeHead(500); //5xx 内部服务器错误
//           res.end('"Server Error");');
//           return;
//         }
//         // 不只是html,css,js ,jpg,二进制流
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.end(content);
//       }
//     );
//   }
// });
// server.listen(1235, () => {
//   console.log("Server is running at http://localhost:1235/");
// });
const http = require("http");
const fs = require("fs");
const path = require("path");
const WebSocket = require("ws");
const server = http.createServer((req, res) => {
  if (req.method === "GET" && (req.url === "/" || req.url == "/index.html")) {
    fs.readFile(
      path.join(__dirname, "public", "index.html"),
      (err, content) => {
        if (err) {
          res.writeHead(500);
          res.end("Server Error");
          return;
        }
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(content);
      }
    );
  }
  // 处理静态资源请求
  // http://localhost:1235/style.css?a=1&b=2
  // 协议 + 域名 + 端口 + 路径 + ?query + #hash
  if (req.method === "GET" && req.url === "/style.css") {
    fs.readFile(path.join(__dirname, "public", "style.css"), (err, content) => {
      if (err) {
        res.writeHead(500);
        res.end("Server Error");
        return;
      }
      res.writeHead(200, { "Content-Type": "text/css" });
      res.end(content);
    });
  }
  if (req.method === "GET" && req.url === "/script.js") {
    fs.readFile(path.join(__dirname, "public", "script.js"), (err, content) => {
      if (err) {
        res.writeHead(500);
        res.end("Server Error");
        return;
      }
      res.writeHead(200, { "Content-Type": "text/javascript" });
      res.end(content);
    });
  }
  if (req.method === "POST" && req.url === "/login") {
    // 用户名和密码的校验
    res.writeHead(200, {
      // 服务器端查询
      "set-cookie": "username=admin", // 设置cookie
      "Content-Type": "application/json",
    });
    res.end(
      JSON.stringify({
        code: 200,
        message: "登录成功",
      })
    );
  }
  if (req.method === "GET" && req.url === "/check-login") {
    console.log(req.headers.cookie); // 获取cookie
    if (req.headers.cookie) {
      res.writeHead(200, {
        "Content-Type": "application/json",
      });
      res.end(
        JSON.stringify({
          loggedIn: true,
          username: "admin",
        })
      );
    } else {
      res.writeHead(200, {
        "Content-Type": "application/json",
      });
      res.end(
        JSON.stringify({
          loggedIn: false,
        })
      );
    }
  }
  if (req.method === "GET" && req.url === "/logout") {
    res.writeHead(200, {
      "set-cookie": "username=; Max-Age=0", // 清除cookie
      "Content-Type": "application/json",
    });
    res.end(
      JSON.stringify({
        code: 200,
        message: "登出成功",
      })
    );
  }
});

// server.listen(1235, () => {
//   console.log("Server is running at http://localhost:1235/");
// });

// const wss = new WebSocket.Server({ server }); // 将 WebSocket 绑定到 HTTP 服务器上
// const clients = new Set(); // 保存所有连接的客户端

// wss.on("connection", (ws) => {
//   console.log("WebSocket client connected");
//   clients.add(ws);

//   ws.on("close", () => {
//     console.log("WebSocket client disconnected");
//     clients.delete(ws);
//   });
// });

// // 修改登录接口，添加 WebSocket 消息推送
// if (req.method === "POST" && req.url === "/login") {
//   res.writeHead(200, {
//     "set-cookie": "username=admin",
//     "Content-Type": "application/json",
//   });

//   const response = JSON.stringify({
//     code: 200,
//     message: "登录成功",
//   });

//   res.end(response);

//   // 通知所有连接的 WebSocket 客户端
//   clients.forEach((client) => {
//     if (client.readyState === WebSocket.OPEN) {
//       client.send(JSON.stringify({ type: "login" }));
//     }
//   });
// }

// // 修改登出接口，添加 WebSocket 消息推送
// if (req.method === "GET" && req.url === "/logout") {
//   res.writeHead(200, {
//     "set-cookie": "username=; Max-Age=0",
//     "Content-Type": "application/json",
//   });

//   const response = JSON.stringify({
//     code: 200,
//     message: "登出成功",
//   });

//   res.end(response);

//   // 通知所有连接的 WebSocket 客户端
//   clients.forEach((client) => {
//     if (client.readyState === WebSocket.OPEN) {
//       client.send(JSON.stringify({ type: "logout" }));
//     }
//   });
// }

server.listen(1235, () => {
  console.log("Server is running at http://localhost:1235/");
});
