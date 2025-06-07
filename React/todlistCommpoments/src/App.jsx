import { useState } from 'react'
import './App.css'
import TodoList from './components/TodoList'

function App() {
 const [list,setlist] = useState([]);

 return (
  <>
    <TodoList/>
  </>
 )
}

export default App
