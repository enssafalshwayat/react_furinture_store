import React, { Component } from 'react'
import './MySliders.css'
import { sliders } from './sliders'
import Slider from 'react-slick'
import SliderContent from './SliderContent'




export default class MySliders extends Component {
    state = {
        slider: []
    }

    componentDidMount = ()=> {
        this.setState({
            slider: sliders
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
}










