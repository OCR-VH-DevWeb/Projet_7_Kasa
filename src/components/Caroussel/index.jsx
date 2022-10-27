import React, { useState } from 'react'
// import { useState } from 'react'
import Arrowleft from '../../assets/ArrowLeft.png'
import Arrowright from '../../assets/ArrowRight.png'

function Caroussel({ pictures }) {
  //déclare une variable d'état en appelant useState()
  const [herePicture, setHerePicture] = useState(0)
  //déclare une variable pour récupérer le nombre total de photos
  const totalPictures = pictures.length
  //déclare une variable pour récupérer le nombre total de photos pour le comptage (-1 pour être cohérent avec l'index)
  const maxLength = totalPictures - 1
  //constante qui est une fonction avec condition ternaire pour passer à l'image suivante
  const next = () => {
    setHerePicture(herePicture === maxLength ? 0 : herePicture + 1)
  }
  //constante qui est une fonction avec condition ternaire pour passer à l'image précédente
  const before = () => {
    setHerePicture(herePicture === 0 ? maxLength : herePicture - 1)
  }
  //constante qui permet de ne pas afficher le bouton before si le nombre total de photos est égal à 1
  const visibleButtonLeft =
    totalPictures === 1 ? null : (
      <button className="left" onClick={before}>
        <img
          src={Arrowleft}
          alt="Flèche pour passer à la pièce précédente du logement"
        ></img>
      </button>
    )
  //constante qui permet de ne pas afficher le bouton next si le nombre total de photos est égal à 1
  const visibleButtonRight =
    totalPictures === 1 ? null : (
      <button className="right" onClick={next}>
        <img
          src={Arrowright}
          alt="Flèche pour passer à la pièce suivante du logement"
        ></img>
      </button>
    )
  //constante qui permet de ne pas afficher le compteur de pages si le nombre total de photos est égal à 1
  const visibleCountPages =
    totalPictures === 1 ? null : (
      <div className="count">
        <p className="number">
          {herePicture + 1}/{totalPictures}
        </p>
      </div>
    )
  console.log(herePicture)

  return (
    <div className="caroussel">
      {visibleButtonLeft}
      <img
        className="background"
        src={pictures[herePicture]}
        alt="Visite du logement en photos"
      ></img>
      {visibleButtonRight}
      {visibleCountPages}
    </div>
  )
}

export default Caroussel
