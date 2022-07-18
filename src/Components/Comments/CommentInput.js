import React,{useState,useContext} from 'react'
import {AuthContetx} from '../../context/Auth'

function CommentInput({postId}) {
    const [comment,setComment] =useState('')
  
    const {AddComments} = useContext(AuthContetx)
    const AddComment=()=>{
        // check login
        AddComments(comment,postId)
    }
  return (
    <div>comment
        <input value={comment} onChange={(e)=>setComment(e.target.value)} 
        />
        <button type="submit" onClick={AddComment}>ADD comment</button>
    </div>
  )
}

export default CommentInput