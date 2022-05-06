import React from 'react'
import Card from './card'

export default function CardList({ orgs, searchQuery, searchTags }) {
    return (
        <div>
            {orgs.map((org) => (
                <Card key={org.id} org={org} />
            ))}
        </div>
    )
}
