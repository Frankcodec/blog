import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [password2, setpassword2] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === password2) {
      console.log("good")
    } else {
      alert("passwords do not match");
    }
  }

  const Swap = useNavigate();
/*
  const put = async() => {
    await fetch("http://localhost:8080/blog/new", {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        password,
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then((res)=>res.json())
    .then((data)=>{
      if (data.message) {
        alert('Account created succesfully');
        Swap('/')
      }
    })
  }
*/

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type='text'
          placeholder='Enter your full name'
          value={name}
          onChange={(e)=>setname(e.target.value)}
        />
        <input 
          type='email' 
          placeholder='Enter your email'
          value={email}
          onChange={(e)=>setemail(e.target.value)}
        />
        <input 
          type='password'
          placeholder='Enter Your password'
          value={password}
          onChange={(e)=>setpassword(e.target.value)}
        />
        <input 
          type='password'
          placeholder='Re-type Your password'
          value={password2}
          onChange={(e)=>setpassword2(e.target.value)}
        />
        <button className='signup-btn'>Sign Up</button>
      </form>
    </div>
  )
}

export default Signup;