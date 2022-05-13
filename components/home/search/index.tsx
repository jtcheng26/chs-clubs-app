import React from 'react'
import { Org } from '@prisma/client'


export default function Filter({ placeholder, setSearchTags }) {
    return (
    <div className="search">
        <div className="searchInputs">
            <input type="text" placeholder=" Search"/>
            <div className="searchIcon"></div>
        </div>
        <div className="dataResults"></div>
    
    </div>
    )
}
