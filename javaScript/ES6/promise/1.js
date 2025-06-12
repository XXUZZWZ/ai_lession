// 读取 1.html 里面的内容

// 读取完后 打印 读完了

const fs = require("fs"); // 引入js内置文件模块

console.log("1111");

// 先打印 1111

const readFilePromise = new Promise((resolve) => {
  fs.readFile("./1.html", (err, data) => {
    console.log(data.toString());
    resolve();
  });
});

readFilePromise.then(() => {
  console.log("1111");
});
