import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice.js'

export const AddTodo = () => {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const addTodoHandeler = e => {
    e.preventDefault()
    if (input.trim() === '') return
    dispatch(addTodo(input))
    setInput('')
  }

  return (
    <form onSubmit={addTodoHandeler}>
      <input
        type="text"
        placeholder="Enter todo..."
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  )
}
