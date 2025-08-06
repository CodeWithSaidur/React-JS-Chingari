import React, { act } from 'react'
import { Logo, Container, LogoutBtn } from '../index.js'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux' // for accessing Redux state
import { useNavigate } from 'react-router-dom'

function Header() {
  // accessing auth status from Redux store
  const authStatus = useSelector(state => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: '/',
      active: true // from where its being set?
    },
    {
      name: 'Login',
      slug: '/login',
      active: !authStatus // if not logged in, show Login
    },
    {
      name: 'SignUp',
      slug: '/signup',
      active: !authStatus
    },
    {
      name: 'All Posts',
      slug: '/all-posts',
      active: authStatus
    }
  ]

  return (
    <header className="py-3 shadow bg-gray-500 rounded-2xl m-3">
      <Container>
        <nav className="flex">
          <div className="mr-4">
            <Link to="/">
              <Logo width="70px" />
            </Link>
          </div>

          <ul className="flex ml-auto">
            {navItems.map(item =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 hover:text-blue-600 rounded-full">
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header
