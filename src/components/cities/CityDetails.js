import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { FeaturedFlavorsList } from "../flavors/FeaturedFlavorsList"
import { FlavorList } from "../flavors/FlavorList"
// useParams directs a user to a new Route from the current URL


export const CityDetails = () => {
    const { locationId } = useParams()
    const [location, updateLocation] = useState({})

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
        <h1 className="city__header">{location?.name}</h1>
        <div>Address: {location?.address}</div>
        <div><FeaturedFlavorsList location={location} /></div>
        <h2>{location?.name} Flavors</h2>
        <div><FlavorList
            location={location} /> </div>
    </section>
}