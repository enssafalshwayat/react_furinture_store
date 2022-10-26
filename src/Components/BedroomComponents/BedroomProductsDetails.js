import React, { useState } from 'react'
import './BedroomProductsDetails.css'
import {useParams} from 'react-router-dom'
import {mydata} from '../../Pages/BedroomPage/API'
export default function BedroomProductsDetails(props) {
  let {id} = useParams();
  const [myproduct, setmyproduct] = useState(mydata[id])
  const [quantity, setquantity] = useState(0);

  const increment = () => {
    setquantity(quantity + 1)
  }

  const decrement = () => {
    if ( quantity > 0) {
      setquantity(quantity - 1)
    } else {
      setquantity(0)
    }
    
  }
  return (
    <div className="card mb-3 productdetails container">
  <div className="row g-0">
    <div className="col-md-4">
      <img src={myproduct.image} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{myproduct.name}</h5>
        <p className="card-text desc">{myproduct.description}</p>
        <p className="card-text">Color: <small className="text-muted">{myproduct.color}</small></p>
        <p className="card-text">Price: {myproduct.price}</p>

        <div className='input-div'>
          <button onClick={decrement}>-</button>
          <input  value={quantity} onChange={()=>setquantity(quantity)} type='number' placeholder='0'/>
          <button onClick={increment}>+</button>
        </div>

        <p>Total: {quantity * myproduct.price} jd </p>
      </div>
    </div>
  </div>
</div>
  )
}
