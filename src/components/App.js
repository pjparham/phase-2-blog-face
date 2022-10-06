import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import BlogPosts from "./BlogPosts";
import CreatePost from "./CreatePost";
import About from "./About";
import "../App.css";
import Profile from "./Profile";
import PostDetails from "./PostDetails";
import { Routes, Route } from 'react-router-dom';



function App() {
  const [posts, setPosts] = useState([])
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3004/posts')
    .then((r) => r.json())
    .then((postData) => setPosts(postData))
  }, [])


  function handleAddPost(newPost){
    setPosts([...posts, newPost])
  }


  function handleUpdatePost(updatedPost){
    const updatedPosts = posts.map((post) => {
      if (post.id === updatedPost.id) {
        return updatedPost
      } else {return post}
    });
    setPosts(updatedPosts)
  }

  function handleDeletePost(deletedPost){
    const updatedPosts = posts.filter((post) => post.id !== deletedPost.id);
    setPosts(updatedPosts)
  }


  if (user === undefined){
    return (
      <div className="App">
      <NavBar setUser={setUser}/>
      <h1>Please login or create an account</h1>
      <Routes>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </div>
    )
  }
  return (
    <div className="App">
      <NavBar setUser={setUser}/>
      <Routes>
        <Route path='/' exact element={<BlogPosts handleDeletePost={handleDeletePost} handleUpdatePost={handleUpdatePost} user={user} posts={posts}/>} />
        <Route path='/profile' exact element={<Profile handleDeletePost={handleDeletePost} handleUpdatePost={handleUpdatePost} posts={posts} user={user}/>} />
        <Route path='/new-post' element={<CreatePost user={user} handleAddPost={handleAddPost}/>} />
        <Route path='/about' exact element={<About/>} />
        <Route path='/posts/:id' element={<PostDetails user={user} handleDeletePost={handleDeletePost} handleUpdatePost={handleUpdatePost} user={user}/>} />
      </Routes>
    </div>
  );
}

export default App;
