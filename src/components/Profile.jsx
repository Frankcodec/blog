import React from 'react';
import { useState } from 'react';

const Profile = () => {
    const [newPassword, setnewPassword] = useState("");
    const [newPassword2, setnewPassword2] = useState("");
   // const email = sessionStorage.getItem("email");

    const handleSubmit = (e) => {
        e.preventDefault();
        //change();
    }
/*
    const change = async() => {
        await fetch("http://localhost:8080/api/profile", {
            method: "POST",
            body: JSON.stringify({
                email,
                newPassword,
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((res)=>res.json())
        .then((data)=>{
            alert(data.messaage);
        })
        .catch((err)=>console.error(err))
    }
*/
  return (
    <div className='profile-div'>
        <h1>Welcome User</h1>
        <div>
            <h2>First Name</h2>
            <h2>Name1</h2>
        </div>
        <div>
            <h2>Last Name</h2>
            <h2>Name2</h2>
        </div>
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Create new password</label><br /><br />
                    <input 
                      type='password'
                      value={newPassword} 
                      placeholder='password'
                      onChange={(e)=>setnewPassword(e.target.value)}
                    />
                </div><br /><br />
                <div>
                    <label>Re-type new password</label><br /><br />
                    <input 
                      type='password'
                      value={newPassword2}
                      placeholder='re-type password'
                      onChange={(e)=>setnewPassword2(e.target.value)}
                    />
                </div>
            </form>
        </div>
    </div>

  )
}

export default Profile