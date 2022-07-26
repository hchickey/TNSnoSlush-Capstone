import { useEffect, useState } from "react"
import { Flavor } from "./Flavor"



export const FlavorList = ({ location }) => {
    const [filteredFlavors, setFiltered] = useState([])


    useEffect(
        () => { // using localhost to get all the snow cone places flavors from api
            fetch(`http://localhost:8088/locationsFlavors?_expand=flavor`)
                .then(response => response.json())
                .then((flavorArray) => { // this is a function so we are passing a parameter
                    const myFlavors = flavorArray.filter(flavor => flavor.locationId === location?.id)
                    setFiltered(myFlavors)

                })
        },
        [location]
    )
// when location changes useEffect is triggered and updates the state of setFiltered
// location needs to be in the dependancy array to see the changes in useEffect
    return <article className="flavor">
        {
            filteredFlavors.map((filteredFlavor) => <Flavor key={`flavor--${filteredFlavor.id}`}
                flavorObject={filteredFlavor} />)
        }
    </article>
}

//flavorObject is a prop 
//FlavorList is the parent component and Flavor is the child component
//FlavorList passes flavorObject as a prop to give the child component acess to useState