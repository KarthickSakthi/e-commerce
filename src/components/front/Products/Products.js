import React from 'react'
import './Products.css'

const Products = ({productItems}) => {
    console.log("Products.js")
    console.log(productItems)
    return (
        <div className='products'>
            {
                productItems.map((product,key)=>(
                 <div className='card'> 
                     <div> 
                       <img classname='product-image'
                        src={product.image} 
                        alt={product.name}/>
                    </div>   
                    <div className='product-name'>
                        {product.name}
                    </div>
                    <div className='product-price'>${product.price}</div>
                    <div > <button className='product-add-button'>Add to Cart </button></div>

                </div>
                ))
            }
        </div>
    )
}

export default Products
