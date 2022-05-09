import React from 'react'

interface CategoryProps {
    name: string
    color: string
    selected: boolean
}

export default function Category({ name, color, selected }: CategoryProps) {
    const defaultColor = 'bg-gray-500'
    return <div>Category</div>
}
