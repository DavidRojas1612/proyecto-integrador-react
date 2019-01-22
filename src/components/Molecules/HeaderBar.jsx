import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Title from '../Atoms/Title'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

const HeaderBar = ({ authed, user, themes, location: { pathname } }) => {
  const [index, setIndex] = useState('Topic boards')
  const title = 'Topic boards'

  useEffect(() => {
    let index = +pathname.slice(-1)
    setIndex(index)

    document.title = themes[index] ? themes[index].theme : title
  })

  return (
    <>
      {authed ? (
        <>
          <li className='tool'>
            <Title>{user.displayName}</Title>
          </li>
          {
            <li className='tool'>
              <Title>{themes[index] ? themes[index].theme : title}</Title>
            </li>
          }
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

const mapStateToProps = ({ authed, user, themes }) => ({ authed, user, themes })

const headerRouter = withRouter(HeaderBar)

export default connect(
  mapStateToProps,
  null
)(headerRouter)
