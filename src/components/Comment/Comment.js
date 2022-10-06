import React from 'react'

function Comment({ comment }) {

  return (
    <div>
        <p>By {comment.username}</p>
        <p>{comment.text}</p>
    </div>
  )
}

export default Comment