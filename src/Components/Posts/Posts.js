import React ,{useContext,useEffect}from 'react'
import {AuthContetx} from '.././../context/Auth'
import CommentInput from '../Comments/CommentInput'
import Likes from '../Likes/Likes'
import Comments from '../Comments/Comments'
function Posts() {
    const {getAllPosts,allPost} = useContext(AuthContetx)
    console.log(allPost,"===============")
    useEffect(()=>{
        getAllPosts()
    },[])
  return (
    <div>
        <div>
       get all posts
      {allPost.map((item)=>
      
      <div>
        <p key={item.id}>{item.text}</p>
        <div>
            <CommentInput postId={item.id}/>
            <Comments />
            <Likes postId={item.id}/>
        </div>
        </div>
      )}
      </div>
       
    </div>
  )
}

export default Posts