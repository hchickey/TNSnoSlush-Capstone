import { useEffect, useState } from "react"
import { Flavor } from "./Flavor"



export const FlavorList = ({location}) => {
    // use state to iterate through all the tickets in the database
    const [flavors, setFlavors] = useState([])
    const [filteredFlavors, setFiltered] = useState([])
   

    useEffect(
        () => { // using localhost to get all the snow cone places from api
            fetch(`http://localhost:8088/locationsFlavors?_expand=flavor`)
            .then(response => response.json())
            .then((flavorArray) => { // this is a function so we are passing a parameter
                setFlavors(flavorArray) // here we are passing the argument
                
            })
        },
        [] 
    )



    useEffect(
        () => {
        
            const myFlavors = flavors.filter(flavor => flavor.locationId === location.id)
                setFiltered(myFlavors)
            
        },
        [flavors]
    )

    // useEffect(
    //     () => {
    //         flavors.map((flavor) => {
    //             if (flavor.id === flavor.locationsFlavors.flavorId) {
    //                 locations.map((location) => {
    //             if (flavor.locationsFlavors.locationId === location.id) {
    //                 setFilteredFlavors(flavors)
    //             }
    //                 })
    //             }
    //         })
    //     },
    //     []
    // )


    return <article className="flavors">
    {
        filteredFlavors.map((filteredFlavor) => <Flavor key={`flavor--${filteredFlavor.id}`}
            flavorObject={filteredFlavor} />)
    }
</article>
}