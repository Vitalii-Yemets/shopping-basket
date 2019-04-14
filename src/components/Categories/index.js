import React, { Component } from 'react'
import classNames from 'classnames'
import './Categories.css'

class Categories extends Component {
    render = () => {
        const {
            categories,
            selectCategory,
            selectedCategory
        } = this.props

        return <div className='categories'>
            <p>Товары</p>
            <ul>
                {
                    categories.map((category, key) =>
                        <li className={classNames(category.id === selectedCategory.id ? 'active' : '')} onClick={() => selectCategory(category)} key={key} >
                            {category.title}
                        </li>
                    )
                }
            </ul>
        </div>
    }
}

export default Categories