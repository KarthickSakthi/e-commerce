import React from 'react'
import './Products.css'

const Products = ({productItems ,handleAddProduct,handleRemoveProduct}) => {
    console.log("Products.js")
    console.log(productItems)
    return (
        <div className='products'>
            {
                productItems.map((product,key)=>(
                 <div className='card'> 
                     <div > 
                       <img id='product-image'
                       
                        src={product.image} 
                        alt={product.name}/>
                    </div >   
                    <div className='product-data'>
                    <h3 className='product-name'>
                        {product.name}
                    </h3>
                    <h5 className='product-description'>
                        {product.description}
                    </h5>
                    <div className='product-price'>&#x20b9;{product.price}</div>
                    <div > <button className='product-add-button' onClick={()=>handleAddProduct(product)}>Add to Cart </button></div>
                    </div>
                </div>
                ))
            }
        </div>
    )
}

export default Products
