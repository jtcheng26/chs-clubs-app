import { Org } from '@prisma/client'
import Image from 'next/image'
import React from 'react'
import Description from './components/Description'
import Title from './components/Title'

interface CardProps {
    org: Org
}

export default function Card({ org }: CardProps) {
    return (
        <div className="bg-white p-4 shadow-md rounded-lg flex flex-row space-x-4">
            <div className="flex flex-col space-y-2">
                <Image
                    src={org.picture}
                    width={50}
                    height={50}
                    objectFit="contain"
                    alt={org.name + ' logo'}
                />
                Details
            </div>
            <div className="flex flex-col">
                <Title>{org.name}</Title>
                <Description>{org.hook}</Description>
                <div className="flex-grow" />
                Tags
            </div>
        </div>
    )
}
