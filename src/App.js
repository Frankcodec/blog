import React from 'react';
import { Route, Routes } from 'react-router-dom';
import "./App.css";
import Blog from './pages/blog';
import Home from './pages/home';
import Login from './components/Login';
import Signup from './components/Signup';
import Create from './components/Create';
import Profile from './components/Profile';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/blogs' element={<Home />} />
        <Route path='/blog/:id' element={<Blog />} />
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Signup />} />
        <Route path='/blog/create' element={<Create />} />
        <Route path='/:id/profile' element={<Profile />} errorElement={<Blog />} />
      </Routes>
    </div>
  )
}

export default App;   
