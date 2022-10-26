// import du Hook { useState }
import React, { useState } from 'react';
import Arrow from "../../assets/Arrowcoll.png";
import Arrowup from "../../assets/ArrowUpcoll.png";




function Collapse({category, content}) {
  // déclare une nouvelle variable d'état en appelant useState()
  //renvoie une paire de valeurs et initialise à null comme argument
  //second élément renvoyé est une fonction qui permet de modifier la variable isOpen
    const [isOpen, setIsOpen] = useState(null);
    //change le state 
    const stateOpen = () => setIsOpen(!isOpen);
console.log(isOpen);
    return (
        <div className='wrapper'>
            <div className='heading'>
                <div className='title'>{category}</div>
                <button className='dropdown' onClick={stateOpen}>
                    <img src={isOpen ?  Arrowup : Arrow} alt="Flèche pour afficher le texte"></img>
                </button>    
            </div>
            {isOpen ? (
                 <div className='description'>{content}</div>
            ) : 
                null
            }
        </div>
    ) 
}

export default Collapse

// {collapseState ? (
//     <div></div>
//   ) : (
//     <div></div>
//   )}
// {dataCollapse.map((data, d) => ())}