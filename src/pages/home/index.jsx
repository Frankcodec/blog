import React, {useState, useEffect} from 'react';
import Header from '../../components/header';
import SearchBar from '../../components/searchBar';
import BlogList from '../../components/BlogList';
import { blogList } from '../../config/data';
import EmptyList from '../../components/EmptyList';
//import Chip from '../../components/Chip';
import { NavLink, useNavigate } from 'react-router-dom';

function Home() {
  const [blogs, setblogs] = useState(blogList);
  const [searchKey, setsearchKey] = useState("");
  const [posts, setposts] = useState([]);

  const Swap = useNavigate();

  /*useEffect(() => {
    getPosts();
  }, [])


  const getPosts = async() => {
    await fetch("http://localhost:8080/api/all/posts")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setposts(data);
    })
    .catch((err) => console.error(err))
  }
*/
  const logout = () => {
    sessionStorage.setItem("email", "");
    localStorage.setItem("id", '');
    Swap('/');
  }

  //search submit
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    handleSearchResults() 
  }

  const handleSearchResults = () => {
    const allBlogs = blogList;
    const filteredBlogs = allBlogs.filter((blog)=>blog.category.toLowerCase().includes(searchKey.toLowerCase().trim()));
    setblogs(filteredBlogs);
  }

  const handleClearSearch = () => {
    setblogs(blogList);
    setsearchKey("");
  }

const closeNav = () => {
    document.getElementById('mySidebar').style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

const openNav = () => {
    document.getElementById('mySidebar').style.width = "100%";
    document.getElementById("main").style.marginLeft = "0";
}

  return (
    <div className='container'>
      <div id='mySidebar' className='sidebar'>
        <a href='javascript:void(0)' className='closebtn' onClick={closeNav}>&times;</a>
        <NavLink to='/blog/create'>Create Post</NavLink>
        <h2 onClick={logout}>Log out</h2>
    </div>

    <div id='main'>
        <button className='openbtn' onClick={openNav}>&#9776;</button>
    
        {/* page header */}
        <Header />

        {/* search bar */}
        <SearchBar 
          value={searchKey} 
          clearSearch={handleClearSearch}
          formSubmit={handleSearchSubmit} 
          handleSearchKey={e => setsearchKey(e.target.value)} 
        />

        {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
        {/*
        !posts.length ? <EmptyList /> :  posts.map((post) => {
          return(
            <div className='blogItem-wrap'>
        <img src={post.cover} alt="cover" className='blogItem-cover' />
        <Chip label={post.category} />
        <h3>{post.title}</h3>
        <p className='blogitem-desc'>{post.description}</p>

        <footer>
            <div>
                <img src={post.authorAvatar} alt='avatar' height='50' />
                <div>
                    <h6>{post.authorName}</h6>
                    <p>{post.createdAt}</p>
                </div>
            </div>
            <Link to={`/blog/${post.id}`} className='blogItem-link'>
                &#8594;
            </Link>
        </footer>
    </div>
          )
        })
        */}
    </div>
    </div>
  )
}

export default Home;