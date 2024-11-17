

import { useState } from 'react'
import AddTodo from './components/AddTodo'
import Headers from './components/Headers'
import Todolist from './components/Todolist'
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [todos, setTodos] = useState([])
  let id = uuidv4();
  

  return (
    <div className='bg-black h-screen w-[100vw]'>
      <Headers/>
      <AddTodo setTodos={setTodos} todos={todos} id={id}/>
      <Todolist todos={todos} setTodos={setTodos}/>
    </div>
  )
}

export default App
