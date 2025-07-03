# Storage 储存

- 前端存储
  - cookie
    - 登陆状态
    - 购物车
  - localstorage
  - sessionstorage
  - indexDB
- 后端储存

  - MySQL
  - MongoDB

- 缓存

## 首页

- 用户的登陆状态

  - cookie
  - 服务器要识别用户
  - b/s 架构 基于 http 协议
  - http 0.9 版本
  - http 是无状态协议
    请求一次和无数次都是一样的响应结果都是一样的
    身份状态？？？？ 怎么记录，谁来都拿一样的
  - http 1.0 正式版
    才有请求头
    Content-Type
    Authorization
    Cookie uid = 124342424 唯一的标识符
  - 用户带上 cookie，服务器解析 就能了解到用户身份，登陆状态。
    http 协议还是无状态的，还是保存不了会话
    请求头可以夹带私货
  - 登录界面有哪些状态
    - 未登录
    - 已登陆 会显示 用户身份 时间 会过期 主动登出

- 前后端联调
  - 前端负责表单
    阻止默认行为
    收集表单值
    fetch 请求 await 等待服务器端响应请求
    POST /login api 地址 接口地址 前后端接口地址
    后端
    后端建立路由 /login
    用户名和密码校验
    通过设置 cookie 响应给前端,设置在响应头中的 set-cookie 字段
    服务器的返回 http 响应 一起回到用户端
    前端存储里的 cookie 有了内容

## cookie

Cookie 是浏览器存储数据的小文本文件，用于跟踪用户会话和偏好。

- 每次访问时自动带上 cookie 信息
- cookie (内容小)，身份的关键信息，存储在浏览器中(某个位置里)
- http 本身是无状态的 ，每次请求独立，它是通过携带请求头中携带 cookie 信息，
  来实现身份认证。
