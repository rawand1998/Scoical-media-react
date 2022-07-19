import React ,{useContext,useEffect}from 'react'
import {Link} from 'react-router-dom'
import './Style.css'
import {AuthContetx} from '../../context/Auth'
import { useAuthState } from "react-firebase-hooks/auth"
import { auth,  } from "../../firebase/firebase";
function NavBar() {
  const {userName,userNames} = useContext(AuthContetx)
  console.log(userNames,"usernames")
  // const [user] = useAuthState(auth);
  // const users = auth.currentUser
  // console.log(users.uid,"users")
  useEffect(()=>{
    userName()
  },[])
  return (
    <div className="nav-container">
      <h1>Soical Media</h1>
      <div className="nav">
        {/* <p>{name}</p> */}
        {userNames.map((item)=>
        <p>{item.name}</p>)}
        <Link to='/login' className="list">Login</Link>
        <Link to='/profile' className="list">Profile</Link>
        </div>
    </div>
  )
}

export default NavBar