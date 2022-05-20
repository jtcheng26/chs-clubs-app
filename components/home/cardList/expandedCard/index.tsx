import React from 'react'
import { OrgWithAll } from '../../../../pages'
import Image from 'next/image'
import Category from '../card/components/Category'
import Description from '../card/components/Description'
import IconLabel from '../card/components/IconLabel'
import Title from '../card/components/Title'
import ImportantLink from '../card/components/ImportantLink'
import Contact from '../card/components/Contact'
import ContactLabel from '../card/components/ContactLabel'
import CalendarSolid from '@heroicons/react/solid/CalendarIcon'
import LocationMarkerSolid from '@heroicons/react/solid/LocationMarkerIcon'
import UsersSolid from '@heroicons/react/solid/UsersIcon'
import LinkSolid from '@heroicons/react/solid/LinkIcon'
import MailSolid from '@heroicons/react/solid/MailIcon'

interface ExpandedCardProps {
    org: OrgWithAll
}

export default function ExpandedCard({ org }: ExpandedCardProps) {
    console.log(org)
    return (
        <div className="bg-white p-4 shadow-md rounded-lg flex flex-row space-x-4 h-full overflow-hidden transition-shadow duration-200">
            <div className="flex flex-col w-full space-y-8 flex-shrink-0">
                <div className="flex w-full">
                    <Image
                        src={org.picture}
                        width={100}
                        height={100}
                        objectFit="contain"
                        alt={org.name + ' logo'}
                    />

                    <div className="flex-row flex items-center pl-4 w-full overflow-hidden">
                        <Title big>{org.name}</Title>
                    </div>
                </div>
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
                </div>
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
                <div className="flex flex-col">
                    <div className="font-bold text-lg">Description</div>
                    <div className="whitespace-normal">
                        <Description>{org.description}</Description>
                    </div>
                </div>
                <div className="flex h-1/6 w-full flex-col">
                    <div className="flex flex-row font-bold text-lg space-x-2 items-center">
                        <LinkSolid width={20} className="text-gray-600" />
                        <span>Important Links</span>
                    </div>
                    {org.links.map((link) => (
                        <ImportantLink key={link.id} href={link.href}>
                            {link.name}
                        </ImportantLink>
                    ))}
                </div>
                <div className="flex h-1/10 flex-col font-bold text-lg">
                    <div className="flex flex-row items-center font-bold text-lg space-x-2">
                        <ContactLabel>
                            <MailSolid width={20} className="text-gray-600" />
                        </ContactLabel>
                        <span>Contact</span>
                    </div>
                    <div className="flex flex-col font-light">
                        <Contact email={org.email}>{org.name}</Contact>
                        {org.sponsors.map((link) => (
                            <Contact key={link.id} email={link.email}>
                                {link.name}
                            </Contact>
                        ))}
                    </div>
                </div>
                <div className="flex h-1/10 w-full flex-row items-center space-x-2 font-bold text-lg">
                    <UsersSolid width={20} className="text-gray-600" />
                    <span>Members: {org.members}</span>
                </div>
            </div>
        </div>
    )
}
