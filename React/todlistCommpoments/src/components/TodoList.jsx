import '../Todo.css' 
import TodoForm from './TodoForm'
import { useState } from 'react'
import Todos from './Todos'
function TodoList(){
 // 数据驱动的页面
    // 静态页面 ？===> 数组的map(``).join()-->innerHTML  底层的api编程
    // 面向业务 组件化 
    // 缺点 低效 面向API
    // 面向业务，懂业务
    // 数据 -> 变化 -> 数据状态-->自动刷新页面-->**数据**驱动界面
   // 返回数组 ，第一项是数据变量 ， 第二项是函数 执行 ，并传入新的todos 
   // 页面会自动更新
   // 挂载点
   // {todos.map()}
   // setTodos 更新数据 DOM及动态更新 
   // 响应式页面开发
   const [title,setTitle] = useState('TodoList');
   const [hi,sethi] = useState('hhhh');// 返回 [hhhh,f] setHi 修改数据状态的方法
   const [todos,setTodos] = useState([
   {
     id:1,
     text:'吃饭',
     completed:false
   }
  ]);
  const handleAdd = (text) =>{
    setTodos([
      ...todos,
      {
        id: todos.length+1,
        text,
        completed:false
      }
    ])
  }
  
 
//  setTimeout(()=>{
//    setTodos([
//      ...todos,
//      {
//        id:2,
//        text:"睡觉",
//        completed:false
//      }
     
//      // 更新业务只要 setTodo,setTitle
//    ])
//  },3000)
  return (
   <>
   {/* // 表单 */}
    <TodoForm onAdd = {handleAdd}/>
    {/* 列表 */}
    <h1 className='title'> {title} </h1>
    <Todos todos={todos} />
   </>
  )
}



export default TodoList;