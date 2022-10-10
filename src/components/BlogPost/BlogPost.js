import React, { useState } from "react";
import { PostContainer, Title, EditButton, UserName, TitleContainer, ButtonContainer } from "./BlogPostElements";
import EditPost from "../EditPost";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faHeart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function BlogPost({ post, user, handleUpdatePost, handleDeletePost }){
    const [edit, setEdit] = useState(false)
    const { title, subhead } = post

    function handleEditClick(){
        setEdit(!edit)
    }


    function handleDeleteClick(){
        fetch(`http://localhost:3004/posts/${post.id}`, {
          method: "DELETE",
        })
          .then((r) => r.json())
          .then(() => handleDeletePost(post));
      }


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
        <PostContainer>
            <TitleContainer>
             <Title>{title}</Title>
           
             {post.user === user.sub ? (<ButtonContainer>
                                            <EditButton onClick={handleDeleteClick}>
                                                 <i className="fa-solid fa-trash"></i>
                                            </EditButton>
                                            <EditButton onClick={handleEditClick}>
                                                Edit
                                            </EditButton>
                                        </ButtonContainer>) : null}
            </TitleContainer>
            {post.userName ? <UserName>By: {post.userName}</UserName> : null}
            <h4>{subhead}</h4>
            <Link to={`/posts/${post.id}`}>See more</Link>
            <button onClick={handleLike}>
                {post.likes.includes(user.sub) ?  <i className="fa-solid fa-heart"></i> :   <i className="fa-regular fa-heart"></i>}
            </button> {post.likes.length === 1 ? (post.likes.length) + " Like" : (post.likes.length) + " Likes"}
            { edit ? <EditPost setEdit={setEdit} handleUpdatePost={handleUpdatePost} post={post} /> : null}
        </PostContainer>
    )
}

export default BlogPost