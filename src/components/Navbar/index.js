import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './Navbar.css'

class Navbar extends Component {
    render = () => {
        const { productsCount, totalPrice } = this.props

        return <div className='navbar'>
            <a className='brand-logo' href='http://www.zakaz.ua'>zakaz.ua</a>

            <Link className='basket-state' to='/shopping-basket'>
                <div className='basket-state-content'>
                    <span className='cart-icon-wrapper' data-badge={productsCount}>
                        <i className="material-icons">shopping_cart</i>
                    </span>
                    <div className='total'>{totalPrice}</div>
                </div>
            </Link>

        </div>
    }
}

export default Navbar