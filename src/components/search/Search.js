import React, { useEffect, useState } from "react"
import { Scroll } from "./Scroll"
import { SearchLocations } from "./SearchLocations"


export const Search = () => {
    const [searchField, setSearchField] = useState("")
    const [searchShow, setSearchShow] = useState(false)
    const [locations, setLocations] = useState([])

    const filtered = locations?.filter(
        location => {
            return (
                location.city.toLowerCase().includes(searchField.toLocaleLowerCase())
            )
        }
    )

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

    const handleChange = (event) => {
        setSearchField(event.target.value)

        if(event.target.value === "") {
            setSearchShow(false)
        }
        else {
            setSearchShow(true)
        }
    }

    function searchLocations() {
        if (searchShow) {
            return (
                <Scroll>
                    <SearchLocations filtered={filtered} />
                </Scroll>
            )
        }
    }

    return (
        <section className="search">
            <div>
                <input
                    className="searchBar"
                    type = "search"
                    placeholder="Search Snow Cone Locations"
                    onChange={handleChange}
                    />
            </div>
            {searchLocations()}
        </section>
    )
}