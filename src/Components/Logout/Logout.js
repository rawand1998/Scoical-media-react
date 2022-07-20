import React from 'react'
import { auth } from '../../firebase/firebase'
import './Style.css'
function Logout() {
    const logout = ()=>{
        auth.signOut()
    }
  return (
    <div className="logout-container">
        <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Logout