function Todos(props){
  // 父子组件传参
  const todos = props.todos;
  
  const handleCommplete = (e, todo) => {  // 增加todo参数
    props.onCompleted(todo);  // 调用父组件回调
  }

  return (
    <ul>
      {todos.filter(todo => !todo.completed)  // 根据completed过滤
      .map(todo => (
        <li key={todo.id}>
          {todo.text}
          <input 
            type="checkbox" 
            checked={todo.completed}  // 使用props中的状态
            onChange={(e) => handleCommplete(e, todo)}  // 传递todo对象
          />
        </li>
      ))}
    </ul>
  )
}



export default Todos;