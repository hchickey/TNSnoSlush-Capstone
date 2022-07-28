import { useEffect, useState } from "react"
import { Flavor } from "./Flavor"



export const FlavorList = () => {
    // use state to iterate through all the tickets in the database
    const [flavors, setFlavors] = useState([])
    const [locations, setLocation] = useState([])
    const [filteredFlavors, setFilteredFlavors] = useState([])

const getAllFlavors = () => {
    fetch(`http://localhost:8088/flavors?_embed=locationsFlavors`)
    .then(res => res.json())
    .then((flavorArray) => {
        setFlavors(flavorArray)
    })
}

useEffect(
    () => {
        getAllFlavors()

        fetch(`http://localhost:8088/locations?_embed=locationsFlavors&locationId`)
        .then(res => res.json())
        .then((locationArray) => {
            setLocation(locationArray)
        })
    },
    []
)
    useEffect(
        () => {
            flavors.map((flavor) => {
                if (flavor.id === flavor.locationsFlavors.flavorId) {
                    locations.map((location) => {
                if (flavor.locationsFlavors.locationId === location.id) {
                    setFilteredFlavors(flavors)
                }
                    })
                }
            })
        },
        [flavors]
    )

    return <>
    {
        locations.map((location) => {
            <h2>{location.name}'s Flavors</h2>
        })
    }    

    <article>
        {
            filteredFlavors.map(
                (flavor) => <Flavor location={locations} flavorObject={flavor} />
            )
        }
    </article>
    </>
}