import React from 'react'
import PropTypes from 'prop-types'
import ThemeItem from './ThemeItem'
import './ThemeList.scss'

const ThemeList = ({ themes }) => {
  const renderThemeList = themes => {
    return themes.map(({ theme }, i) => (
      <ThemeItem
        key={i}
        title={theme}
        classTheme={`theme-${i}`}
        path='dashboard'
        id={i}
      />
    ))
  }
  return (
    <div className='ThemeList'>{themes && <>{renderThemeList(themes)}</>}</div>
  )
}

ThemeList.propTypes = {
  themes: PropTypes.array.isRequired
}

export default ThemeList
