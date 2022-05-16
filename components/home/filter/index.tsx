import React from 'react'
import Category from '../cardList/card/components/Category'

const tags = [
    {
        id: 1,
        name: 'Category 1',
        color: '#26f',
    },
    {
        id: 2,
        name: 'Category 2',
        color: '#f62',
    },
    {
        id: 3,
        name: 'Category 1',
        color: '#26f',
    },
    {
        id: 4,
        name: 'Category 2',
        color: '#f62',
    },
    {
        id: 5,
        name: 'Category 1',
        color: '#26f',
    },
    {
        id: 6,
        name: 'Category 2',
        color: '#f62',
    },
    {
        id: 7,
        name: 'Category 1',
        color: '#26f',
    },
    {
        id: 8,
        name: 'Category 2',
        color: '#f62',
    },
]

interface FilterProps {
    searchTags: Set<number>
    setSearchTags: (f: Set<number>) => void
}

export default function Filter({ searchTags, setSearchTags }: FilterProps) {
    function toggleTag(id: number) {
        const newTags = new Set<number>(searchTags)
        return () => {
            if (searchTags.has(id)) newTags.delete(id)
            else if (searchTags.size == 1) {
                newTags.clear()
                newTags.add(id)
            } else newTags.add(id)
            setSearchTags(newTags)
        }
    }
    function isActive(id: number) {
        return searchTags.size == 0 || searchTags.has(id)
    }
    return (
        <div className="flex flex-col space-y-2">
            <span className="text-gray-500">Filter by category</span>
            <div className="flex flex-row flex-wrap">
                {tags.map((tag) => (
                    <div className="pr-2 pb-2" key={tag.id}>
                        <Category
                            color={tag.color}
                            name={tag.name}
                            onClick={toggleTag(tag.id)}
                            selected={isActive(tag.id)}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
