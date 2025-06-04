# 别再背面经啦，一文告诉你为啥要有虚拟Dom

## 一、面经里的说法为啥不够好？

------

面经里说可能会说,是因为虚拟Dom能提高效率。它说的对吗？对也不对，因为为啥虚拟Dom能提高效率，明明直接操作真实Dom绝对效率更高。因为React和Vue的最小组成单位还是太大了，Vue组件内发生变化，这个组件的所有的DOM都要发生改变，而react的最小组成单位一个基本都是一个页面了，需要操作的真实Dom更多。于是就有了虚拟Dom；当要渲染的数据发生变化，就把这次的变化存到js对象的虚拟Dom里并和之前的一次存的虚拟Dom比较,只改变找的变动的虚拟Dom节点。然后改变这些找到变动的虚拟Dom节点对应的真实Dom然后改变它。这样说面经里的那句话才完整，意义才明晰。

------



## 二、为啥原生DOM操作一定比虚拟DOM快?

------

​	首先原生js操作Dom直接可以通过document.getElementById()直接改变。

​	像Vue和React生成的虚拟DOM还要前后对比，用diff，picth算法这些都是会耗费性能的，甚至最后不一定能找准真实DOM节点，可	能会找出比实际需要更多的DOM节点。所以一定比原生DOM慢。

------



## 三、为啥要有虚拟DOM?

------



### 	一、Vue和React是为了实现数据驱动而生的框架

------

​		其实如果我们没有动态的数据，只有简单的页面和event（早期切图崽生存环境，据说当年做后端的也做切图），我们完全可以通		过html、css库和js来快速开发。但是呢，后来因为要变化的数据越来越多，就有了Vue和React框架来加速开发。

​		举个例子如果我们要渲染一个这样的表格。

​	![image-20250604010029026](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20250604010029026.png)

​	包含以下数据

​	

```javascript
    const friends = [
            {
             name: "李宏伟",
              hometown:"京海莽村"
            },
            {
              name:"高启强",
              hometown:"京海旧厂街"
            },
            {
              name:"安欣",
              hometown:"京海旧厂街"
            }
          ]
```



​	让我们看看原生js,vue,和React的实现区别：

​	原生js写法

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>原生js</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4Q6Gf2aSP4eDXB8Miphtr37CMZZQ5oXLH2yaXMJ2w8e2ZtHTl7GptT4jmndRuHDT" crossorigin="anonymous">
</head>
<body>
  <div class="container">
    <!-- 挂载点 -->
   <table id="friends" class="table table-striped">
    <thead>
      <tr>
        <th>姓名</th>
        <th>家乡</th>
      </tr>
    </thead>
      <tbody>
      <tr>
        <td>李宏伟</td>
        <td>抚州</td>
      </tr>
   </table>
  </div>
  <script>
    const oBody = document.querySelector('#friends tbody'); // 能不能找到挂载点后的事情交给框架去做
    const friends = [
            {
             name: "李宏伟",
              hometown:"京海莽村"
            },
            {
              name:"高启强",
              hometown:"京海旧厂街"
            },
            {
              name:"安欣",
              hometown:"京海旧厂街"
            }
          ]
    oBody.innerHTML = friends.map(item=>
       `
      <tr>
      <td>${item.name}  </td>
      <td>${item.hometown}</td>
      </tr>
      `
    ).join('');
    // map返回的是一个数组，如果不用join,这里用加法会蕴含默认的数组对象转化成字符串 ""+[1,2,3] = '1,2,3',默认用逗号分隔,自动调用toString方法。
    // 所以这里用join('') 把数组转化成字符串。
    

  </script>
</body>
</html>
```

我们可以看到我们是通过字符串拼接来讲数据放入html页面中，讲真我感觉比react好写（主要是以前可能没有模板字符串，要不然感觉很多框架没必要）。

ok再来看看vue2怎么写的：

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>用js框架</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4Q6Gf2aSP4eDXB8Miphtr37CMZZQ5oXLH2yaXMJ2w8e2ZtHTl7GptT4jmndRuHDT" crossorigin="anonymous">
</head>
<body>
  <div class="container" id = "app">
    <!-- 挂载点 -->
    
   <table id="friends" class="table table-striped">
    <thead>
      <tr>
        <th>姓名</th>
        <th>家乡</th>
      </tr>
    </thead>
    <!-- <tbody>//挂载点就是tbody的可变部分 -->
      <tbody>
      <tr>
        <tr v-for = "friend in friends">
          <td>{{friend.name}}</td>
          <td>{{friend.hometown}}</td>
        </tr>
      </tr>
    </tbody>
    <tfoot>
    </tfoot>
   </table>
  </div>
  <!-- // js应该放到body尾部，因为dom加载完了才能执行js，而且可以让界面先加载。 -->
  <script src="https://lf26-cdn-tos.bytecdntp.com/cdn/expire-1-M/vue/3.2.31/vue.global.min.js"></script>
  <script>
    //起手就是一个App
    const App = {
      // 声明数据的业务
      data(){
        return {

          friends:[
            {
             name: "李宏伟",
              hometown:"京海莽村"
            },
            {
              name:"高启强",
              hometown:"京海旧厂街"
            },
            {
              name:"安欣",
              hometown:"京海旧厂街"
            }
          ]
        }
      }
    }
    // 把App 变成一个vue实例，挂载到id为friends的元素上。
    Vue.createApp(App).mount('#app');// 选择id = app 的元素及其后代元素都可以访问到data中的数据。

  </script>
</body>
</html>
```

可以看到vue2还是兼容性比较好的，可以访问CDN简单的重构代码。

接着我们再来看看React写法：

```html
// index.html 
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <!-- 添加 Bootstrap CSS CDN -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React + TS</title>
  </head>
  <body>
    <div id="root"></div>
    <!-- 添加 Bootstrap JS CDN -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>

```

这里也能发现要使用bootstrap,要把link标签写在index.html里，App.jsx就可以顺利访问了。

```jsx
//App.jsx
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [firends, setFirends] = useState(
    [
      {
       name: "李宏伟",
        hometown:"京海莽村"
      },
      {
        name:"高启强",
        hometown:"京海旧厂街"
      },
      {
        name:"安欣",
        hometown:"京海旧厂街"
      }
    ]
  )

  return (
    <>
     <table className="table table-striped table-hover">
      <thead className="table-dark">
        <tr>
          <th>姓名</th>
          <th>家乡</th>
        </tr>
      </thead>
      <tbody>
        {
          firends.map((item,index) => (
            <tr key={index}>
              <td className="text-start">{item.name}</td>
              <td className="text-info">{item.hometown}</td>
            </tr>
          ))
        }
      </tbody>
     </table>
    </>
  )
}

export default App

```



实话实说，感觉不出React哪里比原生nb。	

------


#### 小总结

这些框架其实大同小异，目的都是设计了一套可以在html里直接访问到数据的方法，vue2是用	{{变量名}}来访问，React用{变量名}

访问，还有的像我在学校学的超老jsp技术的目的就是用<%····java代码·····%>来实现写出交互效果。

------



### 	二、跨端解耦，不把代码和真实DOM绑死

------

另外虚拟dom的好处就是实现一次编写多端互用，不把代码和真实代码绑定死，让同一个代码可以多端互用，原理也不难理解。

就是把原来虚拟dom和web的真实dom的映射改为对移动端相关节点的映射就好了。

