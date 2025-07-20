import { useContext } from 'react'
import { UserContext } from '../context/UserContext.js'

export const Profile = () => {
  const { user } = useContext(UserContext)
  if (!user) return <div>Plese Login</div>

  return (
    <div>
      <h1>PROFILE</h1>
      <h1>Welcome {user.username}</h1>
    </div>
  )
}
