import React from 'react'
import { ChildrenProps } from '../../../../templates/props'

export default function Title({ children }: ChildrenProps) {
    return <div className="text-lg text-black font-bold">{children}</div>
}
