import { Link } from "react-router-dom"


export const Cities = ({ id, city }) => {
    return <section className="knoxville">
        <div>
            <Link to={`/${id}`}> {city} </Link>
        </div>
    </section>
}