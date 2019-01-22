import React from 'react'
import { connect } from 'react-redux'
import Title from '../Atoms/Title'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

const HeaderBar = ({ authed, user, theme, location }) => (
  <>
    {authed ? (
      <>
        <li className='tool'>
          <Title>{user.displayName}</Title>
        </li>
        {theme ? (
          <li className='tool'>
            <Title>{theme.theme}</Title>
          </li>
        ) : (
          <Title>{'Topics Board'}</Title>
        )}
      </>
    ) : (
      <li className='tool'>
        <Title>learning to programing</Title>
      </li>
    )}
  </>
)

HeaderBar.propTypes = {
  authed: PropTypes.bool.isRequired
}

const mapStateToProps = ({ authed, user, theme }) => ({
  authed,
  user,
  theme
})

const headerRouter = withRouter(HeaderBar)

export default connect(
  mapStateToProps,
  null
)(headerRouter)
