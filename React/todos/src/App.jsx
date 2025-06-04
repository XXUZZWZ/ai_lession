import { useState } from 'react'
import './App.css'
// todos 列表需要渲染的组件
// 函数组件 App组件 
// 返回html的函数 
// html css js 用函数组合在一起，叫组件。
function App() {
 const [todos,setTodos] = useState( ['吃饭','睡觉','打豆豆']) //数组 ---> 数据状态  数据业务
 const [title,setTitle] = useState("ECUT 名人");


 setTimeout( 
  ()=>{
   setTodos(['吃饭','打豆豆','养鱼'])
   setTitle('字节 一明')
  }
 ,3000)
  return (
    <>
     <h1 className='fz-title'>{title}</h1>
     <table className='fz-table'>
      <thead><tr>
        <th>序号</th>
        <th>任务</th>
        </tr></thead>
      <tbody>
        {/* // 
        // 在html里写js代码
        // **花括号{}**是JSX语法中的JavaScript表达式嵌入标识符
        // 外层花括号 ：表示JSX内的JavaScript执行环境 */}
        {
          todos.map((item,index) =>
          (
            <tr> 
          <td>{index+1}</td>
          <td>{item}</td>
          {/* // 内层花括号 ：在JSX元素内部插入动态值 */}
          </tr>
          )
          // 括号 () 用于箭头函数隐式返回JSX对象
          )
        }
        {
            todos.map((item,index)=>(
              <tr>
                <td>{index+1}</td>
                <td>{item}</td>
              </tr>
            ))

        }
      </tbody>
     </table>
    </>
  )
}

export default App

/***
 * // ✅ 正确用法：括号包裹返回的JSX元素
todos.map((item,index) => (
  <tr> 
    <td>{index+1}</td>
    <td>{item}</td>
  </tr>
))

// ❌ 错误用法：模板字符串会返回字符串而非JSX元素
todos.map((item,index) => `
  <tr> 
    <td>${index+1}</td>
    <td>${item}</td>
  </tr>
`)
 */