import React from 'react'

import PropTypes from 'prop-types'

import './hardware-fixes.css'

const HardwareFixes = (props) => {
  return (
    <div className={`hardware-fixes-blog-post-card ${props.rootClassName} `}>
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        className="hardware-fixes-image"
      />
      <div className="hardware-fixes-container">
        <span className="hardware-fixes-text">{props.label}</span>
        <h1 className="hardware-fixes-text1">{props.title}</h1>
        <div className="hardware-fixes-container1">
          <span className="hardware-fixes-text2">{props.description}</span>
          <span className="hardware-fixes-text3">Read More</span>
        </div>
        <button type="button" className="hardware-fixes-button button">
          {props.button}
        </button>
        <div className="hardware-fixes-container2">
          <span className="hardware-fixes-text4">{props.author}</span>
        </div>
      </div>
    </div>
  )
}

HardwareFixes.defaultProps = {
  imageAlt: 'image',
  label: 'Hardware Fixes',
  button: 'Learn More',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor. Lorem ipsum dolor sit amet, consectetur adipiscing ...',
  author: 'by Jon Doe 5 hours ago',
  title: 'Lorem ipsum dolor sit amet',
  rootClassName: '',
  imageSrc:
    'https://images.unsplash.com/photo-1576613109753-27804de2cba8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDh8fEZpeHxlbnwwfHx8fDE3MTE3Mjc1Mjl8MA&ixlib=rb-4.0.3&w=1500',
}

HardwareFixes.propTypes = {
  imageAlt: PropTypes.string,
  label: PropTypes.string,
  button: PropTypes.string,
  description: PropTypes.string,
  author: PropTypes.string,
  title: PropTypes.string,
  rootClassName: PropTypes.string,
  imageSrc: PropTypes.string,
}

export default HardwareFixes
