import React, { Component } from 'react'
import { connect } from 'react-redux'
import { isDifferent } from 'jsutils/arrays'

import ServicePool from '../../services/servicePool'
import { BaseSpinnerService, SpinnerContext } from '../../services/baseSpinnerService'
import { getCategories, selectCategory, addToShoppingBasket, removeToShoppingBasket } from '../../redux/actions'
import Spinner from '../Spinner'
import Navbar from '../Navbar'
import Categories from '../Categories'
import CardProduct from '../CardProduct'

import './Shop.css'

class Shop extends Component {
  componentWillMount = () => {
    const { getCategories } = this.props
    getCategories()
  }

  shouldComponentUpdate = prevProps => {
    const shouldUpdate = isDifferent(
      this.props.categories,
      prevProps.categories,
      (el1, el2) => el1 === el2
    )

    return shouldUpdate
  }

  render = () => {
    const {
      catalog,
      categories,
      selectedCategory,
      selectCategory,
      productsCount,
      productsInBasket,
      totalPrice,
      addToShoppingBasket,
      removeToShoppingBasket
    } = this.props

    const navbarProps = {
      productsCount,
      totalPrice
    }

    const categoriesProps = {
      categories,
      selectedCategory,
      selectCategory
    }

    return <>
      <SpinnerContext.Provider value={ServicePool.getService(BaseSpinnerService)}>
        <Spinner />
      </SpinnerContext.Provider>
      <Navbar {...navbarProps} />
      <Categories {...categoriesProps} />
      <div className='catalog'>
        {
          catalog && catalog.map(
            (product, key) => {
              const cardProductProps = {
                product,
                productsInBasket,
                addToShoppingBasket,
                removeToShoppingBasket
              }
              return <CardProduct key={key} {...cardProductProps} />
            })
        }
      </div>
    </>
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
  catalog: state.catalog,
  productsCount: Object.keys(state.shoppingBasket).length,
  productsInBasket: Object.keys(state.shoppingBasket),
  totalPrice: state.totalPrice.toFixed(2),
  selectedCategory: state.selectedCategory
})

const mapDispatchToProps = dispatch => ({
  getCategories: () => dispatch(getCategories()),
  selectCategory: category => dispatch(selectCategory(category)),
  addToShoppingBasket: product => dispatch(addToShoppingBasket(product)),
  removeToShoppingBasket: product => dispatch(removeToShoppingBasket(product)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Shop)
