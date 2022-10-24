import React from 'react'
import './beds.css'
import {mydata} from './API'
export default function Bedroom() {
  return (
    <div className='bedroom-section container'>
        <div className=''>
            <h2 className='head'>Bed Room</h2>
            <div className='row'>
                {mydata.map((item, index) => {
                    return (
                        <div className='col-sm-12 col-md-6 col-lg-3' key={index}>
                           <div className='card'>
                                <img src={item.image} alt='card-img'/>
                                <div className='card-body'>
                                    <h4 className='card-title'>{item.name}</h4>
                                    <p className='card-text'>Price: {item.price}</p>
                                    <p className='card-color'>Color: {item.color}</p>
                                    <a href="#" className="btn btn-primary">Details</a>
                                </div>
                           </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}
