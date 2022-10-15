import React, { useEffect, useState } from 'react'
import blogs from './Api/Api'
import './BlogSection.css'
import BlogItem from './BlogItem';
export default function BlogSection() {

    const [allBlogs, setAllBlogs] = useState([]);

    useEffect(()=> {
        blogs.getAllBlog().then((res) => setAllBlogs(res))
    }, [allBlogs])
  return (
    <div className='blog-section'>
        <h2>Latest Blog</h2>
        <div className='container'>
            {allBlogs.map((item,index) => {
                return (
                    <BlogItem key={index} item={item} />
                )
            })}
        </div>
    </div>
  )
}
