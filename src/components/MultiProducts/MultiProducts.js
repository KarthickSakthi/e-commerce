import React from 'react'
import '../MultiProducts/MultiProducts.css'
import Slider from 'react-slick'

import  Data  from '../back/data/Data'
import { ArrowBackIos,  ArrowForwardIos } from '@material-ui/icons'
import { BannerSecImages } from '../BannerSlide/Bannerdata'
const PreviousBtn=(props)=>{
    console.log(props)
    const{className,onClick}=props
    return(
        <div className={className} onClick={onClick}>
           <ArrowBackIos className='Arrow-left-Style'/>
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
const MultiProducts = ({productItems,HeadsetandSpeakers,handleAddProduct,SmartPhones}) => {
    var settings = {
      dots: true,
      infinite: true,
      autoplay: false,
      autoplaySpeed: 2000,
      initialSlide:1,
      slidesToScroll:4,
      prevArrow:<PreviousBtn/>,
      nextArrow:<NextBtn/>,
     /* responsive: [
        {
          breakpoint: 320,
          settings: { slidesToShow: 1, slidesToScroll: 1, infinite: false }
        },
        {
          breakpoint: 768,
          settings: { slidesToShow: 2, slidesToScroll: 2, infinite: false }
        },
        {
          breakpoint: 1024,
          settings: { slidesToShow: 3, slidesToScroll: 3, infinite: false }
        }
      ]*/
      
      };
    
    return (
        <div>
            <div className='BannerSecimgcontainer'>
            <img src={BannerSecImages[1]} className='BannerSecimg1'></img>
            <img src={BannerSecImages[3]} className='BannerSecimg1'></img>
        </div>
    <div className='product-title-container'>
   <h2  className='product-title '>Laptops</h2>
  <span><button className='ViewBtn'> View All</button></span>
  </div>
        <div  className='Products-Slide-Container'>
        
            <Slider {...settings} slidesToShow={4}>
                {
                  productItems.map(prod=>(
                     <div >
                        <img src={prod.image} className='imgStyle'></img>
                        <p className='product-name'>{prod.name}</p>
                        <p className='product-price'><b><sup>&#x20b9;</sup>{prod.price}</b></p>
                      
                        <div > <button className='product-add-button ' onClick={()=>handleAddProduct(prod)}>Add to Cart </button></div>
                    </div>
                    ))
                }
              
               
            </Slider>
        </div>
        <div className='BannerSecimgcontainer'>
        <img src={BannerSecImages[0]} className='BannerSecimg2' ></img>
        </div>
         
        <div className='product-title-container'>
           <h2  className='product-title '>HeadSet and Speakers</h2>
        <span><button className='ViewBtn'> View All</button></span>
            </div>          
        <div  className='Products-Slide-Container'>
      
            <Slider {...settings} slidesToShow={4}>
                {
                      HeadsetandSpeakers.map(prod=>(
                     <div >
                        <img src={prod.image} className='imgStyle'></img>
                        <p className='product-name'>{prod.name}</p>
                        <p className='product-price'><b><sup>&#x20b9;</sup>{prod.price}</b></p>
                      
                        <div > <button className='product-add-button ' onClick={()=>handleAddProduct(prod)}>Add to Cart </button></div>
                    </div>
                    ))
                }
              
               
            </Slider>
        </div>
        <div style={{display:'flex',justifyContent:'center'}}>
            <img src={BannerSecImages[2]} className='BannerSecimg3'></img>
        </div>
        <div className='product-title-container'>
           <h2  className='product-title '>SmartPhones</h2>
          <span><button className='ViewBtn'> View All</button></span>
            </div> 
        <div  className='Products-Slide-Container'>
        
            <Slider {...settings} slidesToShow={4}>
                {
                    SmartPhones.map(prod=>(
                     <div >
                        <img src={prod.image} className='imgStyle'></img>
                        <p className='product-name'>{prod.name}</p>
                        <p className='product-price'><b><sup>&#x20b9;</sup>{prod.price}</b></p>
                        <div > <button className='product-add-button ' onClick={()=>handleAddProduct(prod)}>Add to Cart </button></div>
                    </div>
                    ))
                }
              
               
            </Slider>
        </div>

        </div>
    )
}

export default MultiProducts
