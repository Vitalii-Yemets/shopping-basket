import React, { Component } from 'react'
import classNames from 'classnames'
import './CardProduct.css'

class CardProduct extends Component {
    render = () => {
        const {
            product,
            productsInBasket,
            addToShoppingBasket,
            removeToShoppingBasket
        } = this.props

        const hasInBasket = productsInBasket.filter(title => product.title === title).length
        const stringPrice = product.price.toString()
        const price = parseFloat(`${stringPrice.slice(0, stringPrice.length - 2)}.${stringPrice.slice(stringPrice.length - 2, stringPrice.length)}`)

        const style = classNames('card', hasInBasket ? 'in-basket' : '')

        return <div className={style} style={{ "width": "12rem" }}>
            <div className='card-img'>
                <img src={product.img.s150x150} className="card-img-top" alt="card-img-top"></img>
            </div>

            <div className='group-btn'>
                <div className='remove-btn' onClick={() => removeToShoppingBasket(product)}>-</div>
                <div className='add-btn' onClick={() => addToShoppingBasket(product)}>+</div>
            </div>


            <div className='only-add-btn' onClick={() => addToShoppingBasket(product)}>
                <span>Додати<i className="material-icons">shopping_cart</i></span>
            </div>


            <div className="card-body">
                <p className="card-price">{price}грн</p>
                <p className="card-info">{product.title}</p>
                <p className="card-weight">{product.weight}г</p>
            </div>
        </div>
    }
}

export default CardProduct