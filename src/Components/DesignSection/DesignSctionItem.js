import React from 'react'

export default function DesignSctionItem(props) {
    const {item} = props;
  return (
    <>
    {item.id === 1 || item.id === 3 ? (
       <div className={item.id === 1 || item.id === 3 ? 'box box1': 'box'}>
       <div className='box-content'>
          <div className='box-img'>
          <img src={item.image} alt="design section"/>
          </div>
           <h3 className='box-head'>{item.head}</h3>
           <p className='box-text'>{item.text}</p>
       </div>  
     </div> 
    ) : 
    (
      <div className={item.id === 2 ? 'box box2': 'box'}>
    
          <div className='box-img'>
             <img src={item.image} alt="design section"/>
           </div>
      <div className='box-content'>
         <h3 className='box-head'>{item.head}</h3>
         <p className='box-text'>{item.text}</p>
         <p className='box-price'>{item.text_price}<b>{item.price}</b></p>
         <button className='box-btn'>{item.btn_text}</button>
      </div>
   </div> 
    )}
   
   
      
  </>
  )
}
