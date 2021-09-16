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
                     
                       <img src={product.image} alt={product.name}/>
                    </div>   
                </div>
                ))
            }
        </div>
    )
}

export default Products
