import { Org } from '@prisma/client'
import Image from 'next/image'
import React from 'react'
import Description from './components/Description'
import Category from './components/Category'
import Title from './components/Title'

interface CardProps {
    org: Org
}

export default function Card({ org }: CardProps) {
    return (
        <div className="bg-white p-4 shadow-md rounded-lg flex flex-row space-x-4 h-48 overflow-hidden">
            <div className="flex flex-col space-y-2">
                <Image
                    src={org.picture}
                    width={70}
                    height={70}
                    objectFit="contain"
                    alt={org.name + ' logo'}
                />
                Details
            </div>
            <div className="flex flex-col">
                <div className="h-30 overflow-hidden">
                    <Title>{org.name}</Title>
                    <Description>
                        {org.hook.substring(0, Math.min(org.hook.length, 280)) +
                            '...'}
                    </Description>
                </div>
                <div className="flex-grow" />
                <div className="flex flex-row space-x-2">
                    {org.categories.map((category) => (
                        <Category
                            key={category.id}
                            name={category.name}
                            color={category.color}
                            selected
                            onClick={() => {
                                console.log('Clicked')
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
