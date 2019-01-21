import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux' 
import './App.scss';
import Toolbar from './components/Molecules/Toolbar';
import Routes from './components/Routes/Routes';


class App extends Component {
  render() {
    const { authed } = this.props
    return (
      <div className="App">
        <Toolbar />
        <Router>
            <Routes authed={authed}></Routes>
        </Router>
      </div>
    );
  }
}
const mapStateToProps = ({authed}) => ({authed})

export default connect(mapStateToProps, null )(App);
