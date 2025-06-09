import '../Todo.css' 
import TodoForm from './TodoForm'
import { useState } from 'react'
import Todos from './Todos'
import Completed from './Completed'
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
  const handleCommplete = (todo) =>{
    setTodos(todos
      .map(t =>{
      if(t.id === todo.id){
        return{...t,completed:!t.completed}
      }else{
        return t;
      }
    }))
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
   <div className="forest-container">
     <h1>🌲 待办清单</h1>
     <TodoForm onAdd={handleAdd}/>
     <div className="lists-wrapper">
       <div className="active-list">
         <h1>进行中 🌱</h1>
         <Todos todos={todos} onCompleted={handleCommplete}/>
       </div>
       <div className="completed-list">
         <h1>已完成 🌳</h1>
         <Completed todos={todos} onCompleted={handleCommplete}/>
       </div>
     </div>
   </div>
   )
}



export default TodoList;