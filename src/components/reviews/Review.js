

export const Review = ({ review, currentUser, getReviews, userName }) => {
    const localSnoSlushUser = localStorage.getItem("snoSlush_user")
    const snoSlushUserObject = JSON.parse(localSnoSlushUser)

    const deleteButton = () => {
        if (currentUser === snoSlushUserObject.id) {
            return <button onClick={() => {
                fetch(`http://localhost:8088/reviews/${review.id}`, {
                    method: "DELETE",
                })
                    .then(getReviews)
            }} className={"review__delete"}>Delete</button>
        }
        else {
            return ""
        }
    }

    return <section className="review">
        <div className="single_review"><div>{userName}:
        </div>{review?.message}</div>
        <div>
            {deleteButton()}
        </div>
    </section>
}