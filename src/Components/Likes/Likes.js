import React,{useState,useContext} from 'react'
import {AuthContetx} from '../../context/Auth'

function Likes() {
    const [likes,setLikes] =useState(0)
    const {AddLikes} = useContext(AuthContetx)
    const incLikes=()=>{
        // check login
        setLikes(likes+1)
        console.log(likes)
        AddLikes(likes)
    }
  return (
    <div>comment
      
        <button type="submit" onClick={incLikes}>ADD Likes {likes}</button>
    </div>
  )
}

export default Likes