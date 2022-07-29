import { Outlet, Route, Routes } from "react-router-dom"
import { CityDetails } from "../cities/CityDetails"
import { Locations } from "../locations/Locations"
import { Search } from "../search/Search"


export const ApplicationViews = ({locations}) => {
    return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1 className="snowconeLocations">Snow Cone Locations</h1>
                    <div className="chillin">Grab your chillin' buddie for a chillin' treat!</div>
                    <div><Search location={locations} /></div>
                    <Outlet />
                </>
            }>
                <Route path="/" element={<Locations />} />
            </Route>
            <Route path="/:locationId" element={<CityDetails />} />
        </Routes>
    )
}