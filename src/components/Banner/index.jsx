import React from 'react'

function Banner({ image, text }) {
  return (
    <div className="custom">
      <img src={image} alt="Paysage naturel en fond"></img>
      <p className="custom__text">{text}</p>
    </div>
  )
}

export default Banner
