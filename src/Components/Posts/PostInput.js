import React,{useState,useContext} from 'react'
import {AuthContetx} from '../../context/Auth'

function PostInput() {
    const [text,setText] =useState('')
    const {AddPost} = useContext(AuthContetx)
    const AddPosts=()=>{
        // check login
        AddPost(text)
    }
  return (
    <div>PostInput
        <input value={text} onChange={(e)=>setText(e.target.value)} 
        />
        <button type="submit" onClick={AddPosts}>ADD</button>
    </div>
  )
}

export default PostInput