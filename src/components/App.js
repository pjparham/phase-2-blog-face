import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import BlogPosts from "./BlogPosts";
import CreatePost from "./CreatePost";
import About from "./About";
import "../App.css";
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
        <Route path='/' exact element={<BlogPosts posts={posts}/>} />
        <Route path='/profile' exact element={<BlogPosts posts={posts}/>} />
        <Route path='/new-post' element={<CreatePost handleAddPost={handleAddPost}/>} />
        <Route path='/about' exact element={<About/>} />
        <Route path='/sign-in' exact element={<BlogPosts posts={posts}/>} />
      </Routes>
    </div>
  );
}

export default App;
