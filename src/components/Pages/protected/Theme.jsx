import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setTitle, getTheme, getThemes } from '../../../actions'

class Theme extends Component {
  componentDidMount () {
    const {
      themes,
      match: {
        params: { id }
      }
    } = this.props
    if (this.props.themes) {
      this.props.getTheme(themes[id])
    } else {
      this.props.getThemes()
    }
  }
  render () {
    console.log(this.props.themes, this.props.theme)
    return <div />
  }
}

const mapDispatchToProps = dispatch => ({
  setTitle: val => dispatch(setTitle(val)),
  getTheme: val => dispatch(getTheme(val)),
  getThemes: () => dispatch(getThemes())
})

const mapStateToProps = ({ themes, theme }) => ({ themes, theme })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Theme)
