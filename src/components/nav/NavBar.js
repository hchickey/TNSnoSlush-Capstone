import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

// creating links to other pages on my website
export const NavBar = () => {
    const navigate = useNavigate()
    const localSnoSlushUser = localStorage.getItem("snoSlush_user")
    const snoSlushUserObject = JSON.parse(localSnoSlushUser)

    return (
        <ul className="navbar">
            <li className="navbar__home">
                <Link className="navbar__link" to="/">Home</Link>
            </li>
            <li className="navbar__create">
                <Link className="navbar__link" to="/create">Create Flavor</Link>
            </li>
            <li className="navbar__profile">
                <Link className="navbar__link" to="/profile">Profile</Link>
            </li>

            {
                localStorage.getItem("snoSlush_user")
                // if expression is truthy
            ? <li className="navbar__logout">
                <Link className="navbar__link" to="" onClick={() => {
                    localStorage.removeItem("snoSlush_user")
                    navigate("/", {replace: true})
                }}>Logout</Link>
            </li>
            : ""
            }
        </ul>
    )

}