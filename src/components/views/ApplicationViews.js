import { Outlet, Route, Routes } from "react-router-dom"
import { Locations } from "../locations/Locations"

export const ApplicationViews = () => {
    return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1 className="snowconeLocations">Snow Cone Locations</h1>
                    <div className="chillin">Grab your chillin' buddie for a chillin' treat!</div>

                    <Outlet />
                </>
            }>

                    <Route path="/" element={ <Locations /> } />
            </Route>
        </Routes>
    )
}