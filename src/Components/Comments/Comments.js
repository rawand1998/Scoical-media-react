import React,{useContext,useEffect} from 'react'
import {AuthContetx} from '../../context/Auth'
import {useParams } from 'react-router-dom'
import CommentInput from '../Comments/CommentInput'
import NavBar from '../NavBar/NavBar'
function Comments() {
  const postId = useParams()
  
    console.log(postId.id)
    //param
    const {getAllComment,comments, singlePost,
      getUser,}= useContext(AuthContetx)
    console.log(getUser)
    console.log("comments",comments)
    useEffect(()=>{
        getAllComment(postId) ///post id from param
        singlePost(postId)
    },[])
  return (
    <div>

    <NavBar />
<div className="dispaly-post-container">
        <div>
          <div className="post-data">
            <img src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"/>

         <p className="post-userName" >{getUser.name}</p>
        
      
        </div>
        <p className="post-text">{getUser.text}</p>
       
        </div>
        <div>
            <CommentInput postId={getUser.uid}/>
         
          
        </div>
        {comments.map((item)=>
        <div className="single-post-comment">
          <div className="comment-data">
           <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"/>
            <p>{item.comment}</p>
            </div>
        </div>
        )}
        </div>
    
        </div>
  )
}

export default Comments