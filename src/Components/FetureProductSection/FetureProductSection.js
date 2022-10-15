import React, { useEffect, useState } from 'react'
import products from './Api/Api'
import FeatureItem from './FeatureItem';
import './FetureProductSection.css'

export default function FetureProductSection() {

    const [productArr, setProductArr] = useState([]);

    useEffect(() => {
        products.getAllFeatureProduct().then((res) => setProductArr(res))
    }, [productArr])

  return (
    <div className='FetureProductSection'>
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
