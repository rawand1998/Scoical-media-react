import React from 'react'
import {Link} from 'react-router-dom'
import './Style.css'
function NavBar() {
  return (
    <div className="nav-container">
      <h1>Soical Media</h1>
      <div className="nav">
        <Link to='/login' className="list">Login</Link>
        <Link to='/profile' className="list">Profile</Link>
        </div>
    </div>
  )
}

export default NavBar