import React from 'react';
import BlogPost from '../BlogPost';

function BlogPosts({ search, setSearch, posts, user, handleUpdatePost, handleDeletePost }){

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
           <div style={{marginTop: "1rem"}}> Search Posts: <input value={search} onChange={e => setSearch(e.target.value)}></input> </div> 
           {displayBlogPosts}
        </div>
    )
}
export default BlogPosts