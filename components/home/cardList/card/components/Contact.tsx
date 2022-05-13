import React from 'react'

interface ContactProps {
    href: string
    children: React.ReactNode
}

export default function Contact({ href, children }: ContactProps) {
    return <a className="text-black" href={href}>{children}</a>
}
