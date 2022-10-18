function Card({ cover, title }) {
  return (
    <div className="card">
      <img className="vew" src={cover} alt="Appartement cosy"></img>
      <span className="title">{title}</span>
    </div>
  )
}

export default Card
