import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

// creating links to other pages on my website
export const NavBar = () => {
    const navigate = useNavigate()
    const localSnoSlushUser = localStorage.getItem("snoSlush_user")
    const snoSlushUserObject = JSON.parse(localSnoSlushUser)

    return (
        <ul className="navbar">
            <div className="navbar__home">
               <Link className="navbar__link" to="/"><img className="snoHome" src="/logo/homeSno.png" alt=""/></Link>
            </div>
            <div className="navbar__create">
                <Link className="navbar__img" to="/create"><img className="snoCreate" src="/logo/createSno.png" alt=""/></Link>
            </div>
            <div className="navbar__profile">
                <Link className="navbar__link" to="/profile"><img className="snoProfile" src="/logo/profileSno.png" alt="" /></Link>
            </div>

            {
                localStorage.getItem("snoSlush_user")
                // if expression is truthy
            ? <div className="navbar__logout">
                <Link className="navbar__link" to="" onClick={() => {
                    localStorage.removeItem("snoSlush_user")
                    navigate("/", {replace: true})
                }}><img className="snoLogout" src="/logo/logoutSno.png" alt="" /></Link>
            </div>
            : ""
            }
        </ul>
    )

}