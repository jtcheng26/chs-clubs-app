import React from 'react'

interface CategoryProps {
    name: string
    color: string
    selected: boolean
    onClick: () => void
}

export default function Category({
    name,
    color,
    onClick,
    selected,
}: CategoryProps) {
    const defaultColor = 'bg-gray-500'
    return <div>Category</div>
}
