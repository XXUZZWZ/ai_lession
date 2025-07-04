# React hook 编程

- useState

  - 非常好用的函数
    函数是一等对象(JS)
    函数还是类(原型式面向对象)
    函数也是组件 return jsx
  - 以 use 开头，函数式编程

- useEffect

  - 副作用

- 生命周期 lifecycle 函数

- mounted 挂载后 渲染完成
  只在渲染完成后执行，更新后不执行
- updated 更新后[]依赖项
- 卸载后的副作用？ unmounted

  - 定时器等会造成内存泄漏要回收，取消掉这些进程
  - 请求数据 卸载时，响应式数据和 dom 不在了，请求也取消。

- 组件应该在什么时候去请求接口?
  - 组件的第一时间渲染是最重要的，所以此时不能渲染。
  - 渲染完才考虑其他
    useEffect(() => {},[]) 去请求接口
    - 依赖项为[]
      其他组件状态不需要更新，不需要再次请求(一般的不会变的静态资源)
- ## useEffect 里面不能直接传入 async 函数
  - 都是可以再函数里里面写 async 函数的
  - callback 需要是 clear up function
