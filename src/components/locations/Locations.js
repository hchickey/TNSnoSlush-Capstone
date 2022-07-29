import { useEffect, useState } from "react"
import { Cities } from "../cities/Cities"


export const Locations = () => {
    const [locations, setLocations] = useState([])

    useEffect(
        () => { // using localhost to get all the snow cone places from api
            fetch(`http://localhost:8088/locations`)
            .then(response => response.json())
            .then((locationsArray) => { // this is a function so we are passing a parameter
                setLocations(locationsArray) // here we are passing the argument
                
            })
        },
        [] // When this array is empty, you are observing initial component state
    )

    return <article className="locations">
        {/* {
            locations.map(location => <Cities key={`location--${location.id}`}
                id={location.id} city={location.city} />)
        } */}
    </article>
    
}