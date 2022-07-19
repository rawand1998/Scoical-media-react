import React ,{useContext,useEffect}from 'react'
import {Link,useNavigate} from 'react-router-dom'
import './Style.css'
import {AuthContetx} from '../../context/Auth'
import { useAuthState } from "react-firebase-hooks/auth"
import { auth,  } from "../../firebase/firebase";
import Logout from '../Logout/Logout'
function NavBar() {
  const {userName,userNames,users} = useContext(AuthContetx)
  console.log(userNames,"usernames")
  const navigate=useNavigate()
  useEffect(()=>{
    userName()
  },[])
  const profile = (id)=>{
    navigate(`/profile/${id}`)
  }
  return (
    <div className="nav-container">
      <h1>Soical Media</h1>
      <div className="nav">
        {/* <p>{name}</p> */}
        {userNames.map((item)=>
        <p  onClick={()=>profile(item.uid)}>{item.name}</p>)}
        {users ?  <Link to="/" className="list">
          <Logout />
        </Link> :  <Link  className="list" to='/login'>Login</Link> }
      
        <Link to='/profile' className="list">Profile</Link>
        </div>
    </div>
  )
}

export default NavBar