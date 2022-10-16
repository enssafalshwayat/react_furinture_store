import React, { useEffect, useState } from 'react'
import DesignSctionItem from './DesignSctionItem.js'
import './DesignSection.css'
import { mydata } from './Data.js'
export default function DesignSection() {

    const [myarr, setMyArr] = useState([])

    useEffect(() => {
       setMyArr(mydata)
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
