import React, { useEffect, useState } from 'react'
import './BlogSection.css'
import BlogItem from './BlogItem';
import { mydata } from './Api/Api';
export default function BlogSection() {

    const [allBlogs, setAllBlogs] = useState([]);

    useEffect(()=> {
        setAllBlogs(mydata)
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
