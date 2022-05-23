import React from 'react'

import { Switch, Route, BrowserRouter as Router} from 'react-router-dom'

import Login from '../containers/Login'
import Register from '../containers/Register'
import Repair from '../containers/Repair'


function Routes(){
    return (
        <Router>
            <Switch>
                <Route component={Login} path="/login"></Route>
                <Route component={Register} path="/register"></Route>
                <Route component={Repair} path="/repair"></Route>
            </Switch>
        </Router>
    )

}

export default Routes