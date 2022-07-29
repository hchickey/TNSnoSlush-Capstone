import React from "react"
import { Card } from "./Card"

export const SearchLocations = ({filtered}) => {
    const filterSearch = filtered?.map( location => <Card key={location.id} location={location} />)
    return (
        <div>
            {filtered.length > 0 &&
            // turns length number to a boolean
            filterSearch
            }
              {!filtered.length &&
            // if length is not true say No results found
            <div>No results found</div>
            }
        </div>

    )
}