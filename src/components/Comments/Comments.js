import React, { useState, useRef } from 'react'
import Comment from '../Comment/Comment'
import { CommentForm } from "./CommentsElements"

function Comments({post, user}) {
    const [commentText, setCommentText] = useState("")
    const [allComments, setAllComments] = useState([...post.comments])
    const displayComments = allComments.map((comment) => {
        return <Comment key={comment.id} comment={comment} />
    })
    const commentCountRef = useRef(post.comments.length + 1)

    function onSubmit(e){
        e.preventDefault()
        const newComment = {
            "comments": [
                ...allComments,
                {"text": commentText,
                "id": (commentCountRef.current),
                "username": (user.given_name + " " + user.family_name)}
            ]
        }
        fetch(`http://localhost:3004/posts/${post.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
        },
        body: JSON.stringify(newComment)
        })
        .then((r) => r.json())
        .then((commentData) => setAllComments(commentData.comments))
        setCommentText("")
        commentCountRef.current += 1
}

    return (
    <div>
        <h1>Comments</h1>
        {displayComments}
        <h3>Write comment...</h3>
        <form onSubmit={onSubmit}>
            <CommentForm value={commentText} onChange={(e)=>setCommentText(e.target.value)} className="body-input" type="textarea" id="body" name="body"></CommentForm><br></br>
            <input type="submit" value="Submit"/>
        </form>
    </div>
  )
}


export default Comments
