import React, { useState } from "react";
import { PostContainer, Title, EditButton, UserName, TitleContainer, ButtonContainer, LikeButton } from "./BlogPostElements";
import EditPost from "../EditPost";
import Likes from "../Likes";
import { Link } from 'react-router-dom'

function BlogPost({ post, user, handleUpdatePost, handleDeletePost }){
    const [edit, setEdit] = useState(false)
    const { title, subtitle } = post

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
                                                 <i className="fa-solid fa-trash"></i>
                                            </EditButton>
                                            <EditButton onClick={handleEditClick}>
                                                Edit
                                            </EditButton>
                                        </ButtonContainer>) : null}
            </TitleContainer>
            {post.userName ? <UserName>By: {post.userName}</UserName> : null}
            <h4>{subtitle}</h4>
            <Link className="pageLink" to={`/posts/${post.id}`}>See more</Link>
            <Likes user={user} post={post} handleUpdatePost={handleUpdatePost} />
            { edit ? <EditPost setEdit={setEdit} handleUpdatePost={handleUpdatePost} post={post} /> : null}
        </PostContainer>
    )
}

export default BlogPost


