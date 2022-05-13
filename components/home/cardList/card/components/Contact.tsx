import React from 'react'

interface ContactProps {
    href: string
    children: React.ReactNode
}

export default function Contact({ href, children }: ContactProps) {
    return <a className = "text-orange-700 hover:text-orange-500" href={href}>{children}</a>
}
