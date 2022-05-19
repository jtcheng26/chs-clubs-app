import React from 'react'
import { ChildrenProps } from '../props'

export default function PageHeader({ children }: ChildrenProps) {
    return <h1 className="text-4xl font-bold">{children}</h1>
}
