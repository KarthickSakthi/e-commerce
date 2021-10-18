import React from 'react'
import {Route,Switch} from 'react-router-dom'
import Products from '../Products/Products'
import Header from '../Header/Header'
import Signup from '../Signup/Signup'
import Cart  from '../Cart/Cart'
import MultiProducts from '../../MultiProducts/MultiProducts'
import BannerSlide from '../../BannerSlide/BannerSlide'
const Routes = ({productItems ,cartItem ,HeadsetandSpeakers,SmartPhones,handleAddProduct,handleRemoveProduct , ClearHandleCart}) => {
    return (
        <div>
            <Switch>
                <Route path='/' exact >
                <BannerSlide/>
                <MultiProducts productItems={productItems} 
                handleAddProduct={handleAddProduct}
                HeadsetandSpeakers={HeadsetandSpeakers} 
                SmartPhones={SmartPhones}/>
               {/*<Products productItems={productItems} 
                HeadsetandSpeakers={HeadsetandSpeakers} 
                SmartPhones={SmartPhones}
                handleAddProduct={handleAddProduct}
    handleRemoveProduct={handleRemoveProduct}/>*/}</Route>
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
