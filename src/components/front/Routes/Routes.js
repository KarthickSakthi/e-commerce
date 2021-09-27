import React from 'react'
import {Route,Switch} from 'react-router-dom'
import Products from '../Products/Products'
import Header from '../Header/Header'
import Signup from '../Signup/Signup'
import Cart  from '../Cart/Cart'
const Routes = ({productItems ,cartItem ,HeadsetandSpeakers,SmartPhones,handleAddProduct,handleRemoveProduct , ClearHandleCart}) => {
    return (
        <div>
            <Switch>
                <Route path='/' exact >
                    <Products productItems={productItems} 
                HeadsetandSpeakers={HeadsetandSpeakers} 
                SmartPhones={SmartPhones}
                handleAddProduct={handleAddProduct}
                 handleRemoveProduct={handleRemoveProduct}/></Route>
                <Route path='/Signup' exact> <Signup/></Route>
                <Route path='/Cart' exact> 
                <Cart  cartItem={cartItem} 
                handleAddProduct={handleAddProduct} 
                handleRemoveProduct={handleRemoveProduct}
                 ClearHandleCart={ClearHandleCart}/></Route>
            </Switch>
        </div>
    )
}

export default Routes
