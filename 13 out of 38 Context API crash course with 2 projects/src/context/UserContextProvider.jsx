// Provider conteext wrap the components

import { useState } from 'react'
import { UserContext } from './UserContext.js'

export const UserContextProvider = ({ children }) => {
  const [user, SetUser] = useState(null)

  return (
    <UserContext.Provider value={{ user, SetUser }}>
      {children}
    </UserContext.Provider>
  )
}
