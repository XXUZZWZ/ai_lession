// 启动 http server
// 引入express 模块
// import express from "express";
// node 最初的模块common.js 的模块化方案
const express = require("express");

// console.log(express);
const app = express(); // 后端应用服务
// 得到一个应用实例

// res 是response 对象
// response 有请求req用户，浏览器proxy url localhost：1314 +get + path /
// http 足够简单 高并发 用户赶快走 希望用户尽快断开
// app.get 定义get 请求返回的结果
app.get("/", (req, res) => {
  // 返回index.html
  // res.send("hello"); //str
  res.sendFile(__dirname + "/index.html");
  // __dirname 这个是项目根目录路径
});
// 添加server push 的路由
app.get("/sse", (req, res) => {
  // 支持 server push  服务器要不断推送  少量的请求需要
  // 设置响应头
  res.set({
    //stream 文本流 ， 会触发事件
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache", // 禁止前端使用缓存
    Connection: "keep-alive", // 保持长久的连接
  });
  res.flushHeaders();
  setInterval(() => {
    const message = `Current Time is ${new Date().toLocaleTimeString()} `;
    // server push 服务器端推送
    res.write(`data: ${message}\n\n`);
  }, 1000);
});

console.log(__dirname);
const http = require("http").Server(app); //server 基本服务 B/S架构

// node 内置模块
// 监听？伺服状态 伺候用户
http.listen(1314, () => {
  console.log(" app run on  http://localhost:1314");
});
