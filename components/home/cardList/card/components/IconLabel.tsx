import React from 'react'

interface IconLabelProps {
    label: string
    children: React.ReactNode
}

export default function IconLabel({ children, label }: IconLabelProps) {
    return (
        <div className="flex flex-row space-x-2 text-sm text-gray-700">
            {children}
            <span>{label}</span>
        </div>
    )
}
