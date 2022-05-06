import React from 'react'

export default function Card({ org }) {
    return (
        <div className="bg-white p-2 shadow-md">
            {org.name}
            <div>{org.hook}</div>
        </div>
    )
}
