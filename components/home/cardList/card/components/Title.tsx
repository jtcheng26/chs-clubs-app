import React from 'react'

interface TitleProps {
    children?: React.ReactNode
    big?: boolean
}

export default function Title({ children, big }: TitleProps) {
    return (
        <div
            className={'text-black font-bold ' + (big ? 'text-3xl' : 'text-lg')}
        >
            {children}
        </div>
    )
}
