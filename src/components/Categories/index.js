import React, { Component } from 'react'

import './Categories.css'

class Categories extends Component {
    render = () => {
        const {
            categories,
            selectedCategory
        } = this.props

        return <div className='col-3'>
            <p className='text-lg-center font-weight-bold p-3'>Товары</p>
            <ul className='list-group'>
                {
                    categories.map((category, key) =>
                        <li
                            className='list-group-item text-lg-left list-group-item-mine'
                            onClick={() => selectedCategory(category)}
                            key={key}
                        >
                            {category.title}
                        </li>
                    )
                }
            </ul>
        </div>
    }
}

export default Categories