import React, { Component } from 'react'
import './MySliders.css'
import { mydata } from './sliders'
import Slider from 'react-slick'
import SliderContent from './SliderContent'




export default class MySliders extends Component {
    state = {
        sliders: []
    }

    componentDidMount = ()=> {
        this.setState({
            sliders: mydata
        })
    }


  render() {
    const settings = {
        dots: true,
        inifinte: true,
        speed: 500,
        slideToShow:1,
        autoplay: true,
        slideToScroll:1,
        fade: true, 
    }
    return (
        <div>
            <div className='slider-container container'>                
                 <Slider {...settings}>
                    {this.state.sliders.map((item,index)=> {
                        return(
                            <SliderContent key={index} item={item} />
                        )
                    })}
                </Slider>  
          </div>
        </div>
      
    )
  }
}










