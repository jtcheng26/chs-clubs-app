import React from 'react'

interface IconLabelProps {
    children: React.ReactNode
    label: string
}

export default function IconLabel({ children, label }: IconLabelProps) {
    return (
        <div className="flex flex-row space-x-2">
            {children}
            <span className="text-sm font-light">{label}</span>
        </div>
    )
}
