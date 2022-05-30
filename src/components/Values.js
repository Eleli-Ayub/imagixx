import React from 'react'
import '../scss/values.scss';
import bgimg1 from '../assets/images/bgimg1.jpg'
import bgimg2 from '../assets/images/bgimg2.jpg'
import bgimg3 from '../assets/images/bgimg3.jpg'
import bgimg4 from '../assets/images/bgimg4.jpg'
import bgimg5 from '../assets/images/bgimg3.jpg'
import bgimg6 from '../assets/images/bgimg4.jpg'

function Values() {
  return (
    <div className='ValuesWrapper'>
        <span className="circle1 circle"></span>
        <span className="circle2 circle"></span>
        <span className="circle3 circle"></span>
        <span className="circle4 circle"></span>
        <span className="circle5 circle"></span>
        <span className="circle7 circle"></span>
        <span className="circle8 circle"></span>
      <span className="title">
        <h1>Why Work With Us.</h1>
      </span>
      <div className="images">
          <img src={ bgimg1 } alt="" />
          <img src={ bgimg2 } alt="" />
          <img src={ bgimg3 } alt="" />
          <img src={ bgimg4 } alt="" />
          <img src={ bgimg5 } alt="" />
          <img src={ bgimg6 } alt="" />
        </div>
      <div className="values">
        <p>Timeliness</p>
        <p>High Quality</p>
        <p>Affordability</p>
        <p>Engagement</p>
        <p>Team Work</p>
        <p>Consistency</p>
        <p>High Quality Equipement</p>
      </div>
        
    </div>
  )
}

export default Values