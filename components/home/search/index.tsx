import React from 'react'
import { OrgWithAll } from '../../../pages'

interface SearchProps {
    data: OrgWithAll[]
    setSearchQuery: (s: string) => void
}

export default function Search({ data, setSearchQuery }: SearchProps) {
    return (
        <div className="search">
            <div className="searchInputs">
                <input type="text" placeholder=" Search" />
                <div className="searchIcon"></div>
            </div>
            <div className="dataResults"></div>
        </div>
    )
}
