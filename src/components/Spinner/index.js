import React, { Component } from 'react'
import classNames from 'classnames'
import './Spinner.css'

class Spinner extends Component {
    render = () => {
        const styles = classNames(
            this.props.spinnerService.getSpinnerState()
                ? 'show-spinner d-flex justify-content-center'
                : 'hide-spinner'
        )

        return <div className={styles}>
            <div className='spinner'>
                <div className='spinner-circle spinner-circle-outer'></div>
                <div className='spinner-circle-off spinner-circle-inner'></div>
                <div className='spinner-circle spinner-circle-single-1'></div>
                <div className='spinner-circle spinner-circle-single-2'></div>
            </div>
        </div>
    }
}


export default Spinner


