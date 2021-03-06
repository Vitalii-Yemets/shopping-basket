import React from 'react'
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import Shop from './components/Shop'
import ShoppingBasket from './components/ShoppingBasket'

export default () => <Router>
    <Switch>
        <Route path='/' component={Shop} exact />
        <Route path='/shopping-basket' component={ShoppingBasket} />
        <Redirect from='*' to='/' />
    </Switch>
</Router>
