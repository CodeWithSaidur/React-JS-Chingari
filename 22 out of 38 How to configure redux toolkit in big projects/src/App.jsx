// App.jsx
import './App.css'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { authService } from './appwrite/auth.service.js'
import { login, logout } from './store/authSlice.js'
import { Footer, Header } from './components/index.js'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService
      .getCurrentUser()
      .then(user => {
        if (user) {
          dispatch(login({ userData }))
        } else {
          dispatch(logout())
        }
      })
      .catch(() => {
        dispatch(logout())
      })
      .finally(() => setLoading(false))
  }, [])
  return !loading ? (
    <div>
      <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
        <div className="w-full block">
          <Header />
          <main>
            {/* outlet */}cds
          </main>
          <Footer />
        </div>
      </div>
    </div>
  ) : null
}

export default App
