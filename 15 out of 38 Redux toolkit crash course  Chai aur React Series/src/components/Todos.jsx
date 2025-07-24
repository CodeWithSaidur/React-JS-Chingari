import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice.js'

export const Todos = () => {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()

  return (
    <div>
      <h2>Todos</h2>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.title}
            <button onClick={() => dispatch(removeTodo(todo.id))}>
              Remove
            </button>

            <button
              onClick={() =>
                dispatch(
                  updateTodo({
                    id: todo.id,
                    title: prompt('Update todo:', todo.title)
                  })
                )
              }>
              Update
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
