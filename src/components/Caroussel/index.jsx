
// import React, { useState } from 'react';
import Arrowleft from "../../assets/ArrowLeft.png";
import Arrowright from "../../assets/ArrowRight.png";






function Caroussel({pictures}) {
    //déclare une variable pour récupérer les photos dans un tableau 
    const picture = pictures[0];
    // console.log(indexImage);
    return (
        <div className='caroussel'>
            <button className='left' > 
                <img src={Arrowleft} alt="Flèche pour passer à la pièce précédente du logement"></img>
            </button>
            <img className="background" src={picture} alt="Visite du logement en photos"></img>
            <button className='right'>
                <img src={Arrowright} alt="Flèche pour passer à la pièce suivante du logement"></img>
            </button>
            <div className="count">
                <p className="number">1/1</p>
            </div>
        </div>
    )
}


export default Caroussel