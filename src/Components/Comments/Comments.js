import React,{useContext,useEffect} from 'react'
import {AuthContetx} from '../../context/Auth'
function Comments({postId}) {
    // console.log(postId)
    const {getAllComment,comments}= useContext(AuthContetx)
    useEffect(()=>{
        getAllComment(postId)
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