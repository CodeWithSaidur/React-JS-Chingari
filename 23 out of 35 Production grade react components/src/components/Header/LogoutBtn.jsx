import React from 'react'
import { useDispatch } from 'react-redux'
import { AuthService } from '../../appwrite/auth.service.js'
import { logout } from '../../store/authSlice.js'

function LogoutBtn() {
  const dispatch = useDispatch()

  const logoutHandler = async () => {
    const authService = new AuthService()
    try {
      await authService.logout().then(() => {
        dispatch(logout())
      })
    } catch (error) {
      console.error('Logout failed:', error.message)
    }
  }

  return (
    <button
      onClick={logoutHandler}
      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors">
      Logout
    </button>
  )
}

export default LogoutBtn
