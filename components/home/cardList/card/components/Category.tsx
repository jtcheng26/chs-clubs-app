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
    let className = defaultColor
    if (selected) {
        className = color
    } else {
        className = defaultColor
    }
    return (
        <button
            className={
                className +
                ' py-1 px-3 text-sm rounded-full text-white hover:bg-opacity-80 font-medium'
            }
            onClick={onClick}
        >
            {name}
        </button>
    )
}
