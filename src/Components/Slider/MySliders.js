import React, { Component, useEffect, useState } from 'react'
import './MySliders.css'
import { mydata } from './sliders'
import Slider from 'react-slick'
import SliderContent from './SliderContent'

// import React from 'react'

export default function MySliders() {
    const [sliders, setsliders] = useState([])
    const settings = {
        dots: true,
        inifinte: true,
        speed: 500,
        slideToShow:1,
        autoplay: true,
        slideToScroll:1,
        fade: true, 
    }

    useEffect(()=>
    setsliders(mydata)
        
    , [sliders])
  return (
    <div>
            <div className='slider-container container'>                
                 <Slider {...settings}>
                    {this.state.slider.map((item,index)=> {
                        return(
                            <SliderContent key={index} item={item} />
                        )
                    })}
                </Slider>  
          </div>
        </div>
  )
}



// export default class MySliders extends Component {
//     state = {
//         slider: mydata
//     }
//   render() {
//     console.log(this.state.slider.image)
//     const settings = {
//         dots: true,
//         inifinte: true,
//         speed: 500,
//         slideToShow:1,
//         autoplay: true,
//         slideToScroll:1,
//         fade: true, 
//     }
//     return (
//         <div>
//             <div className='slider-container container'>                
//                  <Slider {...settings}>
//                     {this.state.slider.map((item,index)=> {
//                         return(
//                             <SliderContent key={index} item={item} />
//                         )
//                     })}
//                 </Slider>  
//           </div>
//         </div>
      
//     )
//   }
// }










