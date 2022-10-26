import React from 'react'
import {Link} from 'react-router-dom'
export default function BedroomItem(props) {
  const {item, detailsFunc} = props
  return (
      <div className='card' id= {item.id} >
          <img src={item.image} alt='card-img'/>
          <div className='card-body'>
              <h4 className='card-title'>{item.name}</h4>
              <p className='card-text'>Price: {item.price}</p>
              <p className='card-color'>Color: {item.color}</p>
              <Link to={`/bedroom/${item.id}`} onClick={() => detailsFunc(item.id)} href="#" className="btn btn-primary">Details</Link>
          </div>
      </div>
  )
}
