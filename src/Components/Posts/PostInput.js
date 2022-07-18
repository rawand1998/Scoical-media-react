import React,{useState,useContext} from 'react'
import {AuthContetx} from '../../context/Auth'
import './Style.css'
function PostInput() {
    const [text,setText] =useState('')
    const {AddPost} = useContext(AuthContetx)
    const AddPosts=()=>{
        // check login
        AddPost(text)
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