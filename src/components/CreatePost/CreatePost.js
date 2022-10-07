import React, { useState } from 'react'
import { InputField, BodyInput, SubmitPost } from "./CreatePostElements"

function CreatePost({ handleAddPost, user }) {
    const [title, setTitle] = useState("")
    const [subtitle, setSubtitle] = useState("")
    const [body, setBody] = useState("")

   function handleSubmit(e){
        e.preventDefault();
        const newPost = {
            "title": title,
            "subhead": subtitle,
            "body": body,
            "user": user.sub,
            "userName": (user.given_name + " " + user.family_name),
            "comments": []
        }
        console.log(newPost)
        fetch('http://localhost:3004/posts', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPost)
        })
        .then((r) => r.json())
        .then((newPost) => handleAddPost(newPost))
        setTitle("")
        setSubtitle("")
        setBody("")
        alert('Your post was submitted. Check out the home page to see it!')
   }
  return (
    <div>
        <h1>New Post:</h1>
        <form onSubmit={handleSubmit}>
            <label for="title">Title</label><br></br>
            <InputField value={title} onChange={(e)=>setTitle(e.target.value)} type="text" id="title" name="title"></InputField><br></br>
            <label for="subtitle">Subtitle</label><br></br>
            <InputField value={subtitle} onChange={(e)=>setSubtitle(e.target.value)} type="text" id="subtitle" name="subtitle"></InputField><br></br>
            <label for="body">Body</label><br></br>
            <BodyInput value={body} onChange={(e)=>setBody(e.target.value)} className="body-input" type="textarea" id="body" name="body"></BodyInput><br></br>
            <SubmitPost type="submit" value="Submit"/>
        </form>
    </div>
  )
}

export default CreatePost