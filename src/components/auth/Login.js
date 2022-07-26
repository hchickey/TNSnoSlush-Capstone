import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import "./Login.css"


export const Login = () => {
    const [email, set] = useState("haley@hickey.com")
    const navigate = useNavigate()

// gets user info from api to store in local storage
// if email doesn't match api an alert window pops up
    const handleLogin = (e) => {
        e.preventDefault()
    
        return fetch(`http://localhost:8088/users?email=${email}`)
            .then(response => response.json())
            .then(foundUsers => {
                if (foundUsers.length === 1) {
                    const user = foundUsers[0]
                    localStorage.setItem("snoSlush_user", JSON.stringify({
                        id: user.id
                    }))


                    navigate("/")
                }
                else {
                    window.alert("Invalid login")
                }
            })
    }

    return (
        <main className="container--login">
            <section>
                <form className="form--login" onSubmit={handleLogin}>
                    <img src="/logo/SnoLogo.png" alt=""/>
                    <h2>Please sign in</h2>
                    <fieldset>
                        <label htmlFor="inputEmail"> Email address </label>
                        <input type="email"
                            value={email}
                            onChange={event => set(event.target.value)}
                            className="form-control"
                            placeholder="Email address"
                            required autoFocus />
                    </fieldset>
                    <fieldset>
                        <button type="submit">
                            Sign in
                        </button>
                    </fieldset>
                </form>
            </section>
            <section className="link--register">
                <Link to="/register">Not a Sno Slusher yet?</Link>
            </section>
        </main>
    )
}