import { useState, useEffect } from 'react'
import './App.css'
import { TodoProvider } from './contexts/TodoContext.js'
import TodoForm from './components/TodoForm.jsx'
import TodoItem from './components/TodoItem.jsx'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = todo => {
    setTodos(prev => [{ id: Date.now(), ...todo }, ...prev])
  }

  const updateTodo = (id, updatedTodo) => {
    setTodos(prev =>
      prev.map(todo => (todo.id === id ? updatedTodo : todo))
    )
  }

  const deleteTodo = id => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  const statusTodo = id => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    )
  }

  // Load from localStorage on first render
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'))
    if (storedTodos?.length) {
      setTodos(storedTodos)
    }
  }, [])

  // Save to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider
      value={{ addTodo, updateTodo, deleteTodo, statusTodo, todos }}>
      <div className="bg-[#0b111a] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map(todo => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
