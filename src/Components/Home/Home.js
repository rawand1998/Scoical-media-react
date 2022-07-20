import React ,{useContext}from 'react'
import PostInput from '../Posts/PostInput'
import CommentInput from '../Comments/CommentInput'
import Likes from '../Likes/Likes'
import Posts from '../Posts/Posts';
import NavBar from '../NavBar/NavBar'
import Login from '../Auth/Login/Login';
import { useAuthState } from "react-firebase-hooks/auth"
import { auth,  } from "../../firebase/firebase";
import {AuthContetx} from '../../context/Auth'
function Home() {
const {users} = useContext(AuthContetx)
  return (
    <div>
 {users ? 
 <div>
      <NavBar />
      <PostInput />
      <Posts />
      </div>
 : <Login />}
   

    
        
    </div>
  )
}

export default Home