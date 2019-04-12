import React, { Component } from 'react'

import './CardProduct.css'

class CardProduct extends Component {
    render = () => {
        const {
            product,
            addToShoppingBasket,
            removeToShoppingBasket
        } = this.props

        return <div className="card" style={{ "width": "12rem" }}>
            <img src={product.img.s200x200} className="card-img-top" alt="card-img-top"></img>
            <div className="card-body">
                <div onClick={() => removeToShoppingBasket(product)}>-</div>
                <div onClick={() => addToShoppingBasket(product)}>+</div>
                <h5 className="card-title">{product.price}</h5>

                <p className="card-text">
                    {product.title}
                    {product.weight}
                </p>
            </div>
        </div>
    }
}

export default CardProduct