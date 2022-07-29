import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { FlavorList } from "../flavors/FlavorList"
// useParams directs a user to a new Route from the current URL


export const CityDetails = () => {
    const { locationId } = useParams()
    const [location, updateLocation] = useState({})
    // http://localhost:8088/locations?_expand=id&_embed=featuredFlavors&locationId&_embed=locationsFlavors&locationId=

    useEffect(
        () => {
            fetch(`http://localhost:8088/locations?id=${locationId}`)
                .then(res => res.json())
                .then((data) => {
                    const singleLocation = data[0]
                    updateLocation(singleLocation)
                })
        },
        [locationId]
    )

    return <section className="knoxvilleCity">
        <header className="city__header">{location?.name}</header>
        <div>Address: {location?.address}</div>
        <div>Flavors: <FlavorList
            location={location} /> </div>
    </section>
}