import { Outlet, Route, Routes } from "react-router-dom"
import { CityDetails } from "../cities/CityDetails"
import { CreateFlavor } from "../create/CreateFlavor"
import { Profile } from "../profile/Profile"
import { Search } from "../search/Search"
import "./ApplicationViews.css"


export const ApplicationViews = ({locations}) => {
    return (
        <Routes>
            <Route path="/" element={
                <>  <div className="home_search" style={{ backgroundImage: "url(/logo/SnoRainbow.png)"}}>
                    <h1 className="snowconeLocations">Snow Cone Locations</h1>
                    <div className="chillin">Grab your chillin' buddie for a chillin' treat!</div>
                    <div><Search location={locations} /></div>
                    <Outlet />
                    </div>
                </>
            }>
                
            </Route>
            <Route path="/:locationId" element={<CityDetails />} />
            <Route path="create" element={ <CreateFlavor /> } />
            <Route path="/profile" element={ <Profile /> } />
            
        </Routes>
    )
}