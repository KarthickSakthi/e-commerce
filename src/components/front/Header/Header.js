import React from 'react'
import {Link} from 'react-router-dom'
import "./Header.css"
const Header = ({cartItem} ) => {
    return (
        <header className='header'>
            {/*14:27*/}
            <div>
                <h1>
                    <Link to="/" className="logo"> Electronic Gadgets  </Link>
                </h1>
            </div>
            <div className='header-links'>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to="/signup">Signup</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to="/cart" className="cart"><i class="fas fa-shopping-cart"></i></Link>
                   <span className='cart-count'>
                       {cartItem.length===0 ? "":cartItem.length}
                   </span>
                </li>
            </ul>

            
            </div>
        </header>
    )
}

export default Header
