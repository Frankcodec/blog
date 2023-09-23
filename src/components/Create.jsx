import React from 'react';
import 'froala-editor/js/froala_editor.pkgd.min.js';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'font-awesome/css/font-awesome.css';
import FroalaEditor from 'react-froala-wysiwyg';
import { useState } from 'react';
import "./styles.css";


const Create = () => {
    const [content, setcontent] = useState("");
    const email = sessionStorage.getItem("email");
    

    const handleSubmit = (e) => {
        e.preventDefault();
    }
/*
    const insert = () => {
        fetch('htttp://localhost:8080/blog/new', {
            method: "POST",
            body: JSON.stringify({
                content,
                email,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((res)=>res.json())
        .then((data)=>{
            if (data.mesage) {
                alert("data.message")
            }
        })
        .catch((err)=>console.error(err))
    }
*/

  return (
    <div className='editor-div'>
        <form onSubmit={handleSubmit} className='form'>
            <div id='froalas'>
              <FroalaEditor 
                tag='textarea'
                value={content}
                placeholder="Type Your Post"
                onChange={(e)=> setcontent(e.target.value)} 
               />
            </div>
            <button className='post'>Post</button>
        </form>
    </div>
  )
}

export default Create;