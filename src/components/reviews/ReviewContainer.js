import { useState } from "react"
import { useParams } from "react-router-dom"
import { ReviewForm } from "./ReviewForm"
import { ReviewList } from "./ReviewList"


export const ReviewContainer = () => {
    const [reviews, setReviews] = useState([])
    const { locationId } = useParams()

    const getReviews = () => {
        fetch(`http://localhost:8088/reviews?_expand=user&locationId=${locationId}`)
            .then(res => res.json())
            .then((reviewArray) => {
                setReviews(reviewArray)
            })
    }

    return <>
        <ReviewForm getReviews={getReviews} />
        <ReviewList reviews={reviews} getReviews={getReviews} />
    </>


}