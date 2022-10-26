import React, { useEffect, useState } from 'react'
import './beds.css'
import {mydata} from './API'
import BedroomItem from './BedroomItem'
export default function Bedroom() {

   const detailsFunc = (id) => {
    console.log(id)
    mydata.find((item)=> item.id === id);
   }
  return (
    <div className='bedroom-section container'>
        <div className=''>
            <h2 className='head'>Bed Room</h2>
            <div className='row'>
                {mydata.map((item, id) => {
                    return (
                        <div className='col-sm-12 col-md-6 col-lg-3' key={id}>
                           <BedroomItem item = {item} detailsFunc = {detailsFunc} />
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}
