import React from 'react'

import { Helmet } from 'react-helmet'

import AppComponent from '../components/component'
import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>New Project25</title>
        <meta property="og:title" content="New Project25" />
      </Helmet>
      <div className={styles['container1']}>
        <h1 className={styles['text']}>Hello! :) - It&apos;s cool</h1>
      </div>
      <AppComponent
        text="Lorem Impsum"
        heading="Hello from the card"
        image_src="https://images.unsplash.com/photo-1644375391877-0ae77eeed8fc?ixid=Mnw5MTMyMXwwfDF8YWxsfDJ8fHx8fHwyfHwxNjQ0NDEzOTYx&amp;ixlib=rb-1.2.1&amp;h=200"
      ></AppComponent>
    </div>
  )
}

export default Home
