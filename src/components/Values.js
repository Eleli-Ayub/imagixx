import React from 'react'
import rightSideImg from '../assets/images/rightSideImg.jpg'

function Values() {
  return (
    <div className='ValuesWrapper'>
        <div className="leftSide">
        <h1>We boost these values</h1>
            <ul>
                <li>Timeliness</li>
                <li>High Quality</li>
                <li>Affordability</li>
                <li>Client Engagement</li>
                <li>Team Work</li>
                <li>High Quality Equipement</li>
            </ul>
        </div>
        <div className="rightSide">
            <img src={ rightSideImg }/>
        </div>
    </div>
  )
}

export default Values