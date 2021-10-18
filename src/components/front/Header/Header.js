import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import "./Header.css"
const Header = ({cartItem} ) => {
    const[isMobile,setIsMobile]=useState(false);
    return (
        <header className='navbar'>
            <h3 className='logo'>Electronic Gadgets</h3>
            <ul className={isMobile?'nav-links-mobile':'nav-links'}
            onClick={()=>{setIsMobile(false)}}>
                <Link to='/' className='home' >
                <li>Home</li>
                </Link>
                <Link to='/Signup' className='Signup' >
                <li>Signup</li>
                </Link>
                <Link to='/Cart' className='Cart' >
                <li>Cart</li>
                </Link>
                <li>
                    <Link to="/Cart" className="Cart"><i class="fas fa-shopping-cart"></i>
                   <sup><span className='cart-count'>
                       {cartItem.length===0 ? "":cartItem.length}
                   </span></sup>
                   </Link>
                </li>
            </ul>
            <button className='mobile-menu-icon' onClick={()=>setIsMobile(!isMobile)}>
            {
                isMobile?(<i className='fas fa-times'></i>):(<i className='fas fa-bars'></i>)
            }
            </button>
          {/*  <div>
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
                    <Link to="/Signup">Signup</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to="/Cart" className="cart"><i class="fas fa-shopping-cart"></i></Link>
                   <span className='cart-count'>
                       {cartItem.length===0 ? "":cartItem.length}
                   </span>
                </li>
            </ul>
                       <Link to="/Cart" className="Cart"><i class="fas fa-shopping-cart"></i>
                <li>
                    
                  <sup>  <span className='cart-count'>
                       {cartItem.length===0 ? "":cartItem.length}
                   </span> </sup>
                </li>
                </Link>
            
            </div> */}
        </header>
    )
}

export default Header
