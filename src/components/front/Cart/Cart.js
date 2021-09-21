import React from 'react'
import './Cart.css'

const Cart = ({cartItem}) => {
    return (
        <div className='cart-items'>
          <div  className='card-items-header No items are gnatched'></div>

          {cartItem.length===0 && (<div className='cart-items-empty'></div>)}
          {

              cartItem.map((item)=>(
                  <div key={item.id} className='cart-items-list'>
                      <img className='cart-items-image' src={item.image} alt={item.name}>
                      </img>
                  </div>
              ))
          }

        </div>
    )
}

export default Cart
