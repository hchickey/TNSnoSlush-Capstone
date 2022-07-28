import { useEffect, useState } from "react"
import { Flavor } from "./Flavor"



export const FlavorList = () => {
    // use state to iterate through all the tickets in the database
    const [flavors, setFlavors] = useState([])
   

    useEffect(
        () => { // using localhost to get all the snow cone places from api
            fetch(`http://localhost:8088/flavors`)
            .then(response => response.json())
            .then((flavorArray) => { // this is a function so we are passing a parameter
                setFlavors(flavorArray) // here we are passing the argument
                
            })
        },
        [] 
    )

    return <article className="flavors">
    {
        flavors.map(flavor => <Flavor key={`flavor--${flavor.id}`}
            id={flavor.id} flavorName={flavor.flavorName} />)
    }
</article>
}