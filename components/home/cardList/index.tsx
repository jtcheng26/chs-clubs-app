import { Org } from '@prisma/client'
import React from 'react'
import { OrgWithAll } from '../../../pages'
import Card from './card'
import useSearchQuery from './hooks/useSearchQuery'
import useTagFilter from './hooks/useTagFilter'

interface CardListProps {
    orgs: OrgWithAll[]
    searchQuery: string
    searchTags: Set<number>
}

export default function CardList({
    orgs,
    searchQuery,
    searchTags,
}: CardListProps) {
    const filteredOrgs = useSearchQuery(
        useTagFilter(orgs, searchTags),
        searchQuery
    )
    return (
        <div className="space-y-4">
            {filteredOrgs.map((org) => (
                <Card key={org.id} org={org} />
            ))}
        </div>
    )
}
