# promise

- cpu 轮询
- 同步任务
  和代码编写顺序一样
- 异步任务
  在同步代码之后执行
  比较花时间的任务要搞成异步任务
- 有个需求
  111 输出放后面
  控制执行的顺序

## Promise 的底层原理

- 画个饼 饼里有一个参数
- 异步任务需要时间，如果不管会跳到后面执行
- 代码可读性不好,代码编写顺序和执行顺序不一致
- const p = new Promise(fn)
  prototype
  类，专门解决异步问题，里面包含 then 方法，
- fn 里面 的异步任务做完了，resolve()
- 怕。p.then(()=>{
  就可以运行
  })
  我们要把任务放到 then 里就可以把执行的流程交给 resolve 来处理

## **控制执行流程**的 es6 套路

- new Promise() // 请 Promise 控制异步流程是专业的
- (resolve)=>{
  executor 耗时性的异步任务
  异步任务 setTimeout readFile fetch
  }
  resovle() 完成后 then 函数执行

- promise .then 升级到 async await
  async 用于修饰函数 ，函数里面有异步任务
  函数里面可以用
  await 等待 异步任务完成 ，异步变同步
