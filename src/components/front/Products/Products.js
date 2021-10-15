import React from 'react'
import './Products.css'
import Carousel from 'react-elastic-carousel'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Products = ({productItems ,HeadsetandSpeakers,handleAddProduct,SmartPhones,handleRemoveProduct}) => {
    console.log("Products.js")
    console.log(productItems)

    var settings = {
        dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows: false,
      responsive: [
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
      ]
    };
  

 

    return (
        
        <div className='products'>
           <h2  className='product-title '>Laptops</h2>
            <Carousel itemsToShow={5}>
            {
                productItems.map((product,key)=>(
                 <div className='card'> 
                     <div > 
                       <img id='product-image'
                       
                        src={product.image} 
                        alt={product.name}/>
                    </div >   
                    <div className='product-data'>
                  {/** <h3 className='product-name'>
                        {product.name}
                    </h3> */} 
                    <h5  className='product-description'>
                        {product.description}
                    </h5>
                    <div className='product-price'><b>&#x20b9;{product.price}</b></div>
                    <div > <button className='product-add-button' onClick={()=>handleAddProduct(product)}>Add to Cart </button></div>
                    </div>
                </div>
                ))
            }
            </Carousel>
            <h2  className='product-title '>HeadSet and Speakers</h2>
            <Carousel itemsToShow={5}>
            {
            HeadsetandSpeakers.map((product,key)=>(
                 <div className='card'> 
                     <div > 
                       <img id='product-image'
                       
                        src={product.image} 
                        alt={product.name}/>
                    </div >   
                    <div className='product-data'>
                  {/** <h3 className='product-name'>
                        {product.name}
                    </h3> */} 
                    <h5  className='product-description'>
                        {product.description}
                    </h5>
                    <div className='product-price'><b>&#x20b9;{product.price}</b></div>
                    <div > <button className='product-add-button' onClick={()=>handleAddProduct(product)}>Add to Cart </button></div>
                    </div>
                </div>
                ))
            }
            </Carousel>
            <h2  className='product-title '>Smart Phones</h2>
            <Carousel itemsToShow={5}>
            {
            SmartPhones.map((product,key)=>(
                 <div className='card'> 
                     <div > 
                       <img id='product-image'
                       
                        src={product.image} 
                        alt={product.name}/>
                    </div >   
                    <div className='product-data'>
                  {/** <h3 className='product-name'>
                        {product.name}
                    </h3> */} 
                    <h5  className='product-description'>
                        {product.description}
                    </h5>
                    <div className='product-price'><b>&#x20b9;{product.price}</b></div>
                    <div > <button className='product-add-button' onClick={()=>handleAddProduct(product)}>Add to Cart </button></div>
                    </div>
                </div>
                ))
            }
            </Carousel>
        </div>
        
        
    )
}

export default Products
