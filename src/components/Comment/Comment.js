import React from 'react'
import { PostContainer, UserName } from "./CommentElements" 

function Comment({ comment }) {

  return (
    <PostContainer>
        <UserName>By {comment.username}</UserName>
        <p>{comment.text}</p>
    </PostContainer>
  )
}

export default Comment