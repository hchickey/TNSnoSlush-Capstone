
export const Review = ( {reviewObject} ) => {
    return <section className="review">
        <div className="single_review">{reviewObject.message}</div>
    </section>
}