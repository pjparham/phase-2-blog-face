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
            { edit ? <EditPost setEdit={setEdit} handleUpdatePost={handleUpdatePost} post={post} /> : null}
        </PostContainer>
    )
}

export default BlogPost