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
    const defaultColor = '#444'
    let bgColor = defaultColor
    if (selected) {
        bgColor = color
    } else {
        bgColor = defaultColor
    }
    return (
        <button
            className="py-1 px-3 md:text-sm rounded-full text-white hover:opacity-70 font-medium"
            style={{ backgroundColor: bgColor }}
            onClick={onClick}
        >
            {name}
        </button>
    )
}
