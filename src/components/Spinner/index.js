import React, { Component } from 'react'
import { SpinnerContext } from '../../services/baseSpinnerService'
import './Spinner.css'

class Spinner extends Component {
    render = () => <SpinnerContext.Consumer>
        {
            spinnerService => (<div className={spinnerService.getSpinnerState()
                ? 'show-spinner d-flex justify-content-center'
                : 'hide-spinner'}>
                <div className='spinner'>
                    <div className='spinner-circle spinner-circle-outer'></div>
                    <div className='spinner-circle-off spinner-circle-inner'></div>
                    <div className='spinner-circle spinner-circle-single-1'></div>
                    <div className='spinner-circle spinner-circle-single-2'></div>
                </div>
            </div>)
        }
    </SpinnerContext.Consumer>
}


export default Spinner


