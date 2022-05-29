import React from 'react'
import Contacts from '../components/Contacts'
import Landing from '../components/Landing'
import Values from '../components/Values'

function Home() {
  return (
    <div className='home'>
        <Landing/>
        <Values/>
        <Contacts/>
    </div>
  )
}

export default Home