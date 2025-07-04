# AI 单词拍照移动应用

- mobile App
- css reset
- 组件思维

  - 功能逻辑划分 图片上传
  - App 就是根组件
    - PictureCard 子组件
    - 组件通信
      - 父组件负责持有状态
      - 父组件 api 请求
      - 子组件消费数据
      - state（私有状态） props（外界传入的状态） 都是数据 ，只是身份不同
      - 通过回调函数通知父组件，父组件修改状态

- 目录结构
  - src /开发目录
  - components /组件目录
  - public /静态资源目录
  - .env.local /环境变量
