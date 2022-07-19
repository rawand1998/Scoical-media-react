import React,{useContext,useEffect} from 'react'
import {AuthContetx} from '../../context/Auth'
import {useParams } from 'react-router-dom'
function Comments() {
  const postId = useParams()
  
    console.log(postId)
    //param
    const {getAllComment,comments}= useContext(AuthContetx)
    // console.log(comments,"post id",postId,"comments")
    console.log("comments",comments)
    useEffect(()=>{
        getAllComment(postId) ///post id from param
    },[])
  return (
    <div>{comments.map((item)=>
        <div>
            {item.comment}
        </div>
        )}</div>
  )
}

export default Comments