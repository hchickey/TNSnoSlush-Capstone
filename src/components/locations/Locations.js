import { useEffect, useState } from "react"


export const Locations = () => {
    const [locations, setLocations] = useState([])
    

    // useEffect(
    //     () => {
    //         const searchedLocations = locations.filter(location => {
    //             return location.city.toLowerCase().includes(searchTermsState.toLowerCase())
    //         })
    //         setLocations(searchedLocations)
    //     },
    //     [searchTermsState]
    // )

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

    return <>
    
    <h2>Snow Cone Locations in Tennessee</h2>

    <article className="locations">
        {
            locations.map(
                (location) => {
                    return <section className="location" key={`location--${location.id}`}>
                        <header>{location.city}</header>
                    </section>
                }
            )
        }
    </article>
    </>
}