import React from 'react';
import BlogPost from '../BlogPost';

function BlogPosts({ posts, user, handleUpdatePost, handleDeletePost }){

    const displayBlogPosts = posts.map((post) => {
        return <BlogPost 
                    handleDeletePost={handleDeletePost} 
                    handleUpdatePost={handleUpdatePost} 
                    user={user} 
                    key={post.id} 
                    post={post}
                />
    })
    return(
        <div>
           {displayBlogPosts}
        </div>
    )
}
export default BlogPosts