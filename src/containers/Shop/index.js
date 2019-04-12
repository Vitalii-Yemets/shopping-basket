import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  getCategories,
  selectedCategory,
  addToShoppingBasket,
  removeToShoppingBasket
} from '../../redux/actions'
import ServicePool from '../../services/servicePool'
import BaseSpinnerService from '../../services/baseSpinnerService'
import { isDifferent } from 'jsutils/arrays'

import Spinner from '../../components/Spinner'
import Navbar from '../../components/Navbar'
import Categories from '../../components/Categories'
import CardProduct from '../../components/CardProduct'

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
      addToShoppingBasket,
      removeToShoppingBasket
    } = this.props

    const categoriesProps = {
      categories,
      selectedCategory
    }

    return <div className='container'>
      <Spinner spinnerService={ServicePool.getService(BaseSpinnerService)} />
      <Navbar />
      <div className="container-fluid">
        <div className='row text-center'>
          <Categories {...categoriesProps} />
          <div className='col-9'>
            {
              catalog && catalog.map((product, key) => {
                const cardProductProps = {
                  product,
                  addToShoppingBasket,
                  removeToShoppingBasket
                }
                
                return <CardProduct key={key} {...cardProductProps} />
              })
            }
          </div>
        </div>
      </div>
    </div>
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
  catalog: state.catalog
})

const mapDispatchToProps = dispatch => ({
  getCategories: () => dispatch(getCategories()),
  selectedCategory: category => dispatch(selectedCategory(category)),
  addToShoppingBasket: product => dispatch(addToShoppingBasket(product)),
  removeToShoppingBasket: product => dispatch(removeToShoppingBasket(product)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Shop)
