import React, { useEffect, useState } from "react"


import { SearchLocations } from "./SearchLocations"


export const Search = () => {
    const [searchField, setSearchField] = useState("")
    const [searchShow, setSearchShow] = useState(false)
    const [locations, setLocations] = useState([])
    //filtered is how you search by location name in the search bar
    const filtered = locations?.filter(
        location => {
            return (
                location.city.toLowerCase().includes(searchField.toLocaleLowerCase())
            )
        }
    )


    // fetching all the locations from the api for them to show up in the search
    useEffect(
        () => {
            fetch(`http://localhost:8088/locations`)
                .then(res => res.json())
                .then((locationsArray) => {
                    setLocations(locationsArray)
                })
        },
        []
    )
    // function for the onChange event
    const handleChange = (event) => {
        setSearchField(event.target.value)
        // this means every time you change the input value, it shows the results of the search
        if (event.target.value === "") {
            setSearchShow(false)
        // if search field input is empty don't show results
        }
        else {
            setSearchShow(true)
        // if it's not empty show the list of search results
        }
    }
// hides the locations
    function searchLocations() {
        if (searchShow) {
            return (
                <SearchLocations filtered={filtered} />
            )
        }
    }
    // input field for when the user is typing
    return (
        <section className="search">
            <div>
                <input
                    className="searchBar"
                    type="search"
                    placeholder="Search Snow Cone Locations"
                    onChange={handleChange}
                />
            </div>
            {searchLocations()}
        </section>


    )
}