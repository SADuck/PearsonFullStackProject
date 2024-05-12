import React from 'react'

import PropTypes from 'prop-types'

import './ways-of-diagnoses.css'

const WaysOfDiagnoses = (props) => {
  return (
    <div className={`ways-of-diagnoses-blog-post-card ${props.rootClassName} `}>
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        className="ways-of-diagnoses-image"
      />
      <div className="ways-of-diagnoses-container">
        <span className="ways-of-diagnoses-text">{props.label}</span>
        <h1 className="ways-of-diagnoses-text1">{props.title}</h1>
        <div className="ways-of-diagnoses-container1">
          <span className="ways-of-diagnoses-text2">{props.description}</span>
          <span className="ways-of-diagnoses-text3">Read More</span>
        </div>
        <button type="button" className="ways-of-diagnoses-button button">
          {props.button}
        </button>
        <div className="ways-of-diagnoses-container2">
          <span className="ways-of-diagnoses-text4">{props.author}</span>
        </div>
      </div>
    </div>
  )
}

WaysOfDiagnoses.defaultProps = {
  rootClassName: '',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor. Lorem ipsum dolor sit amet, consectetur adipiscing ...',
  imageAlt: 'image',
  button: 'Learn More',
  label: 'Ways of Diagnoses',
  author: 'by Jon Doe 5 hours ago',
  title: 'Lorem ipsum dolor sit amet',
  imageSrc:
    'https://images.unsplash.com/photo-1576613109753-27804de2cba8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDh8fEZpeHxlbnwwfHx8fDE3MTE3Mjc1Mjl8MA&ixlib=rb-4.0.3&w=1500',
}

WaysOfDiagnoses.propTypes = {
  rootClassName: PropTypes.string,
  description: PropTypes.string,
  imageAlt: PropTypes.string,
  button: PropTypes.string,
  label: PropTypes.string,
  author: PropTypes.string,
  title: PropTypes.string,
  imageSrc: PropTypes.string,
}

export default WaysOfDiagnoses
