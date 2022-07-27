import React from "react"
import { Card } from "./Card"

export const SearchLocations = ({filtered}) => {
    const filterSearch = filtered?.map( location => <Card key={location.id} location={location} />)
    return (
        <div>
            {filterSearch}
        </div>
    )
}