import Image from 'next/image'
import React from 'react'

interface NavTitleProps {
    imgSrc: string
    children?: React.ReactNode
    href?: string
}

export default function NavTitle({ imgSrc, children, href }: NavTitleProps) {
    return (
        <a className="flex items-center" href={href}>
            <div className="mr-2 sm:mr-3 h-6 w-8 sm:h-9 sm:w-12 relative">
                <Image
                    src={imgSrc}
                    alt="Site Logo"
                    layout="fill"
                    objectFit="contain"
                />
            </div>
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                {children}
            </span>
        </a>
    )
}
