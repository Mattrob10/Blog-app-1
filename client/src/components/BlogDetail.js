import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  const getOneBlog = useCallback(() => {
    axios
      .get(`/api/blog/${id}`)
      .then(res => {
        setBlog(res.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [id]); // Include 'id' in the dependency array

  useEffect(() => {
    getOneBlog();
  }, [getOneBlog]); // Include 'getOneBlog' in the dependency array

  console.log(id);

  return (
    <div>
      {blog ? (
        <div className='blog-details-wrapper'>
          <div className='blog-details'>
            <h2>{blog.title}</h2>
            <div className='blog-details-img'>
              <img src={blog.imgUrl} alt='' />
            </div>
            <p>{blog.description}</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BlogDetail;
