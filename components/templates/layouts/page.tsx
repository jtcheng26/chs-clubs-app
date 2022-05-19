import React from 'react'
import { ChildrenProps } from '../props'

export default function Page({ children }: ChildrenProps) {
    return (
        <div className="min-h-screen w-full px-4 py-8 space-y-8">
            {children}
        </div>
    )
}
