import React from 'react'
import { Link } from 'react-router-dom'

function Card({ cover, title, id }) {
  return (
    <Link to={'/product/' + id}>
      <div className="card">
        <img className="vew" src={cover} alt="Appartement cosy"></img>
        <p className="title">{title}</p>
      </div>
    </Link>
  )
}

export default Card
