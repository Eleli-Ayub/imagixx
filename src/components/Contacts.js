import React from 'react'
import facebook from '../assets/icons/facebookColored.png'
import instagram from '../assets/icons/instagram.png'
import whatsapp from '../assets/icons/whatsapp.png'
import gmail from '../assets/icons/email.png'
import contacts from '../assets/images/contacts.jpg'

function Contacts() {
  return (
    <div className='contactsWrapper'>
        <h1>Reach Out To Us Via These Channels...</h1>
        <div className="contactDetails">
            <ul>
                <li><img src={ facebook } /><p>@imagixfacebook</p></li>
                <li><img src={ instagram }/><p>@imagixinstagram</p></li>
                <li><img src={ gmail }/><p>@imagix@email.com</p></li>
                <li><img src={ whatsapp }/> <p>0792336589</p></li>
            </ul>
        </div>
        <div className="contactImage">
            <img src={ contacts }/>
        </div>
    </div>
  )
}

export default Contacts