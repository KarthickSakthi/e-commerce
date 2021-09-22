import React from 'react'
import './Cart.css'

const Cart = ({cartItem ,handleAddProduct, handleRemoveProduct}) => {
    const totalPrice=cartItem.reduce((price,item)=>price+ item.quantity * item.price,0)
    return (
        <div className='cart-items'>
          <div  className='card-items-header '></div>

          {cartItem.length===0 && (<div className='cart-items-empty'>No Items are Available</div>)}
          {

              cartItem.map((item)=>(
                  <div key={item.id} className='cart-items-list'>
                      <img className='cart-items-image' src={item.image} alt={item.name}/> 
                      <div className='cart-items-name'>{item.name}</div>    
                      <div className='cart-items-function'>
                         <button className='cart-item-add' onClick={()=>handleAddProduct(item)}>+</button>
                         <button className='cart-item-remove' onClick={()=>handleRemoveProduct(item)}>-</button>
                    </div>
                    <div className='cart-itemprice'>{item.quantity}* ${item.price}</div>
             
                  </div>
              ))
              
          }
    <div className='cart-item-total-price-heading'>
                Total Price
             <div className='cart-item-total-price'>${totalPrice}
          </div>
          </div>   
        </div>
    )
}

export default Cart
