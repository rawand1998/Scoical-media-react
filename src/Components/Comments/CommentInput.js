import React,{useState,useContext} from 'react'
import {AuthContetx} from '../../context/Auth'
import './Style.css'
function CommentInput({postId}) {
    const [comment,setComment] =useState('')
 
    const {AddComments} = useContext(AuthContetx)
    const AddComment=(e)=>{
      e.preventDefault()
        // check login
        console.log("add")
        AddComments(comment,postId)
    }
 
  return (
    <div className="comment-container">
  
      <div className="add-comment">
      <img src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"/>
      <form className="comment" onSubmit={AddComment}>
      <input value={comment} onChange={(e)=>setComment(e.target.value)} 
        placeholder="Add Comment"
        />
      
      </form>
      
      </div>
      
        
    </div>
  )
}

export default CommentInput