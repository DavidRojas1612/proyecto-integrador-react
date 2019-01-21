import React from 'react'
import { connect } from 'react-redux'
import Title from '../Atoms/Title'
import PropTypes from 'prop-types'

const HeaderBar = ({ authed, user, title }) => {
  return (
    <>
      {authed ? (
        <>
          <li className='tool'>
            <Title>{user.displayName}</Title>
          </li>
          {title ? (
            <>
              <li className='tool'>
                <Title>{title}</Title>
              </li>
            </>
          ) : null}
        </>
      ) : (
        <li className='tool'>
          <Title>learning to programing</Title>
        </li>
      )}
    </>
  )
}

HeaderBar.propTypes = {
  authed: PropTypes.bool.isRequired
}

const mapStateToProps = ({ authed, user, title }) => ({ authed, user, title })

export default connect(
  mapStateToProps,
  null
)(HeaderBar)
