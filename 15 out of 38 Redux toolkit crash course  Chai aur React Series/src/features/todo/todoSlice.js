import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
  todos: [
    {
      id: 1,
      title: 'Learn Redux Toolkit',
      completed: false
    }
  ]
}

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        title: action.payload,
        completed: false
      }
      state.todos.push(todo)
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(
        todo => todo.id !== action.payload
      )
    }
  },

  updateTodo: (state, action) => {
    const { id, title } = action.payload
    const existingTodo = state.todos.find(todo => todo.id === id)
    if (existingTodo) {
      existingTodo.title = title
    }
  },

  deleteTodo: (state, action) => {
    state.todos = state.todos.filter(
      todo => todo.id !== action.payload
    )
  }
})

export const { addTodo, removeTodo, updateTodo, deleteTodo } =
  todoSlice.actions

// export default todoSlice.reducer 
export const todoReducer = todoSlice.reducer
