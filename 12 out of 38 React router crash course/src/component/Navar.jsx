import React from 'react'
import { Link } from 'react-router-dom'

function Navar() {
  return (
    <div>
        <nav>
           <Link to='/'><li>Home</li></Link>
           <Link to='/about'><li>About</li></Link>
           <Link to='/contact'><li>Contact</li></Link>
        </nav>
    </div>
  )
}

export default Navar