import React from 'react'
import { ChildrenProps } from '../../../../templates/props'

export default function Description({ children }: ChildrenProps) {
    return <div className="text-sm text-black font-light">{children}</div>
}
