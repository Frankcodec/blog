import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import './styles.css';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const Swap = useNavigate();

  const HandleSubmit = (e) => {
    e.preventDefault();
    //validateCredentials();
    Swap('/blogs');
  }
/*
  const validateCredentials = async() => {
    await fetch("http://localhost:8080/api", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => res.json())
    .then((data) => {
      if (data.error_message) {
        alert(data.error_message);
      } else {
        alert(data.message);
        Swap('/blogs');
        localStorage.setItem("_userid", data.id);
        sessionStorage.setItem("name", data.email);
      }
    })
    .catch((err) => console.error(err));
  }
*/

  return (
    <Bdy>
        <form onSubmit={HandleSubmit}>
          <h1 className='log'>Log in to your account</h1>
          <div className='login-div'>
            <input 
              type='text'
              value={email} 
              className='usertext' 
              placeholder='Enter Your email' 
              onChange={(e) => setEmail(e.target.value)}
              required 
            /> <br/><br />
            <input 
              type='password'
              value={password} 
              className='userpassword' 
              placeholder='Enter Your password'
              onChange={(e) => setPassword(e.target.value)} 
              required /> 
            <button className='login-btn'>Log In</button>
          </div>
        </form>
    </Bdy>
  )
}

export default Login;

const Bdy = styled.div`
padding: 0;
margin: 0;
height: 100vh;
width: 100%;
--x: calc(var(--posX, 0) * 1px);
--y: calc(var(--posX, 0) * 1px);
background-image: 
linear-gradient(115deg, rgb(211 255 215), rgb(245, 240, 240)),
radial-gradient(90% 100% at calc(20% + var(--x)) calc(0% + var(--y)), rgb(200 200 200), rgb(022 000 045)),
radial-gradient(140% 140% at calc(80% + var(--x)) calc(0% + var(--y)), rgb(250 255 000), rgb(36 000 000)),
radial-gradient(150% 210% at calc(100% + var(--x)) calc(0% + var(--y)), rgb(20 175 125), rgb(0 200 255)),
radial-gradient(100% 100% at calc(80% + var(--x)) calc(0% + var(--y)), rgb(255 77 0), rgb(0 200 255)),
linear-gradient(60deg, rgb(255 0 0 ), rgb(120 86 255));
background-blend-mode: overlay, overlay, difference, difference, difference, normal;
;
display: flex;
align-items: center;
justify-content: center;
transition: all 1s linear;
animation: me 5s linear infinite;
`;