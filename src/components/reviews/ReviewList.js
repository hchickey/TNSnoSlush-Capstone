import { Review } from "./Review"


export const ReviewList = ({ getReviews, reviews}) => {
   

    return (

    <article className="reviews">
        {
            reviews?.map((review) => <Review key={`review--${review?.id}`}
            id={review?.id}
            review={review}
            currentUser={review?.userId}
            getReviews={getReviews}
            userName={review?.user?.fullName} />)
        }
    </article>
    ) 
}