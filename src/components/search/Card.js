import React from "react"
import "./search.css"

export const Card = ({location}) => {
    return (
        <>
        <div className="canvaCard">
            <img className="locationCard" alt={location.city} src={location.imgPath} />
        </div>
        <div>
            <h2 className="nameOnCard">{location.city}</h2>
        </div>
        </>
    )
}