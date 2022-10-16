import React from 'react'

export default function SliderContent(props) {
    const {item} = props
  return (
        <div className='slide'>
            <div className='slide-content'>
                <h4>{item.titleS}</h4>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <p className='price'><b>{item.newPrice}</b> <del>{item.oldPrice}</del></p>
                <div className='btns'>
                    <button><i className="fa fa-cart-plus" aria-hidden="true"></i>Add To Cart</button>
                    <button>more Info</button>
                </div>
            </div>
            <div className='slide-img'>
                <img src={item.image} alt="slider section"/>
            </div>
        </div>
               
  )
}
