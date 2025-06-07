function Todos(props){
  // 父子组件传参
  const todos = props.todos;
  
  console.log('//////');
  return (
   
    <ul>
    {
        todos.map(todo =>(
         <li key = {todo.id}>{todo.text}</li>
       ))
     }
    </ul>
    
  )
}


export default Todos;