import React,{useState,useContext} from 'react'
import {AuthContetx} from '../../context/Auth'
import './Style.css'
import { auth,  } from "../../firebase/firebase";
function PostInput() {
    const [text,setText] =useState('')
    const users = auth.currentUser
    const {AddPost} = useContext(AuthContetx)
    const AddPosts=()=>{
        // check login
        if(users.uid){
          AddPost(text)
        }else{
          alert("Please login")
        }
       
    }
  return (
    <div className="post-container">
        <input value={text} onChange={(e)=>setText(e.target.value)} 
        placeholder="Add new post" className="input"
        />
        <a type="submit" onClick={AddPosts}>Add post</a>
    </div>
  )
}

export default PostInput