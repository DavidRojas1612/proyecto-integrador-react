import React, { Component } from 'react'
import { connect } from 'react-redux'
import Loader from '../../Atoms/Loader'
import { getThemes } from '../../../actions'
import ThemeList from '../../organisms/ThemeList'
import './Dashboard.scss'

class Dashboard extends Component {
  componentDidMount () {
    if (this.props.themes) return null
    else this.props.getThemes()
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
  getThemes: () => dispatch(getThemes())
})
const mapStateToProps = ({ themes }) => ({ themes })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)
