import React from 'react'

function GalleryItem({ itemTitle, itemImage, imgOne, imgTwo, imgThree, imgFour, imgFive}) {
  return (
    <div className='galleryItem'>
        <h2>{ itemTitle}</h2>
        <img src={ itemImage} />
        <div className="navButtons">
            <button>One</button>
            <button>Two</button>
            <button>Three</button>
            <button>Four</button>
            <button>Five</button>
        </div>
    </div>
  )
}

export default GalleryItem