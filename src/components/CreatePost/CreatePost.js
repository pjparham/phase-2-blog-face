import React, { useState } from 'react'
import { InputField, BodyInput, SubmitPost } from "./CreatePostElements"

function CreatePost({ handleAddPost, user }) {
    // const [title, setTitle] = useState("")
    // const [subtitle, setSubtitle] = useState("")
    // const [body, setBody] = useState("")
    const [newPost, setNewPost] = useState({
        "title": "",
        "subtitle": "",
        "body": "",
        "user": user.sub,
        "userName": (user.given_name + " " + user.family_name),
        "comments": [],
        "likes": [],
    })

    function handleChange(e){
        setNewPost({
            ...newPost,
            [e.target.name]: e.target.value,
        })
    }
console.log(newPost)


   function handleSubmit(e){
        e.preventDefault();
        // const newPost = {
        //     "title": title,
        //     "subhead": subtitle,
        //     "body": body,
        //     "user": user.sub,
        //     "userName": (user.given_name + " " + user.family_name),
        //     "comments": [],
        //     "likes": [],
        // }
        fetch('http://localhost:3004/posts', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPost)
        })
        .then((r) => r.json())
        .then((newPost) => handleAddPost(newPost))
        // setTitle("")
        // setSubtitle("")
        // setBody("")
        setNewPost({
            ...newPost,
            "title": "",
            "subtitle": "",
            "body": ""
        })
        console.log(newPost)
        alert('Your post was submitted. Check out the home page to see it!')
   }
  return (
    <div>
        <h1>New Post:</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title</label><br></br>
            <InputField value={newPost.title} onChange={handleChange} type="text" id="title" name="title"></InputField><br></br>
            <label htmlFor="subtitle">Subtitle</label><br></br>
            <InputField value={newPost.subtitle} onChange={handleChange} type="text" id="subtitle" name="subtitle"></InputField><br></br>
            <label htmlFor="body">Body</label><br></br>
            <BodyInput value={newPost.body} onChange={handleChange} className="body-input" type="textarea" id="body" name="body"></BodyInput><br></br>
            <SubmitPost type="submit" value="Submit"/>
        </form>
    </div>
  )
}

export default CreatePost