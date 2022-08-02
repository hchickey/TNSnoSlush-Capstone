import { Navigate, useLocation } from "react-router-dom"

// invoked on SnoSlush.js
export const Authorized = ({ children }) => {
    const location = useLocation()
// if the user has snoSlush_user in local storage in the browser, meaning they are logged in, then they get access to the children elements on SnoSlush.js
    if (localStorage.getItem("snoSlush_user")) {
        return children
    }
// if the user does not have snoSlush_user meaning, they are not logged in, then they are taken to the log in screen
    else {
        return <Navigate
            to={`/login/${location.search}`}
            replace
            state={{ location }} />
    }
}

// this allows me to use my own routing 
// authorized is making sure only a certain kind of user can login to my app. Like the ones in my database. 
// checks to see if they're logged in 