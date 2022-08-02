import React from "react"
import { Card } from "./Card"

export const SearchLocations = ({ filtered }) => {
    const filterSearch = filtered?.map(location => <Card key={location.id} location={location} />)
    return (
        <div>
            {filtered.length > 0 &&
                // if the seachterms has any of the characters from snow cone locations show the results
                filterSearch
            }
            {!filtered.length &&
                // if the searchterms does not have any of the characters from snow cone locations say No results found
                // ! bang is a falsy condition
                <div>No results found</div>
            }
        </div>

    )
}
