import React from "react"
import { PostContainer, Title } from "./BlogPostElements"

function BlogPost({ post }){
    const { title, body, subhead } = post
    return (
        <PostContainer>
            <Title>{title}</Title>
            <h4>{subhead}</h4>
            <p>{body}</p>
        </PostContainer>
    )
}

export default BlogPost