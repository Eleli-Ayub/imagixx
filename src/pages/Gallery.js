import React from 'react'
import GalleryItem from '../components/GalleryItem'
import imageOne from '../assets/images/packageOne.jpg'
import imageTwo from '../assets/images/packageTwo.jpg'
import imageThree from '../assets/images/packageThree.jpg'
import imageFour from '../assets/images/packageFour.jpg'
import imageFive from '../assets/images/packageFive.jpg'

function Gallery() {
  return (
    <div>
        <GalleryItem itemTitle="Events" itemImage={imageOne} imgOne={imageOne} imgTwo={imageTwo} imgThree={imageThree} imgFour={imageFour} imgFive={imageFive} />
        <GalleryItem itemTitle="Weddings" itemImage={imageTwo} imgOne={imageOne} imgTwo={imageTwo} imgThree={imageThree} imgFour={imageFour} imgFive={imageFive} />
        <GalleryItem itemTitle="Rallies" itemImage={imageThree} imgOne={imageOne} imgTwo={imageTwo} imgThree={imageThree} imgFour={imageFour} imgFive={imageFive} />
        <GalleryItem itemTitle="Indoors" itemImage={imageFour} imgOne={imageOne} imgTwo={imageTwo} imgThree={imageThree} imgFour={imageFour} imgFive={imageFive} />
        <GalleryItem itemTitle="Outdoors" itemImage={imageFive} imgOne={imageOne} imgTwo={imageTwo} imgThree={imageThree} imgFour={imageFour} imgFive={imageFive} />
    </div>
  )
}

export default Gallery