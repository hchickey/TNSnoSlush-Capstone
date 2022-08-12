import { useEffect, useState } from "react"
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

    useEffect(()=>{
        getReviews()
    },[])

    return <>
        <ReviewList reviews={reviews} getReviews={getReviews} setReviews={setReviews} />
        <div className="form__reviews"><ReviewForm getReviews={getReviews} /></div>
    </>


}