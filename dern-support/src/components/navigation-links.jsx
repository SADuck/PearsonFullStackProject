import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <Link type="button" className="navigation-links-button button" to={props.link1}>
        {props.button2}
      </Link>
      <Link type="button" className="navigation-links-button1 button" to={props.link2}>
        {props.button21}
      </Link>
      <Link type="button" className="navigation-links-button2 button" to={props.link3}>
        {props.button1}
      </Link>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  button1: '',
  rootClassName: '',
  button2: '',
  button21: '',
  link1: '',
  link2: '',
  link3: ''
}

NavigationLinks.propTypes = {
  button1: PropTypes.string,
  rootClassName: PropTypes.string,
  button2: PropTypes.string,
  button21: PropTypes.string,
}

export default NavigationLinks
