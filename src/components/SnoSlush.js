import { Route, Routes } from "react-router-dom"
import { Authorized } from "./views/Authorized"
import { ApplicationViews } from "./views/ApplicationViews"
import { NavBar } from "./nav/NavBar"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import "./SnoSlush.css"
import { LocationContainer } from "./locations/LocationContainer"


export const SnoSlush = () => {
    return <Routes>
        <Route path="/login" element={<Login />} />
		<Route path="/register" element={<Register />} />

        <Route path="*" element={
            <Authorized>
                <>
                    <NavBar />
                    <ApplicationViews />
                    <LocationContainer />
                </>
            </Authorized>
        } />
    </Routes>
}