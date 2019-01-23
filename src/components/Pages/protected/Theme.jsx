import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setTheme } from '../../../actions'
import './Theme.scss'
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
    const { theme } = this.props
    return (
      <div className='theme__container'>
        {theme && (
          <>
            <div className='theme__image'>
              <img
                src={theme.theory.image}
                alt='imagen de tema'
                className='theme__image-img'
              />
            </div>
            <div className='theme__theory'>{theme.theory.text}</div>
          </>
        )}
      </div>
    )
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
