import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { PostContainer, Title, EditButton, UserName, TitleContainer, ButtonContainer } from "./PostDetailsElements";
import EditPost from "../EditPost";
import Comments from '../Comments';
import Likes from '../Likes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function PostDetails({ user, handleDeletePost, handleUpdatePost }) {
    const [post, setPost] = useState(null)
    const [edit, setEdit] = useState(false)

    function handleEditClick(){
        setEdit(!edit)
    }
    console.log(post)
    function handleDeleteClick(){
        fetch(`http://localhost:3004/posts/${post.id}`, {
          method: "DELETE",
        })
          .then((r) => r.json())
          .then(() => handleDeletePost(post));
          setPost(null)
      }

    const params = useParams()

    useEffect(() => {
        fetch(`http://localhost:3004/posts/${params.id}`)
        .then((r) => r.json())
        .then((postData) => setPost(postData))
    }, [])

    if (!post) return <h2>Your post was deleted. Please return to the home page by clicking the logo.</h2>
    return (
        <>
            <PostContainer>
                <TitleContainer>
        
                <Title>{post.title}</Title>
                {post.userName ? <UserName>By: {post.userName}</UserName> : null}
                {post.user === user.sub ? (<ButtonContainer>
                                                <EditButton onClick={handleDeleteClick}>
                                                    <FontAwesomeIcon icon={faTrash} /> 
                                                </EditButton>
                                                <EditButton onClick={handleEditClick}>
                                                    Edit
                                                </EditButton>
                                            </ButtonContainer>) : null}
                </TitleContainer>
                <h4>{post.subtitle}</h4>
            
                <p>{post.body}</p>
                <Likes post={post} user={user} handleUpdatePost={setPost} />
                { edit ? <EditPost setEdit={setEdit} handleUpdatePost={setPost} post={post} /> : null}
            </PostContainer>
            <Comments user={user} post={post}/>

        </>
    )
}

export default PostDetails
