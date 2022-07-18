import React from 'react'
import PostInput from '../Posts/PostInput'
import CommentInput from '../Comments/CommentInput'
import Likes from '../Likes/Likes'
import Posts from '../Posts/Posts';
import NavBar from '../NavBar/NavBar'
function Home() {
  return (
    <div>
        <NavBar />
        <PostInput />
        <Posts />
    </div>
  )
}

export default Home