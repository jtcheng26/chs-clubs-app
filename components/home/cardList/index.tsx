import { Org } from '@prisma/client'
import React from 'react'
import Card from './card'

interface CardListProps {
    orgs: Org[]
    searchQuery: string
    searchTags: string[]
}

export default function CardList({
    orgs,
    searchQuery,
    searchTags,
}: CardListProps) {
    return (
        <div className="space-y-4">
            {orgs.map((org) => (
                <Card key={org.id} org={org} />
            ))}
        </div>
    )
}
