import React ,{useContext,useEffect,useState}from 'react'
import {AuthContetx} from '.././../context/Auth'
import CommentInput from '../Comments/CommentInput'
import Likes from '../Likes/Likes'
import {useNavigate} from 'react-router-dom'
import Comments from '../Comments/Comments'
function Posts() {
    const {getAllPosts,allPost,name} = useContext(AuthContetx)
    // console.log(allPost,"===============",name)
    const navigate=useNavigate()
    const [show,setShow] = useState(false)
  
    useEffect(()=>{
        getAllPosts()
    },[])
    const showComment= (id)=>{
        setShow(true)
        navigate(`/comment/${id}`)
    }
    const profile = (id)=>{
      console.log("cdc")
      navigate(`/profile/${id}`)
    }
  return (
    <div>
        <div>
    
      {allPost.map((item)=>
      
      <div className="dispaly-post-container">
        <div>
          <div className="post-data">
            <img src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"/>
        <p className="post-userName"  onClick={()=>profile(item.uid)}>{item.name}</p>
        </div>
        <p key={item.id }className="post-text">{item.text}</p>
       
        </div>
        <div>
            <CommentInput postId={item.id}/>
            <button onClick={()=>showComment(item.id)}>show comments
            </button>
            {/* {show?<div><Comments /></div>:<p></p>} */}
           
            {/* <Likes postId={item.id}/> */}
        </div>
        </div>
      )}
      </div>
       
    </div>
  )
}

export default Posts