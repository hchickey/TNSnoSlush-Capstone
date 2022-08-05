import { useEffect, useState } from "react"
import "./profile.css"



export const Profile = () => {
    const [createdFlavors, setCreatedFlavors] = useState([])
    const [flavors, setFlavors] = useState([])
    const localSnoSlushUser = localStorage.getItem("snoSlush_user")
    const snoSlushUserObject = JSON.parse(localSnoSlushUser)

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
// use effect function is calling the createdFlavors for the first time and then when ever the delete function is done it calls it again
    useEffect(
        () => {
            getCreatedFlavors()
        },
        []
    )

    const getCreatedFlavors = () => {
        fetch(`http://localhost:8088/createdFlavors`)
            .then(res => res.json())
            .then((array) => {
                setCreatedFlavors(array)
            })
    }


    // fetch function needs a second parameter to call the delete method
    const deleteCreatedFlavors = (id) => {
        fetch(`http://localhost:8088/createdFlavors/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            // promise handling
            .then(() => {
                getCreatedFlavors()
            })

    }
// here after the delete method is done the .then calls the createdflavors again
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
                createdFlavors?.map((createFlavor) => {
                    const flavorOneName = flavors.find((flavor) => flavor.id === createFlavor.flavors)
                    const flavorTwoName = flavors.find((flavor) => flavor.id === createFlavor.flavors2)
                    return <section className="created__form" key={`createdFlavors--${createFlavor.id}`}>
                        <header className="header">{createFlavor.flavorName}</header>
                        <div>{createFlavor.message}</div>
                        <div>{flavorOneName?.flavorName}</div>
                        <div>{flavorTwoName?.flavorName}</div>
                        <footer>{createFlavor.userName}</footer>
                        <button onClick={() => deleteCreatedFlavors(createFlavor.id)}>Delete</button>

                    </section>
                })
            }
        </article>
    </>
}