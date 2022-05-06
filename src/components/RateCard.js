import React from 'react'

function RateCard({ packageName, packageImage, duration, numberOfPhotos, numberOfPhotographers, durationOfCompletion, price }) {
  return (
    <div className='rateCard'>
        <div className="leftSide">
            <h1>{ packageName }</h1>
            <img src={ packageImage }/>
        </div>
        <div className="rightSide">
            <div className="details">                
                <p><i>Duration:</i> <b> { duration }</b></p>
                <p><i>Photos:</i> <b> { numberOfPhotos }</b></p>
                <p><i>Photographers:</i> <b> { numberOfPhotographers }</b></p>
                <p><i>Completion Time:</i> <b> { durationOfCompletion }</b></p>
                <h2><i>Price:</i> <b> { price }</b></h2>
            </div>
        </div>
    </div>
  )
}

export default RateCard