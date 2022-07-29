import { useState } from "react"
import { useNavigate } from "react-router-dom"


export const CreateFlavor = () => {
    const [flavor, update] = useState({
        userName: "",
        message: "",
        flavorName: "",
        flavorId: flavor.id,
        flavorId: flavor.id
    })

    const navigate = useNavigate()
    const localSnoSlushUser = localStorage.getItem("snoSlush_user")
    const snoSlushUserObject = JSON.parse(localSnoSlushUser)

    const saveButtonClick = (event) => {
        event.preventDefault()
        const formToSendToAPI = {
            userId: snoSlushUserObject.id,
            userName: snoSlushUserObject.fullName,
            message: flavor.message,
            flavorName: flavor.flavorName,
            flavorId: flavor.id,
            flavorId: flavor.id

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
                navigate("/createFlavor")
            }
            )
    }

    return (
        <form className="createFlavorForm">
            <h2 className="form__title">Your New Flavor</h2>
            <fieldset>
                <div className="form-group">
                    
                </div>
            </fieldset>
        </form>
    )
}