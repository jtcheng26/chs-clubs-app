import React from 'react'

interface ImportantLinkProps {
    href: string
    children: React.ReactNode
}

export default function ImportantLink({ href, children }: ImportantLinkProps) {
    return <a className = "text-orange-700 hover:text-orange-500" href={href}>{children}</a>
}
