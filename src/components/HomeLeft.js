import React from 'react'
import facebook from '../assets/icons/facebookColored.png'
import instagram from '../assets/icons/instagram.png'
import phone from '../assets/icons/phone.png'
import gmail from '../assets/icons/email.png'
import homeleftimg from '../assets/images/homeleftimg.jpg'

function HomeLeft() {
  return (
    <div className='homeLeft'>
        <ul className="links">
            <li><img src={ phone } p/> <p>0785629871</p> </li>
            <li><img src={ facebook}/></li>
            <li><img src={ instagram }/></li>
            <li><img src={ gmail }/></li>
        </ul>
        <h1>Book Us For...</h1>
        <ul className='activitiesList'>
            <li>Weddings</li>
            <li>Events</li>
            <li>Birthdays</li>
            <li>Ruracios</li>
            <li>Political Rallies</li>
            <li>Coorporate Meetings</li>
        </ul>
        <div className="slider">
          <div className="images">
            <img src={homeleftimg}/>
          </div>
        </div>
    </div>
  )
}

export default HomeLeft