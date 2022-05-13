import React from 'react'

interface ContactLabelProps {
    children: React.ReactNode
}

export default function Contact({ children }: ContactLabelProps) {
    return <a className="text-gray-600">{children}</a>
}
