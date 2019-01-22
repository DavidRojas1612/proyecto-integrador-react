import React, { Component } from 'react'
import { connect } from 'react-redux'

class Theme extends Component {
  render () {
    console.log(this.props)
    return <div />
  }
}

const mapStateToProps = ({ theme }) => ({ theme })
export default connect(
  mapStateToProps,
  null
)(Theme)
