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
    
      {allPost.map((item)=>
      
      <div className="dispaly-post-container">
        <div>
          <div className="post-data">
            <img src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"/>
        <p className="post-userName">{item.name}</p>
        </div>
        <p key={item.id }className="post-text">{item.text}</p>
       
        </div>
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