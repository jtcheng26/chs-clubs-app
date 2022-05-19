import React from 'react'
import AcademicCap from '@heroicons/react/solid/AcademicCapIcon'

interface BreadcrumbsProps {
    links: {
        name: string
        href: string
    }[]
}

export default function Breadcrumbs({ links }: BreadcrumbsProps) {
    return (
        <nav className="flex">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                    <a
                        href={links[0].href}
                        className="inline-flex items-center space-x-2 text-lg font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                        <AcademicCap width={30} height={30} />
                        <span>{links[0].name}</span>
                    </a>
                </li>
                {links.slice(1, links.length - 1).map((link) => (
                    <li key={link.name}>
                        <div className="flex items-center">
                            <svg
                                className="w-8 h-8 text-gray-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                            <a
                                href={link.href}
                                className="ml-1 text-lg font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                            >
                                {link.name}
                            </a>
                        </div>
                    </li>
                ))}

                <li>
                    <div className="flex items-center">
                        <svg
                            className="w-8 h-8 text-gray-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                        <span className="ml-1 text-lg font-medium text-gray-400 md:ml-2 dark:text-gray-500">
                            {links[links.length - 1].name}
                        </span>
                    </div>
                </li>
            </ol>
        </nav>
    )
}
