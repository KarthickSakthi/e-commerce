import React from 'react'
import {Route,Switch} from 'react-router-dom'
import Products from '../Products/Products'
import Header from '../Header/Header'
import Signup from '../Signup/Signup'
import Cart  from '../Cart/Cart'
const Routes = ({productItems ,cartItem}) => {
    return (
        <div>
          
            <Switch>
                <Route path='/' exact ><Products productItems={productItems}/></Route>
                <Route path='/Signup' exact> <Signup/></Route>
                <Route path='/Cart' exact> <Cart  cartItem={cartItem}/></Route>
            </Switch>
        </div>
    )
}

export default Routes
