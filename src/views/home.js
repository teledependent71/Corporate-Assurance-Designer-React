import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Corporate Assurance Designer</title>
        <meta property="og:title" content="Corporate Assurance Designer" />
      </Helmet>
    </div>
  )
}

export default Home
