import React from 'react'
import RateCard from '../components/RateCard'
import packageImgOne from '../assets/images/packageOne.jpg'
import packageImgTwo from '../assets/images/packageTwo.jpg'
import packageImgThree from '../assets/images/packageThree.jpg'
import packageImgFour from '../assets/images/packageFour.jpg'
import packageImgFive from '../assets/images/packageFive.jpg'

function Rates() {
  return (
    <div>
        <h1 className='rateHeader'>Choose The Package That Best Suits You...</h1>
        <RateCard packageName="Shows" packageImage={packageImgOne} duration="Half Day" numberOfPhotos="20" numberOfPhotographers="2" durationOfCompletion="5 Days" price="10,000 /= 0nly" />
        <RateCard packageName="OutDoor" packageImage={packageImgTwo} duration="3 hours" numberOfPhotos="20" numberOfPhotographers="2" durationOfCompletion="3 Days" price="7,000 /= 0nly" />
        <RateCard packageName="Events" packageImage={packageImgThree} duration="Event Duration" numberOfPhotos="20" numberOfPhotographers="4" durationOfCompletion="7 Days" price="6,000 /= 0nly" />
        <RateCard packageName="Birthdays" packageImage={packageImgFour} duration="2 Hours" numberOfPhotos="20" numberOfPhotographers="1" durationOfCompletion="3 Days" price="3,000 /= 0nly" />
        <RateCard packageName="Weddings" packageImage={packageImgFive} duration="Wedding Duration" numberOfPhotos="20" numberOfPhotographers="3" durationOfCompletion="10 Days" price="15,000 /= 0nly" />
    </div>
  )
}

export default Rates