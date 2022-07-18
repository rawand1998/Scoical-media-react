import React ,{useContext,useEffect,useState}from 'react'
import {AuthContetx} from '.././../context/Auth'
import CommentInput from '../Comments/CommentInput'
import Likes from '../Likes/Likes'
import Comments from '../Comments/Comments'
function Posts() {
    const {getAllPosts,allPost,name} = useContext(AuthContetx)
    // console.log(allPost,"===============",name)
    const [show,setShow] = useState(false)
    useEffect(()=>{
        getAllPosts()
    },[])
    const showComment= ()=>{
        setShow(true)
        console.log(show)
    }
  return (
    <div>
        <div>
       get all posts 
      {allPost.map((item)=>
      
      <div>
        <p key={item.id}>{item.text}</p>
        <p>{item.name}</p>
        <div>
            <CommentInput postId={item.id}/>
            <button onClick={showComment}>show comments
            </button>
            {show?<div><Comments postId={item.id}/></div>:<p></p>}
           
            {/* <Likes postId={item.id}/> */}
        </div>
        </div>
      )}
      </div>
       
    </div>
  )
}

export default Posts