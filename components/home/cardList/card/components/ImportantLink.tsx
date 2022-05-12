import React from 'react'

interface ImportantLinkProps {
    href: string
    children: React.ReactNode
}

export default function ImportantLink({ href, children }: ImportantLinkProps) {
    return (
        <a className="text-orange-600 hover:text-orange-400" href={href}>
            {children}
        </a>
    )
}
