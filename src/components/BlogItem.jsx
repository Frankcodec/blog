import React from 'react'
import { Link } from 'react-router-dom'
import Chip from './Chip'

const BlogItem = ({blog:{
    id,
    description, 
    title, 
    createdAt,
    authorName,
    authorAvatar,
    category,
    cover,
    },
}) => {
  return (
    <div className='blogItem-wrap'>
        <img src={cover} alt="cover" className='blogItem-cover' />
        <Chip label={category} />
        <h3>{title}</h3>
        <p className='blogitem-desc'>{description}</p>

        <footer>
            <div>
                <img src={authorAvatar} alt='avatar' height='50' />
                <div>
                    <h6>{authorName}</h6>
                    <p>{createdAt}</p>
                </div>
            </div>
            <Link to={`/blog/${id}`} className='blogItem-link'>
                &#8594;
            </Link>
        </footer>
    </div>
  )
}

export default BlogItem