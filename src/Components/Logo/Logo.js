import React, { useEffect, useState } from 'react'
import './Logo.css'
export default function Logo() {
    const [logo, setlogo] = useState([
        {id: 1,
         image: './images/logo/img0.png'
        },
        {id: 2,
        image: './images/logo/img1.png'
        },
        {id: 3,
        image: './images/logo/img2.png'
        },
        {id: 4,
        image: './images/logo/img3.png'
        },
        {id: 5,
        image: './images/logo/img4.png'
        }
    ])

    
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
