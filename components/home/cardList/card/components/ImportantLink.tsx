import React from 'react'

interface ImportantLinkProps {
    href: string
    children: React.ReactNode
}

export default function ImportantLink({ href, children }: ImportantLinkProps) {
    return <a href={href}>children</a>
}
