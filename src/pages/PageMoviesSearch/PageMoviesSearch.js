import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

export const PageMoviesSearch = (props) => {
  const {
    className,
    ...otherProps
  } = props

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      PageMoviesSearch
    </div>
  )
}

PageMoviesSearch.propTypes = {
  className: PropTypes.string
}

export default PageMoviesSearch
