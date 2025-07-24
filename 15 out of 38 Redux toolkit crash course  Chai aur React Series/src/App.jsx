import { useState } from 'react'
import './App.css'
import { AddTodo } from './components/AddTodo.jsx'
import { Todos } from './components/Todos.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>SABED</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
