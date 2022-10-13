import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import BlogPosts from "./BlogPosts";
import CreatePost from "./CreatePost";
import About from "./About";
import "../App.css";
import Profile from "./Profile";
import PostDetails from "./PostDetails";
import { Routes, Route } from 'react-router-dom';
import Sidebar from "./Sidebar";



function App() {
  const [posts, setPosts] = useState([])
  const [user, setUser] = useState(null)
  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState("")

  function toggleSidebar(){
    setIsOpen(!isOpen)
  }

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

  //create input field -> controlled 
  //use value of form to filter blog posts
  //pass filtered blog posts 

  let filteredBlogPosts = posts.filter((post) => (post.title.toLowerCase().includes(search.toLowerCase())))



  function handleDeletePost(deletedPost){
    const updatedPosts = posts.filter((post) => post.id !== deletedPost.id);
    setPosts(updatedPosts)
  }

  if (user === undefined){
    return (
      <div className="App">
      <Sidebar isOpen={isOpen} setUser={setUser} toggleSidebar={toggleSidebar}/>
      <NavBar toggleSidebar={toggleSidebar} setUser={setUser}/>
      <h1>Please login or create an account</h1>
      <Routes>
        <Route path='/' element={<About/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </div>
    )
  }
  return (
    <div className="App">
      <Sidebar isOpen={isOpen} setUser={setUser} toggleSidebar={toggleSidebar}/>
      <NavBar setUser={setUser} toggleSidebar={toggleSidebar}/>
      <Routes>
        <Route exact path='/'  element={<BlogPosts 
                                          search={search}
                                          setSearch={setSearch}
                                          handleDeletePost={handleDeletePost} 
                                          handleUpdatePost={handleUpdatePost} 
                                          user={user} posts={filteredBlogPosts}
                                        />} />
        <Route path='/profile' exact element={<Profile 
                                                handleDeletePost={handleDeletePost} 
                                                handleUpdatePost={handleUpdatePost} 
                                                posts={filteredBlogPosts} 
                                                user={user}
                                                search={search}
                                                setSearch={setSearch}
                                              />} />
        <Route path='/new-post' element={<CreatePost 
                                            user={user} 
                                            handleAddPost={handleAddPost}
                                            />} />
        <Route path='/about' exact element={<About/>} />
        <Route path='/posts/:id' element={<PostDetails 
                                            user={user} 
                                            handleDeletePost={handleDeletePost} 
                                            handleUpdatePost={handleUpdatePost}
                                          />} />
      </Routes>
    </div>
  );
}

export default App;
