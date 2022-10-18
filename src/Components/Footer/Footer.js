import React from 'react'
import './Footer.css'

export default function Footer() {

  return (
    <div className='footer'>
      <div className='container'>
        <ul>
        <li><i className="fa fa-facebook" aria-hidden="true"></i></li>
        <li><i className="fa fa-instagram" aria-hidden="true"></i></li>
        <li><i className="fa fa-linkedin" aria-hidden="true"></i></li>
        <li><i className="fa fa-pinterest-p" aria-hidden="true"></i></li>
        <li><i className="fa fa-behance" aria-hidden="true"></i></li>
        </ul>
        <div className='copy'>
          <p> &copy;Copytight. Designed And Developed By </p>
          <p><i>Enssaf Alshwayat</i></p>
        </div>
      </div>
    </div>
  )
}
