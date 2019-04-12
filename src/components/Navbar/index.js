import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './Navbar.css'

import CartSvg from '../../assets/cart-24px.svg'

class Navbar extends Component {
    render = () => {
        return <nav className='navbar navbar-dark sticky-top justify-content-between'>
            <a className="navbar-brand" href="http://www.zakaz.ua">
                zakaz.ua
            </a>
            <Link className='cart-icon' to='/cart'>
                <img src={CartSvg} alt='cart-img' />
            </Link>
        </nav>
    }
}

export default Navbar