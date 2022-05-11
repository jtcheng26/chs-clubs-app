import { Org } from '@prisma/client'
import Image from 'next/image'
import React from 'react'
import Category from './components/Category'
import Description from './components/Description'
import IconLabel from './components/IconLabel'
import Title from './components/Title'
import CalendarSolid from '@heroicons/react/solid/CalendarIcon'
import LocationMarkerSolid from '@heroicons/react/solid/LocationMarkerIcon'
import UsersSolid from '@heroicons/react/solid/UsersIcon'

interface CardProps {
    org: Org
}

export default function Card({ org }: CardProps) {
    return (
        <div className="bg-white p-4 shadow-md rounded-lg flex flex-row space-x-4 h-56 overflow-hidden">
            <div className="flex flex-col w-26 space-y-8 flex-shrink-0">
                <Image
                    src={org.picture}
                    width={80}
                    height={80}
                    objectFit="contain"
                    alt={org.name + ' logo'}
                />
                <div className="space-y-1">
                    <IconLabel label={org.meetFreq}>
                        <CalendarSolid width={20} className="text-gray-600" />
                    </IconLabel>
                    <IconLabel label={org.meetLocation}>
                        <LocationMarkerSolid
                            width={20}
                            className="text-gray-600"
                        />
                    </IconLabel>
                    <IconLabel label={org.members + ''}>
                        <UsersSolid width={20} className="text-gray-600" />
                    </IconLabel>
                </div>
            </div>
            <div className="flex flex-col w-full">
                <div className="h-30 overflow-hidden">
                    <Title>{org.name}</Title>
                    <Description>{org.hook}</Description>
                </div>
                <div className="flex-grow" />
                <div className="flex flex-row">
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
