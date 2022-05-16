import { Category } from '@prisma/client'
import React from 'react'
import CategoryComponent from '../cardList/card/components/Category'

interface FilterProps {
    tags: Category[]
    selectedTags: Set<number>
    setSelectedTags: (f: Set<number>) => void
}

export default function Filter({
    tags,
    selectedTags,
    setSelectedTags,
}: FilterProps) {
    function toggleTag(id: number) {
        const newTags = new Set<number>(selectedTags)
        return () => {
            if (selectedTags.has(id)) newTags.delete(id)
            else if (selectedTags.size == 1) {
                newTags.clear()
                newTags.add(id)
            } else newTags.add(id)
            setSelectedTags(newTags)
        }
    }

    function isActive(id: number) {
        return selectedTags.size == 0 || selectedTags.has(id)
    }

    return (
        <div className="flex flex-col space-y-2">
            <span className="text-gray-500 hidden md:block">
                Filter by category
            </span>
            <div className="flex flex-row flex-wrap">
                {tags.map((tag) => (
                    <div className="pr-2 pb-2" key={tag.id}>
                        <CategoryComponent
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
