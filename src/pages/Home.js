import React from 'react'
import Contacts from '../components/Contacts'
import HomeLeft from '../components/HomeLeft'
import HomeRight from '../components/HomeRight'
import Values from '../components/Values'

function Home() {
  return (
    <div className='home'>
        <HomeRight/>
        <HomeLeft/>
        <Values/>
        <Contacts/>
    </div>
  )
}

export default Home