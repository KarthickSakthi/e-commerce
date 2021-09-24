import React from 'react'
import './Cart.css'
import CartEmpty from '../../../components/images/Empty-Cart.jpg'
const Cart = ({cartItem ,handleAddProduct, handleRemoveProduct,ClearHandleCart}) => {
    const totalPrice=cartItem.reduce((price,item)=>price+ item.quantity * item.price,0)
    return (
        <div className='cart-items'>
          {cartItem.length >=1 && (  <h2  className='card-items-header '>My Items</h2>)}
          <div className='clear-cart'>
               {cartItem.length >=1 && ( 
                   <div>
                  
               <button className='clear-cart-button' onClick={ClearHandleCart}>Clear My Cart</button> </div>)}
          </div>

          {cartItem.length===0 && (<img style={{marginLeft:'4%'}} src={CartEmpty} ></img>)}
          {

              cartItem.map((item)=>(
                  <div key={item.id} className='cart-items-list'>
                      <img className='cart-items-image' src={item.image} alt={item.name}/> 
                       <div className='cart-data'>
                      <div className='cart-items-name'>{item.description}</div>    
                      <div className='cart-items-function'>
                         <button className='cart-item-add' onClick={()=>handleAddProduct(item)}>Add</button>
                         <button className='cart-item-remove' onClick={()=>handleRemoveProduct(item)}>Remove</button>
                    </div>
                    <div className='cart-itemprice' >{item.quantity}* &#x20b9;{item.price}</div>
                 </div>
                  </div>
              ))
              
          }
 { cartItem.length>0 &&(
    <div className='cart-item-total-price-heading'>
                Total Price
             <div className='cart-item-total-price'>(&#x20b9;{totalPrice})
          </div>
          </div>   )
          }
        </div>
    )
}

export default Cart
