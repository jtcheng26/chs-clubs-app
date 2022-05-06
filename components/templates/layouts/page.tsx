import React from 'react'

export default function Page({ children }) {
    return (
        <div className="min-h-screen w-full px-4 py-8 space-y-8">
            {children}
        </div>
    )
}
