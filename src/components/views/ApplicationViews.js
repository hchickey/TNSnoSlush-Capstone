import { Outlet, Route, Routes } from "react-router-dom"
import { CityDetails } from "../cities/CityDetails"
import { CreateFlavor } from "../create/CreateFlavor"
import { Profile } from "../profile/Profile"
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
                
            </Route>
            <Route path="/:locationId" element={<CityDetails />} />
            <Route path="create" element={ <CreateFlavor /> } />
            <Route path="/profile" element={ <Profile /> } />
            
        </Routes>
    )
}