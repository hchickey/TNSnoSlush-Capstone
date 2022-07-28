import { Route, Routes } from "react-router-dom"
import { Authorized } from "./views/Authorized"
import { ApplicationViews } from "./views/ApplicationViews"
import { NavBar } from "./nav/NavBar"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import "./SnoSlush.css"
import { Search } from "./search/Search"




export const SnoSlush = ({ locations}) => {
    return <Routes>
        <Route path="/login" element={<Login />} />
		<Route path="/register" element={<Register />} />

        <Route path="*" element={
            <Authorized>
                <>
                    <NavBar />
                    <ApplicationViews />
                    <div> <Search location={locations} />
                   </div>
                   

                
                </>
            </Authorized>
        } />
    </Routes>
}