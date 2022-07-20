import React,{useState,useEffect,useContext} from 'react'
import { auth, db } from "../../firebase/firebase";
import {useParams} from 'react-router-dom'
import {AuthContetx} from '../../context/Auth'
import CommentInput from '../Comments/CommentInput'
import {useNavigate} from 'react-router-dom'
function Profile() {
    const userIdfromParam = useParams()

const {userProfile,profile}= useContext(AuthContetx)
console.log(profile,"profile")
const navigate=useNavigate()
const [show,setShow] = useState(false)
    useEffect(()=>{
        userProfile(userIdfromParam)
    },[])
    const showComment= (id)=>{
        setShow(true)
        navigate(`/comment/${id}`)
    }
  return (
    // <div>
    //     {profile.map((item)=>
    //     <h1>{item.text}</h1>)}
    // </div>


<div>
        <div>
    
      {profile.map((item)=>
      
      <div className="dispaly-post-container">
        <div>
          <div className="post-data">
            <img src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"/>
        <p className="post-userName">{item.name}</p>
        </div>
        <p key={item.id}className="post-text">{item.text}</p>
       
        </div>
        <div className="show-comment">
            <CommentInput postId={item.id} className="comment-input"/>
            <button onClick={()=>showComment(item.id)} className="show-comment-btn">show comments
            </button>
          
        </div>
        </div>
      )}
      </div>
       
    </div>
  )
}

export default Profile