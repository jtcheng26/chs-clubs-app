import React from 'react'
import Link from 'react'

interface ContactProps {
    email: string
    children: React.ReactNode
}

export default function Contact({ email, children }: ContactProps) {
    return (
        <a className="text-black" href={'mailto:${this.props.email}'}>
            {children}
        </a>
    )
}
