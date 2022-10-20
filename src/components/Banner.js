// import React from "react"

function Banner(props) {
    return (
        <div className="custom">
            <img src={props.image} alt="Paysage naturel en fond"></img>
            <p className="custom__text">{props.text}</p>
        </div>
    )
}

export default Banner

