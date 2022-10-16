import React, { useEffect, useState } from 'react'
import './Logo.css'
import { mydata } from './mydata'
export default function Logo() {
    const [logo, setlogo] = useState([])

    useEffect(()=> {
      setlogo(mydata)
    })
  return (
    <div className='logo-section'>
        <div className='container'>
            {logo.map((item, index) => {
              return(
                <div key={index} className='box'>
                     <img src={item.image} alt='logo section' />
                </div>
              )
            })}
        </div>
    </div>
  )
}
