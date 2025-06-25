# 流式输出

- 为啥会考这些题？
- LLM 聊天机器人(23 年)-->24 年推理--->25 年 AI Agent 年---> AI 产品
- 流式输出 用户体验，前端职责。

- 为何需要流式输出
- 更快看到响应 LLM API 方式提供给我们
  AIGC 生成的大模型 一个一个 token 输出 transform(google)
  “我是你的 assistant”，token 开销付费的
- 更快看到反应

- 前端的职责
  - 良好的用户体验
  - 尽快反馈结果
    障眼法 生成要花时间，我愿意等
    最懂用户的心理的
- 步骤
  - 前端能实现流式输出
    setTnterval() 异步 时间机制 message
  - 后端怎么实现呢？
    websocket 长连接
  - http 请求是基于请求响应式的简单协议
  - 关闭连接
  - http 2.0 版本支出 server push 服务端推送。

## 全栈能力

- npm init -y 创建一个 node 后端项目
- npm i express -S 安装 express 框架
