import React, { Component } from 'react'
import './MySliders.css'
import Slider from 'react-slick'
import SliderContent from './SliderContent'
export default class MySliders extends Component {
    state = {
        slider: [
            {   id: 1,
                image: '/images/slide2.png',
                titleS: 'Great Design Collection',
                title: 'Cloth Covered Accent Chair',
                description:'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiuiana Smod Tempor Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip.',
                newPrice: '$399.00',
                oldPrice: '$499.00'
            },
            {   id: 2,
                image: '/images/slide5.png',
                titleS: 'Great Design Collection',
                title: 'Mapple Wood Accent Chair',
                description:'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiuiana Smod Tempor Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip.',
                newPrice: '$499.00',
                oldPrice: '$599.00'
            },
            {   id: 3,
                image: '/images/slide6.jpg',
                titleS: 'Great Design Collection',
                title: 'Valvet Accent Arm Chair',
                description:'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiuiana Smod Tempor Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip.',
                newPrice: '$199.00',
                oldPrice: '$299.00'
            },

        ]
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










