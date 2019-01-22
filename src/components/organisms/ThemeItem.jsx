import React from 'react'
import { NavLink } from 'react-router-dom'
<<<<<<< HEAD
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import './ThemeItem.scss'
import { setTitle } from '../../actions'
=======
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import './ThemeItem.scss'
import { setTitle } from '../../actions';

const ThemeItem = ({ title, classTheme, path, id, setTitle }) => {
  const handleTitle = () =>{
    setTitle(title)
  }
>>>>>>> 284dbb419073bbd3f3b461711a5e6288348f823c

  return (
    <div className={`card-theme ${classTheme}`}>
      <NavLink className='card-theme__nav' onClick={handleTitle} to={`${path}/${id}`}>
        {title}
      </NavLink>
    </div>
  )
}

ThemeItem.propTypes = {
  title: PropTypes.string.isRequired,
  classTheme: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
}
const mapDispatchToProps = dispatch => ({
  setTitle: val => dispatch(setTitle(val)),
})

<<<<<<< HEAD
const mapDispatchToProps = dispatch => ({
  setTitle: val => dispatch(setTitle(val))
})

export default connect(
  null,
  mapDispatchToProps
)(ThemeItem)
=======
export default connect(null, mapDispatchToProps)(ThemeItem)
>>>>>>> 284dbb419073bbd3f3b461711a5e6288348f823c
