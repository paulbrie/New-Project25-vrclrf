import React from 'react'

import PropTypes from 'prop-types'

import styles from './component.module.css'

const AppComponent = (props) => {
  return (
    <div className={styles['container']}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className={styles['image']}
      />
      <div className={styles['container1']}>
        <h2 className={styles['text']}>{props.heading}</h2>
        <span>{props.text}</span>
      </div>
    </div>
  )
}

AppComponent.defaultProps = {
  text: 'Text',
  image_alt: 'image',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  heading: 'Text',
}

AppComponent.propTypes = {
  text: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  heading: PropTypes.string,
}

export default AppComponent
