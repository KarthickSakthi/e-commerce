import React from 'react'
import '../BannerSlide/BannerSlide.css'
import Slider from 'react-slick'

import { data } from './Bannerdata'
import { ArrowBackIos,  ArrowForwardIos } from '@material-ui/icons'

const PreviousBtn=(props)=>{
    console.log(props)
    const{className,onClick}=props
    return(
        <div className={className} onClick={onClick}>
           <ArrowBackIos style={{color:'Black'}}/>
       </div>   
    )
}
const NextBtn=(props)=>{
    const{className,onClick}=props
    return(
        <div className={className} onClick={onClick}>
              <ArrowForwardIos style={{color:'Black'}}/>
        </div>
    )
}
const BannerSlide = () => {
    var settings = {
      dots: true,
      infinite: true,
      autoplay: false,
      autoplaySpeed: 2000,
      initialSlide:1,
      prevArrow:<PreviousBtn/>,
      nextArrow:<NextBtn/>
      };
    return (
        <div style={{margin:'2%'}}>
            <Slider {...settings}>
                {
                    data.map(item=>(
                     <div >
                        <img src={item} style={{width:'100%',height:'50vh'}}></img>
                    </div>
                    ))
                }
              
               
            </Slider>
        </div>
    )
}

export default BannerSlide
