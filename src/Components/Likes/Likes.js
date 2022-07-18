import React,{useState,useContext,useEffect} from 'react'
import {AuthContetx} from '../../context/Auth'

function Likes({postId}) {
    const [likes,setLikes] =useState(0)
    const {AddLikes,getlike,like} = useContext(AuthContetx)
   console.log(" {like}",like)
    useEffect(()=>{
      getlike(postId)
    },[])
    const incLikes=()=>{
        // check login
        setLikes(likes+1)
        console.log(likes)
        AddLikes(likes,postId)
    }
  return (
    <div>
      {like.map((item)=>
      <span>{item.likes}</span>)}
      
        <button type="submit" onClick={incLikes}>ADD Likes {likes}</button>
    </div>
  )
}

export default Likes