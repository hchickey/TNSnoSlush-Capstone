import { useState } from "react"
import { useNavigate } from "react-router-dom"


export const ReviewForm = () => {
    const [reviews, setReviews] = useState([])
    const [review, update] = useState({
        userId: 0,
        locationId: 0,
        message: ""
    })

    const navigate = useNavigate()
    const localSnoSlushUser = localStorage.getItem("snoSlush_user")
    const snoSlushUserObject = JSON.parse(localSnoSlushUser)

    const saveButtonClick = (event) => {
        event.preventDefault()

        const formToSendToAPI = {
            userId: snoSlushUserObject.id,
            message: review.message,
            locationId: review.locationId
        }

        return fetch(`http://localhost:8088/reviews`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formToSendToAPI)
        })
            .then(res => res.json())
            .then(
                () => {
                    navigate("/:locationId")
                }
            )
    }

    return (
        <form className="reviewForm">
            <h2 className="review__title">Leave a Review</h2>
            <fieldset>
                <div className="form-group">
                    <input
                        required autoFocus
                        type="textarea"
                        className="form-control"
                        placeholder="type review here"
                        value={review.message}
                        onChange={
                            (event) => {
                                const copy = {...review}
                                copy.message = event.target.value
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
                    Submit Review
                </button>
        </form>
    )



}