import React from 'react';
import BlogPosts from '../BlogPosts';

function Profile({ user, posts }) {

    const userPosts = posts.filter((post) => post.user === user.sub)
    console.log(userPosts, "userPosts")
    console.log(user)
  return (
    <>
      <h1>{user.given_name + " " + user.family_name}</h1>
      <div>
        <h1>My Posts</h1>
        <BlogPosts posts={userPosts} />
      </div>
    </>
  )
}

export default Profile
