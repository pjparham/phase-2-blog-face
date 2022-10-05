import React from 'react';
import BlogPost from '../BlogPost';

function BlogPosts({ posts }){

    const displayBlogPosts = posts.map((post) => {
        return <BlogPost key={post.id} post={post}/>
    })
    return(
        <div>
           {displayBlogPosts}
        </div>
    )
}
export default BlogPosts