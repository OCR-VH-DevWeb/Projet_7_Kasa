import React from 'react'
import StarFull from '../../assets/StarFull.png'
import StarEmpty from '../../assets/StarEmpty.png'

function Rating({ number }) {
  return (
    <div className="userRate">
      <img
        src={number >= 1 ? StarFull : StarEmpty}
        alt="Jauge de qualité"
      ></img>
      <img
        src={number >= 2 ? StarFull : StarEmpty}
        alt="Jauge de qualité"
      ></img>
      <img
        src={number >= 3 ? StarFull : StarEmpty}
        alt="Jauge de qualité"
      ></img>
      <img
        src={number >= 4 ? StarFull : StarEmpty}
        alt="Jauge de qualité"
      ></img>
      <img
        src={number >= 5 ? StarFull : StarEmpty}
        alt="Jauge de qualité"
      ></img>
    </div>
  )
}

export default Rating
