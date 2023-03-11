import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./CreateFlavor.css"


export const CreateFlavor = () => {
    const [flavors, setFlavors] = useState([])
    const [flavor, update] = useState({
        userName: "",
        message: "",
        flavorName: "",
        flavors: 0,
        flavors2: 0,
        userId: 0
    })

    const navigate = useNavigate()
    const localSnoSlushUser = localStorage.getItem("snoSlush_user")
    const snoSlushUserObject = JSON.parse(localSnoSlushUser)

    // gets flavors for dropdown
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

    const saveButtonClick = (event) => {
        event.preventDefault()

        if (!flavor.flavors || !flavor.flavors2 ) {
            alert('Hey you forgot to pick a flavor')
        }
        else {

            const formToSendToAPI = {
                userId: snoSlushUserObject.id,
                userName: flavor.userName,
                message: flavor.message,
                flavorName: flavor.flavorName,
                flavors: flavor.flavors,
                flavors2: flavor.flavors2
    
            }
    
    
            return fetch(`http://localhost:8088/createdFlavors`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formToSendToAPI)
            })
                .then(res => res.json())
                .then(
                    () => {
                        navigate("/profile")
                    }
                )
        }

    }


    // form for users to create snow cone flavors
    return (
        <form className="createFlavorForm">
             <img className="sno_logo" src="/logo/SnoLogo.png" alt=""/>
            <h2 className="form__title">Your New Flavor</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="flavors">Pick first flavor</label>
                    <select
                        onChange={
                            (event) => {
                                const copy = { ...flavor }
                                copy.flavors = parseInt(event.target.value)
                                update(copy)
                            }
                        }>
                        <option value={0}>Select flavor...</option>
                        {flavors.sort((a, b) => {
                            if (a.flavorName > b.flavorName) {
                                return 1;
                            }
                            if (a.flavorName < b.flavorName) {
                                return -1;
                            }
                            return 0;
                        }).map(
                            (flavor) => {
                                return (
                                    <option key={flavor.id} className="flavor__type" name="flavor__type" value={flavor.id}>
                                        {flavor.flavorName}
                                    </option>)
                            }
                        )}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="flavors">Pick second flavor</label>
                    <select
                        onChange={
                            (event) => {
                                const copy = { ...flavor }
                                copy.flavors2 = parseInt(event.target.value)
                                update(copy)
                            }
                        }>
                        <option value={0}>Select flavor...</option>
                        {flavors.map(
                            (flavor) => {
                                return (
                                    <option key={flavor.id} className="flavor__type" name="flavor__type" value={flavor.id}>
                                        {flavor.flavorName}

                                    </option>)
                            }
                        )}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                        required autoFocus
                        type="textarea"
                        className="form-control"
                        placeholder="type here"
                        value={flavor.userName}
                        onChange={
                            (event) => {
                                const copy = { ...flavor }
                                copy.userName = event.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Story About Your Flavor</label>
                    <input
                        required autoFocus
                        type="textarea"
                        className="form-control"
                        placeholder="type story here"
                        value={flavor.message}
                        onChange={
                            (event) => {
                                const copy = { ...flavor }
                                copy.message = event.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Flavor Name</label>
                    <input
                        required autoFocus
                        type="textarea"
                        className="form-control"
                        placeholder="type here"
                        value={flavor.flavorName}
                        onChange={
                            (event) => {
                                const copy = { ...flavor }
                                copy.flavorName = event.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <button
                onClick={
                    (event) => {
                        saveButtonClick(event)
                    }
                }
                className="btn">
                Submit Flavor
            </button>
        </form>

    )
}