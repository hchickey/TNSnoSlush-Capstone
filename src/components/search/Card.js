import React from "react"
import "./search.css"

export const Card = ({location}) => {
    return (
    // link is how you click on any of the locations and it takes you to another page
        
        <div className="canvaCard">
            <a className="card" href={`/${location.id}`}><img className="locationCard" alt={location.city} src={location.imgPath} />
            <h2 className="nameOnCard">{location.city}</h2>
            </a>
        </div>
    )
}