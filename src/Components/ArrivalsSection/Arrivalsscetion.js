import React, { useEffect, useState } from 'react'
import './Arrivalssection.css'
import { myarr } from './Api/Api';
export default function Arrivalsscetion() {
    const [arrivalsArr, setArrivalsArr] = useState([]);

    useEffect(()=> {
        setArrivalsArr(myarr)
    }, [arrivalsArr])
  return (
    <div id='arrivalsection' className='arrivals-section'>
        <h2>New Arrivals</h2>
        <div className='container'>
            {arrivalsArr.map((item, index)=> {
                return(
                    <div className='boxes' key={index}>
                        <div className='box'>
                            <div className='box-img'>
                                {item.sale.length > 0 ? (<p className='sale'>{item.sale}</p>): (<p className='hide'></p>)}
                                <img src={item.image} alt='arrivals section'/>
                           
                                <div className='cart'>
                                    <p>
                                    <i className="fa fa-shopping-cart"></i> Add To Cart
                                    </p>
                                    <p>
                                    <i className="fa fa-heart-o" aria-hidden="true"></i>
                                    <i className="fa fa-arrows" aria-hidden="true"></i>

                                    </p>
                            </div>
                            </div>
                           
                            <div className='box-content'>
                                <h4 className='box-head'>{item.name}</h4>
                                <h5 className='box-price'>${item.price}</h5>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}
