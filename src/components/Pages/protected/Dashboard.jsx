import React, { Component } from 'react'
import { connect } from 'react-redux'
import Loader from '../../Atoms/Loader'
import { getThemes, setTheme } from '../../../actions'
import ThemeList from '../../organisms/ThemeList'
import './Dashboard.scss'

class Dashboard extends Component {
  state = {
    isResetTitle: false
  }

  componentDidMount () {
    if (!this.props.themes) this.props.getThemes()
    this.props.handleOnSetTheme(null)
  }

  render () {
    const { themes } = this.props
    return (
      <div className='dashboard'>
        {!themes ? <Loader /> : <ThemeList themes={themes} />}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getThemes: () => dispatch(getThemes()),
  handleOnSetTheme: theme => dispatch(setTheme(theme))
})

const mapStateToProps = ({ themes }) => ({ themes })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)
