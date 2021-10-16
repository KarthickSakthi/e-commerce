import React from 'react'
import '../MultiProducts/MultiProducts.css'
import Slider from 'react-slick'

import  Data  from '../back/data/Data'
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
const MultiProducts = ({handleAddProduct,productItems}) => {
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
        <div style={{margin:'2%',textAlign:'center'}}>
            <Slider {...settings} slidesToShow={4}>
                {
                    productItems.map(prod=>(
                     <div  className='Products-Slide-Container'>
                        <img src={prod.image} className='imgStyle'></img>
                        <p>{prod.name}</p>
                        <p>{prod.price}</p>
                      
                        <div > <button className='product-add-button ' onClick={()=>handleAddProduct(prod)}>Add to Cart </button></div>
                    </div>
                    ))
                }
              
               
            </Slider>
        </div>
    )
}

export default MultiProducts
