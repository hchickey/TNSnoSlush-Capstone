import { useState } from "react"
import { Locations } from "./Locations"
import { LocationSearch } from "./LocationSearch"


export const LocationContainer = () => {
    const [searchTerms, setSearchTerms] = useState("")

    return <>
        <LocationSearch setterFunction={setSearchTerms} />
        <Locations searchTermsState={searchTerms} />
    </>
}