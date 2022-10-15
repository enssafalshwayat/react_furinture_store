import React, { useEffect, useState } from 'react'
import datajson from './Data.js'
import DesignSctionItem from './DesignSctionItem.js'
import './DesignSection.css'
export default function DesignSection() {

    const [myarr, setMyArr] = useState([])

    useEffect(() => {
        datajson.getAll().then((res)=>{
            return(
                setMyArr(res)
            )
        })
    },[myarr])
  return (
    <div className='design-section'>
        <div className='container'>
           {myarr.map((item, index) => {
            return(
              <DesignSctionItem item={item} key={index}/>
            )
           })}
        </div>
    </div>
  )
}
