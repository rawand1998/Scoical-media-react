import React from 'react'
import { auth } from '../../firebase/firebase'
function Logout() {
    const logout = ()=>{
        auth.signOut()
    }
  return (
    <div>
        <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Logout