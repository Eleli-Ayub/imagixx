import React from 'react'
import { Link } from "react-router-dom"
import '../scss/header.scss';
import facebook from '../assets/icons/facebookColored.png'
import instagram from '../assets/icons/instagram.png'
import gmail from '../assets/icons/email.png'
import phone from '../assets/icons/phone.png'

 
function Header() {
  return (
   <div className="headerWrapper">
      
       <ul className='navs'>
           <li><Link to="/">HOME</Link></li>
           <li><Link to="/Rates">RATES</Link></li>
           <li><Link to="/Gallery">GALLERY</Link></li>
       </ul>
       
       <ul className="socialIcons">
         <span className='socials'>
            <li><a href=""><img src={ facebook } alt="" /></a></li>
            <li><a href=""><img src={ instagram } alt="" /></a></li>
            <li><a href=""><img src={ gmail } alt="" /></a></li>
         </span>
         <span className='phone'>
           <img src={ phone } alt="" />
           <p>0702659667</p>
         </span>
       </ul>
   </div>
  )
}

export default Header