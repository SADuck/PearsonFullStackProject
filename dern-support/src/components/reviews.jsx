import React from 'react'

import PropTypes from 'prop-types'

import './reviews.css'

const Reviews = (props) => {
  return (
    <div className={`reviews-testimonial-card ${props.rootClassName} `}>
      <svg viewBox="0 0 950.8571428571428 1024" className="reviews-icon">
        <path
          d="M438.857 182.857v402.286c0 161.143-131.429 292.571-292.571 292.571h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571c80.571 0 146.286-65.714 146.286-146.286v-18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714zM950.857 182.857v402.286c0 161.143-131.429 292.571-292.571 292.571h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571c80.571 0 146.286-65.714 146.286-146.286v-18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714z"
          className=""
        ></path>
      </svg>
      <div className="reviews-testimonial">
        <span className="reviews-text">{props.quote}</span>
        <span className="reviews-text1">{props.name}</span>
        <span className="reviews-text2">{props.role}</span>
        <img
          alt={props.pictureAlt}
          src={props.pictureSrc}
          className="reviews-image"
        />
      </div>
    </div>
  )
}

Reviews.defaultProps = {
  quote:
    'As a satisfied client of Dern-Support, I can confidently say that their expertise in resolving IT issues is unparalleled. From software glitches to hardware failures like Graphic Card malfunctions, they have consistently provided top-notch solutions. Their dedication to repairing PCs and replacing faulty parts has truly impressed me, and I highly recommend their services to anyone in need of reliable IT support.',
  pictureSrc:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&h=1200',
  name: 'Jane Doe',
  role: 'SOFTWARE ENGINEER',
  pictureAlt: 'profile',
  rootClassName: '',
}

Reviews.propTypes = {
  quote: PropTypes.string,
  pictureSrc: PropTypes.string,
  name: PropTypes.string,
  role: PropTypes.string,
  pictureAlt: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Reviews
