import React from 'react'
import { LikeButton } from "./LikesElements"

function Likes({ post, user, handleUpdatePost }) {

    function handleLike(e){
        e.preventDefault();
        if (post.likes.includes(user.sub)){
            const updatedLikes = post.likes.filter((like) => like !== user.sub)
            const updatedLikeArray = { "likes": updatedLikes } 
            fetch(`http://localhost:3004/posts/${post.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedLikeArray)
            })
            .then((r) => r.json())
            .then((updatedPost) => handleUpdatePost(updatedPost))
        }
        else{
            const updatedPost = {
                "likes": [...post.likes, user.sub]
            }
            fetch(`http://localhost:3004/posts/${post.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedPost)
            })
            .then((r) => r.json())
            .then((updatedPost) => handleUpdatePost(updatedPost))
        }
    }

  return (
    <>
    <LikeButton onClick={handleLike}>
        {post.likes.includes(user.sub) ?  <i className="fa-solid fa-heart"></i> :   <i className="fa-regular fa-heart"></i>}
     </LikeButton> {post.likes.length === 1 ? (post.likes.length) + " Like" : (post.likes.length) + " Likes"}
    </>
  )
}

export default Likes
