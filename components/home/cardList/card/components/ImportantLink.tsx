import React from 'react'

interface ImportantLinkProps {
    href: string
    children: React.ReactNode
}

export default function ImportantLink({ href, children }: ImportantLinkProps) {
    return <a className = "text-[#C34700] hover:text-[#FF5D00]" href={href}>{children}</a>
}
