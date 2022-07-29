import { useEffect, useState } from "react"
import { FeaturedFlavor } from "../flavors/FeaturedFlavor"



export const FeaturedFlavorsList = ({ location }) => {
    // use state to iterate through all the tickets in the database
    const [featuredFlavors, setFeaturedFlavors] = useState([])
    const [filteredFlavor, setFiltered] = useState([])


    useEffect(
        () => { // using localhost to get all the snow cone places from api
            fetch(`http://localhost:8088/featuredFlavors`)
                .then(response => response.json())
                .then((featuredFlavorArray) => { // this is a function so we are passing a parameter
                    setFeaturedFlavors(featuredFlavorArray) // here we are passing the argument

                })
        },
        []
    )

    useEffect(
        () => {

            const myFeaturedFlavors = featuredFlavors.filter(flavor => flavor.locationId === location.id)
            setFiltered(myFeaturedFlavors)

        },
        [featuredFlavors]
    )

    return <article className="flavors">
        {
            filteredFlavor.map((filteredFlavors) => <FeaturedFlavor key={`flavor--${filteredFlavors.id}`}
                flavorObjects={filteredFlavors} />)
        }
    </article>
}