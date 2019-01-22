import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'
import './App.scss'
import Toolbar from './components/Molecules/Toolbar'
import Routes from './components/Routes/Routes'
import firebase from 'firebase/app'
import 'firebase/auth'
import { isAuthed } from './actions'
import Loader from './components/Atoms/Loader'

class App extends Component {
  state = {
    loading: true
  }

  componentDidMount () {
    this.setState({ loading: true })
    this.unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.isAuthed({ authed: true, user })
        this.setState({ loading: false })
      } else {
        this.props.isAuthed({ authed: false, user: null })
        this.setState({ loading: false })
      }
    })
  }

  componentWillUnmount () {
    if (this.unsubscribe) this.unsubscribe()
  }

  render () {
    const { authed } = this.props
    const { loading } = this.state
    return (
      <div className='App'>
        <>
          {loading ? (
            <Loader />
          ) : (
            <>
              <Router>
                <>
                  <Toolbar />
                  <Routes authed={authed} />
                </>
              </Router>
            </>
          )}
        </>
      </div>
    )
  }
}
const mapStateToProps = ({ authed }) => ({ authed })

const mapDispatchToProps = dispatch => ({
  isAuthed: val => dispatch(isAuthed(val))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
