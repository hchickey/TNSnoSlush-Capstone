import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { FeaturedFlavorsList } from "../flavors/FeaturedFlavorsList"
import { FlavorList } from "../flavors/FlavorList"
import { ImgList } from "../Img/ImgList"
import { ReviewContainer } from "../reviews/ReviewContainer"
import "./CityDetails.css"
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

    return <section className="city">
        <h1 className="city__header">{location?.name}</h1>
        <div className="address">Address: {location?.address}</div>
        <div className="flex"><ImgList location={location} />
            <div className="featured"><h2 className="featured__header">Featured Flavors</h2>
                <FeaturedFlavorsList location={location} /></div>
            <div className="list__flavors"><h2 className="flavor__header">{location?.name} Flavors</h2>
                <FlavorList location={location} /></div>
        </div>
        <div className="list__reviews">
            <h2 className="review__header">Reviews</h2>
            <ReviewContainer />
        </div>
    </section>
}