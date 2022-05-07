import React, { useState } from 'react'
import { Link } from "react-router-dom"
 
function Header() {
  const[loginStatus, setLoginStatus] = useState(true)
  const logout = ()=>{
    setLoginStatus(!loginStatus)
  }
  return (
   <div className="headerWrapper">
      
       <ul>
           <li><Link to="/Home">HOME</Link></li>
           <li><Link to="/Rates">RATES</Link></li>
           <li><Link to="/Gallery">GALLERY</Link></li>
           {loginStatus ? <li><Link to="/Home"><button onClick={logout}>LOGOUT</button></Link></li> : <li><Link to="/Login">LOGIN</Link></li> }
       </ul>
   </div>
  )
}

export default Header