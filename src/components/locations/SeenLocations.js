// import { useEffect, useState } from "react"



// export const Locations = () => {
//     const [locations, setLocations] = useState([])

//     useEffect(
//         () => { // using localhost to get all the snow cone places from api
//             fetch(`http://localhost:8088/locations`)
//             .then(response => response.json())
//             .then((locationsArray) => { // this is a function so we are passing a parameter
//                 setLocations(locationsArray) // here we are passing the argument
                
//             })
//         },
//         [] // When this array is empty, you are observing initial component state
//     )

  
    
// }



// const deleteCreatedFlavors = (id) => {
//     return <button onClick={() => {
//         fetch(`http://localhost:8088/createdFlavors/${id}`, {
//             method: "DELETE"
//         })
//             .then(res => res.json())
//             .then(() => {
//                const removeFlavorIndex = createdFlavors.findIndex((flavor) => flavor.id === id) 
//                const newList = createdFlavors.splice(removeFlavorIndex, 1)
//                setCreatedFlavors(...newList)
//             })
//     }} className="flavor__delete">Delete Flavor</button>
// }


// return <>

// <h2>Your Created Flavors</h2>

// <article className="created__flavors">
//     {
//         !!createdFlavors.length &&
//         createdFlavors?.map((createFlavor) => {
//             const flavorOneName = flavors.find((flavor) => flavor.id === createFlavor.flavors)
//             const flavorTwoName = flavors.find((flavor) => flavor.id === createFlavor.flavors2)
//             return <section className="created__form" key={`createdFlavors--${createFlavor.id}`}>
//                 <header>{createFlavor.flavorName}</header>
//                 <div>{createFlavor.message}</div>
//                 <div>{flavorOneName?.flavorName}</div>
//                 <div>{flavorTwoName?.flavorName}</div>
//                 <footer>{createFlavor.userName}</footer>
//                 {deleteCreatedFlavors(createFlavor.id)}

//             </section>
//         })
//     }
// </article>
// </>