import React from 'react'
import { Container, Logo, LogoutBtn } from '../index.js'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export const Header = () => {
  const authStatus = useSelector(state => state.auth.status)
  const navigate = useNavigate()

  const navItem = [
    {
      name: 'Home',
      slug: '/',
      isActive: true
    },
    {
      name: 'Login',
      slug: '/login',
      isActive: !authStatus
    },
    {
      name: 'Signup',
      slug: '/signup',
      isActive: !authStatus
    },
    {
      name: 'All Posts',
      slug: '/all-Posts',
      isActive: authStatus
    },
    {
      name: 'Add Post',
      slug: '/add-post',
      isActive: authStatus
    }
  ]

  return (
    <header className="py-3 shadow bg-gray-500">
      <Container>
        <nav className="flex">
          <div className="mr-4">
            <Link to="/">
              <Logo width="70px" />
            </Link>
          </div>

          <ul className="flex ml-auto">
            {navItem.map(item =>
              item.isActive ? (
                <li key={item.slug} className="mx-2">
                  <Link
                    onClick={() => navigate(item.slug)}
                    to={item.slug}
                    className="text-white hover:text-gray-200 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ) : null
            )}
            {authStatus ? (
              <li className="mx-2">
                <LogoutBtn />
              </li>
            ) : null}
          </ul>
        </nav>
      </Container>
    </header>
  )
}
