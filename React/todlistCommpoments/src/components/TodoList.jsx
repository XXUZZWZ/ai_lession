import '../Todo.css' 
import TodoForm from './TodoForm'
import Todos from './Todos'
function TodoList(){
  return (
    <div className='container'>
      <h1 className='title'>
        <TodoForm/>
        <Todos/>
      </h1>
    </div>
  )
}



export default TodoList;