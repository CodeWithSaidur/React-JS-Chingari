import { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext.js'

export const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const { SetUser } = useContext(UserContext)

  const handleSubmit = e => {
    e.preventDefault()
    SetUser({ username, password })
  }

  return (
    <div>
      <h1>Login</h1>
      <input
        value={username}
        onChange={e => setUsername(e.target.value)}
        type="text"
        placeholder="Username"
      />
      <input
        value={password}
        onChange={e => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
      />
      <button onClick={handleSubmit}>Login</button>
    </div>
  )
}
