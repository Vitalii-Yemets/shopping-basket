import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getCategories, selectedCategory } from '../../redux/actions'

import BaseSpinnerService from '../../services/baseSpinnerService'
import ServicePool from '../../services/servicePool'
import { isDifferent } from 'jsutils/arrays'

import Spinner from '../../components/Spinner'
import Navbar from '../../components/Navbar'
import Categories from '../../components/Categories'

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
      categories,
      selectedCategory
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
            catalog
          </div>
        </div>
      </div>
    </div>
  }
}

const mapStateToProps = state => ({
  categories: state.shopState.categories
})

const mapDispatchToProps = dispatch => ({
  getCategories: () => dispatch(getCategories()),
  selectedCategory: category => dispatch(selectedCategory(category))
})

export default connect(mapStateToProps, mapDispatchToProps)(Shop)
