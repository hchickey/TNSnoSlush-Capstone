import { Outlet, Route, Routes } from "react-router-dom"
import { LocationContainer } from "../locations/LocationContainer"
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

                    <Route path="/locations" element={<Locations />} />
                    
            </Route>
        </Routes>
    )
}