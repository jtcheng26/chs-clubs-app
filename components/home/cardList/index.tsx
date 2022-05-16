import { Org } from '@prisma/client'
import React from 'react'
import Card from './card'
import useTagFilter from './hooks/useTagFilter'

interface CardListProps {
    orgs: Org[]
    searchQuery: string
    searchTags: Set<number>
}

export default function CardList({
    orgs,
    searchQuery,
    searchTags,
}: CardListProps) {
    const filteredOrgs = useTagFilter(orgs, searchTags)
    return (
        <div className="space-y-4">
            {filteredOrgs.map((org) => (
                <Card key={org.id} org={org} />
            ))}
        </div>
    )
}
