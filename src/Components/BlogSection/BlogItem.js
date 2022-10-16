import React from 'react'

export default function BlogItem(props) {
    const {item} = props;
  return (
    <div className='box'>
        <div className='box-img'>
            <img src={item.image} alt='blog section'/>
        </div>
        <div className='box-content'>
           <h5 className='title'>{item.title}</h5>
           <h6 className='writer'>{item.writer}</h6>
           <p className='blog-text'>{item.text}</p>

        </div>
    </div>
  )
}
