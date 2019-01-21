import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import Dashboard from '../Pages/protected/Dashboard'
import Theme from '../Pages/protected/Theme'

const PrivateRoute = ({ component: Component, authed, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      authed === true ? <Component {...props} /> : <Redirect to='/' />
    }
  />
)

const PublicRoute = ({ component: Component, authed, rest }) => (
  <Route
    {...rest}
    render={props =>
      authed === false ? <Component {...props} /> : <Redirect to='/dashboard' />
    }
  />
)

const Routes = ({ authed }) => (
  <Switch>
    <PublicRoute path='/' authed={authed} exact component={HomePage} />
    <PrivateRoute
      authed={authed}
      exact
      path='/dashboard'
      component={Dashboard}
    />
    <PrivateRoute
      exact
      path='/dashboard/:id'
      authed={authed}
      component={Theme}
    />
  </Switch>
)

export default Routes
