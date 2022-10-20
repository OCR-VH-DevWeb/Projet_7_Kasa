//import du Hook { useState }
import React, { useState } from 'react';
import Arrow from "../assets/Vector.png";


function Collapse(props) {
  // déclare une nouvelle variable d'état en appelant useState()
  //renvoie une paire de valeurs et initialise à null comme argument
  //second élément renvoyé est une fonction qui permet de modifier la variable isOpen
    const [isOpen, setIsOpen] = useState(null);
    const dataCollapse = [
        {
            category: 'Fiabilité',
            content:
            'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les inforamtions sont régulièrement vérifiées par nos équipes.',
        },
        {
            category: 'Respect',
            content:
            'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
        },
        {
            category: 'Service',
            content:
            "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
        },
        {
            category: 'Sécurité',
            content:
            "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
        },
    ];  
    

    return (
        <div className='wrapper'>
            <div className='heading'>
                <div className='title'>{props.category}</div>
                <button className='custom' onClick={() => setIsOpen(isOpen)}></button>    
            </div>
            <div className='description'>{props.content}</div>
        </div>
    ) 
}

export default Collapse

// {dataCollapse.map((data, d) => ())}