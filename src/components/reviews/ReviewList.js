import { useEffect, useState } from "react"
import { Review } from "./Review"


export const ReviewList = ({location}) => {
    const [reviews, setReviews] = useState([])

    useEffect(
        () => {
            fetch(`http://localhost:8088/reviews`)
            .then(res => res.json())
            .then((reviewArray) => {
                const myReviews = reviewArray.filter(review => review.locationId === location?.id)
                setReviews(myReviews)
            })
        },
        [location]
    )

    return <article className="reviews">
        {
            reviews.map((review) => <Review key={`review--${review.id}`}
            reviewObject={review} />)
        }
    </article>
}