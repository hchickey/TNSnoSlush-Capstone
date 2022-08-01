import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./profile.css"



export const Profile = () => {
    const [createdFlavors, setCreatedFlavors] = useState([])
    const [flavors, setFlavors] = useState([])
    const localSnoSlushUser = localStorage.getItem("snoSlush_user")
    const snoSlushUserObject = JSON.parse(localSnoSlushUser)
    const navigate = useNavigate()

    useEffect(
        () => {
            fetch(`http://localhost:8088/createdFlavors?userId=${snoSlushUserObject.id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "applications/json"
                }

            })
                .then(res => res.json())
                .then(
                    (createdArray) => {
                        setCreatedFlavors(createdArray)
                    }
                )
        },
        []
    )

    const deleteCreatedFlavors = (id) => {
        return <button onClick={() => {
            fetch(`http://localhost:8088/createdFlavors/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(() => {
                   const removeFlavorIndex = createdFlavors.findIndex((flavor) => flavor.id === id) 
                   const newList = createdFlavors.splice(removeFlavorIndex, 1)
                   setCreatedFlavors(...newList)
                })
        }} className="flavor__delete">Delete Flavor</button>
    }

    useEffect(
        () => {
            fetch(`http://localhost:8088/flavors`)
                .then(res => res.json())
                .then((flavorArray) => {
                    setFlavors(flavorArray)
                })
        },
        []
    )

    return <>

        <h2>Your Created Flavors</h2>

        <article className="created__flavors">
            {
                !!createdFlavors.length &&
                createdFlavors?.map((createFlavor) => {
                    const flavorOneName = flavors.find((flavor) => flavor.id === createFlavor.flavors)
                    const flavorTwoName = flavors.find((flavor) => flavor.id === createFlavor.flavors2)
                    return <section className="created__form" key={`createdFlavors--${createFlavor.id}`}>
                        <header>{createFlavor.flavorName}</header>
                        <div>{createFlavor.message}</div>
                        <div>{flavorOneName?.flavorName}</div>
                        <div>{flavorTwoName?.flavorName}</div>
                        <footer>{createFlavor.userName}</footer>
                        {deleteCreatedFlavors(createFlavor.id)}

                    </section>
                })
            }
        </article>
    </>
}