import React from 'react'
import {Route,Switch} from 'react-router-dom'
import Products from '../Products/Products'
import Header from '../Header/Header'
const Routes = () => {
    return (
        <div>
           <Header/>
            <Switch>
                <Route path='/' exact component={Products}></Route>
            </Switch>
        </div>
    )
}

export default Routes
