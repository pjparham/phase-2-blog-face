import React from 'react';
import BlogPosts from '../BlogPosts';

function Profile({ user, posts, handleUpdatePost, handleDeletePost }) {

    const userPosts = posts.filter((post) => post.user === user.sub)
    
  return (
    <>

      <div>
      <h1>{user.given_name + " " + user.family_name}'s Posts</h1>
        <BlogPosts handleDeletePost={handleDeletePost} handleUpdatePost={handleUpdatePost} user={user} posts={userPosts} />
      </div>
    </>
  )
}

export default Profile
