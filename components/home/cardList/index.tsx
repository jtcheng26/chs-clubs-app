import React, { useEffect } from 'react'
import { OrgWithAll } from '../../../pages'
import Card from './card'
import useSearch from './hooks/useSearchQuery'
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
    const search = useSearch(orgs)
    const filteredOrgs = useTagFilter(search(searchQuery), searchTags)

    return (
        <div className="space-y-4">
            {filteredOrgs.map((org) => (
                <Card key={org.id} org={org} />
            ))}
        </div>
    )
}
