import React from 'react';
import blogData from './blogData';
import './Blog.css';

const Blog = () => {
  return (
    <div className='blog-wrapper'>
      {blogData.map((item, index) => (
        <div className='blog-container' key={index}>
          <div className="blog-image">
            <img src={item.image} alt={item.title} />
          </div>
          <div className="blog-title">
            <h2>{item.title}</h2>
          </div>
          <div className="blog-description">
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Blog;
