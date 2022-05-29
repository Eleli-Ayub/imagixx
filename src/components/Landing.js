import React from 'react'
import '../scss/landing.scss'
import bgimg1 from '../assets/images/bgimg1.jpg'
import bgimg2 from '../assets/images/bgimg2.jpg'
import bgimg3 from '../assets/images/bgimg3.jpg'
import bgimg4 from '../assets/images/bgimg4.jpg'

function Landing() {
  return (
    <div className='landingWrapper'>
        <span className="circle1 circle"></span>
        <span className="circle2 circle"></span>
        <span className="circle3 circle"></span>
        <span className="circle4 circle"></span>
        <span className="circle5 circle"></span>
        <span className="circle7 circle"></span>
        <span className="circle8 circle"></span>
        <div className="logoText">
            <p>IMAGIX</p>
        </div>
        <div className="images">
          <img src={ bgimg1 } alt="" />
          <img src={ bgimg2 } alt="" />
          <img src={ bgimg3 } alt="" />
          <img src={ bgimg4 } alt="" />
        </div>
        <span className="middleText">
            <p>
            Every moment needs to be captured, because the best days are those that we'll live to remember
            </p>
        </span>
    </div>
  )
}

export default Landing