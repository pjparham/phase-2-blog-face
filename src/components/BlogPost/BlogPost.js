import React, { useState } from "react";
import { PostContainer, Title, EditButton, UserName, TitleContainer, ButtonContainer } from "./BlogPostElements";
import EditPost from "../EditPost";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
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

      console.log(user.sub)

      function handleLike(e){
        e.preventDefault();
        if (post.likes.includes(user.sub)){
            return null
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
                                                 <FontAwesomeIcon icon={faTrash} /> 
                                            </EditButton>
                                            <EditButton onClick={handleEditClick}>
                                                Edit
                                            </EditButton>
                                        </ButtonContainer>) : null}
            </TitleContainer>
            {post.userName ? <UserName>By: {post.userName}</UserName> : null}
            <h4>{subhead}</h4>
            <Link to={`/posts/${post.id}`}>See more</Link>
            <button onClick={handleLike}>{post.likes? (post.likes.length) + "Likes" : "Like"}</button>
            { edit ? <EditPost setEdit={setEdit} handleUpdatePost={handleUpdatePost} post={post} /> : null}
        </PostContainer>
    )
}

export default BlogPost