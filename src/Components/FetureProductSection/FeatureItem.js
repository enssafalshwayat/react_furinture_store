import React from 'react'

export default function FeatureItem(props) {
    const {item} = props;
  return (
    <div className='box'>
        <div className='box-img'>
            <img src={item.image} alt='feature-image'/>
        </div>
        <div className='content'>
            <div className='rate'>
            <span><i className="fa fa-star" aria-hidden="true"></i></span>
            <span><i className="fa fa-star" aria-hidden="true"></i></span>
            <span><i className="fa fa-star" aria-hidden="true"></i></span>
            <span><i className="fa fa-star" aria-hidden="true"></i></span>
            <span className='last'><i className="fa fa-star" aria-hidden="true"></i></span>
            <span className='review'>(45 Review)</span>
            </div>
            <p className='feature-name'>{item.name}</p>
            <p className='feature-price'>{item.price}</p>
        </div>
        
    </div>
  )
}
