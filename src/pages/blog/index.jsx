import React from 'react'
import { useState, useEffect } from 'react';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom'
import Chip from '../../components/Chip';
import EmptyList from '../../components/EmptyList';
import { blogList } from '../../config/data';
import 'froala-editor/js/froala_editor.pkgd.min.js';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'font-awesome/css/font-awesome.css';
import FroalaEditor from 'react-froala-wysiwyg';
import "./styles.css";

function Blog() {
  const {id} = useParams();
  const [blog, setBlog] = useState(null);
  const [like, setlike] = useState(false);
  const [dislike, setdislike] = useState(false);
  
  useEffect(() => {
    let bleg = blogList.find((blog)=>blog.id === parseInt(id));

    if (bleg) {
      setBlog(bleg);
    }
    //getBleg();
  }, [id])
  
  const getIndex = () => {
   
  }
  /*
  const getBleg = async() => {
    await fetch("http://localhost:8080/api/blog", {
      method: "POST",
      body: JSON.stringify({
        id,
      }),
      "Content-type": "application/json",
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setBlog(data);
    })
    .catch((err) => console.error(err))
  }
  */

  const changeStyle = () => {
    
    if (!like) {
      setlike(true);
      setdislike(false);
    } else {
      setlike(false);
    }
  }

  const changeStyleb = () => {
    
    if (!dislike) {
      setdislike(true);
      setlike(false);
    } else {
      setdislike(false);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className='container'>
      <Link to='/' className='blog-goBack'>
        <span className='hex'>&#8592;</span>
        <span>Go Back</span>
      </Link>

      {
        blog ? <div><div className="blog-wrap">
          <header>
            <p className='blog-date'>Published {blog.createdAt}</p>
            <h1>{blog.title}</h1>
            <div className='blog-subCategory'>
              {blog.subCategory.map((category, index)=>(
                <div key={index}>
                  <Chip label={category} />
                </div>
              ))}
            </div>
          </header>
          <img src={blog.cover} alt="cover" />
          <p className='blog-descrip'>{blog.description}</p>
          </div>
          <div id='reaction'>
            <button id='like' onClick={changeStyle} style={like ? {color: 'blue'} : {color: 'black'}} ><FaThumbsUp id='up' className={like ? 'bounce' : null} /></button>
            <button id='dislike' onClick={changeStyleb} style={dislike ? {color: 'blue'} : {color: 'black'}} ><FaThumbsDown id='down' className={dislike ? 'bounce' : null} /></button>
          </div>
            <form id='comment-wrap' onClick={handleSubmit}>
              <textarea rows='8' className='text-area' placeholder='Write a comment'></textarea>
              <button className='comment-btn'>Comment</button>
            </form>
                {/*<div id='froalas'>
                  <FroalaEditor tag='textarea' />
                </div>*/}
        </div>
        : (
          <EmptyList />
        )
}
    </div>
  )
}

export default Blog;