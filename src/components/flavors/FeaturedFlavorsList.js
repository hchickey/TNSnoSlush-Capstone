import { useEffect, useState } from "react"
import { FeaturedFlavor } from "../flavors/FeaturedFlavor"



export const FeaturedFlavorsList = ({ location }) => {
    const [filteredFlavor, setFiltered] = useState([])


    useEffect(
        () => { // using localhost to get all the snow cone places from api
            fetch(`http://localhost:8088/featuredFlavors`)
                .then(response => response.json())
                .then((featuredFlavorArray) => { // this is a function so we are passing a parameter
                    const myFeaturedFlavors = featuredFlavorArray.filter(flavor => flavor.locationId === location?.id)
                    setFiltered(myFeaturedFlavors)
                })
        },
        [location]
    )

    // location needs to be in the dependancy array to see the changes in useEffect

    return <article className="flavors">
        {
            filteredFlavor.map((filteredFlavors) => <FeaturedFlavor key={`flavor--${filteredFlavors.id}`}
                flavorObjects={filteredFlavors} />)
        }
    </article>
}