import React, { useEffect, useState } from 'react'
import FeatureItem from './FeatureItem';
import './FetureProductSection.css'
import { mydata } from './Api/Api';

export default function FetureProductSection() {

    const [productArr, setProductArr] = useState([]);

    useEffect(() => {
      setProductArr(mydata)
    }, [productArr])

  return (
    <div id='FetureProductSection' className='FetureProductSection'>
        <h2>Featured Products</h2>
        <div className='container'>
            
               {productArr.map((item, index) => {
                return(
                    <FeatureItem key={index} item={item} index={index} />
                )
               })} 
           
        </div>
    </div>
  )
}
