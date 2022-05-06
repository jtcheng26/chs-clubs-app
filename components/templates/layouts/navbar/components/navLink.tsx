import Link from 'next/link'
import React from 'react'

export default function NavLink({ active, href, children }) {
    const activeStyle = 'text-white bg-primary-50 md:text-primary-50'
    const regStyle = 'hover:bg-gray-100 md:text-gray-700'
    return (
        <li>
            <Link href={href} aria-current="page">
                <a
                    className={`block py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0 dark:text-white ${
                        active ? activeStyle : regStyle
                    }`}
                >
                    {children}
                </a>
            </Link>
        </li>
    )
}
