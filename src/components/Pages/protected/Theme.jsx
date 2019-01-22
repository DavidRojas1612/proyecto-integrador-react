import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setTheme } from '../../../actions'

class Theme extends Component {
  componentDidMount () {
    const {
      themes,
      handleOnSetTheme,
      match: {
        params: { id }
      }
    } = this.props

    handleOnSetTheme(themes[id])
  }

  render () {
    return <div> {JSON.stringify(this.props.theme)} </div>
  }
}

const mapStateToProps = ({ themes, theme }) => ({ themes, theme })

const mapDispatchToProps = dispatch => ({
  handleOnSetTheme: theme => dispatch(setTheme(theme))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Theme)
