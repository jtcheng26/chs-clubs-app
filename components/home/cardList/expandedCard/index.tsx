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
import Link from 'next/link'

interface ExpandedCardProps {
    org: OrgWithAll
}

export default function ExpandedCard({ org }: ExpandedCardProps) {
    return (
        <div className="flex h-screen m-3 bg-white rounded-lg flex-col">
            <div className="flex h-1/6 w-full">
                <div className="md:block w-1/3 w-26 border-white">
                    <Image
                        src={org.picture}
                        width={80}
                        height={80}
                        objectFit="contain"
                        alt={org.name + ' logo'}
                    />
                </div>
                <div className="flex-col w-full overflow-hidden">
                    <div className="md:block h-3/4 rounded">
                        <Title>{org.name}</Title>
                    </div>
                </div>
            </div>
            <div className="flex h-1/10 w-full ">
                <IconLabel label={org.meetFreq}>
                    <CalendarSolid
                        width={20}
                        className="text-gray-600"
                    />
                </IconLabel>
            </div>
            <div className="flex h-1/10 w-full">
                <IconLabel label={org.meetLocation}>
                    <LocationMarkerSolid
                        width={20}
                        className="text-gray-600"
                    />
                </IconLabel>
            </div>
            <div className="flex flex-row space-x-2">
                {org.categories?.map((category) => (
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
            <div className="flex h-1/3 w-full flex-col">
                <div className="font-bold text-lg">
                    Description
                </div>
                <div>
                    <Description>{org.hook}</Description>
                </div>
            </div>
            <div className="flex h-1/6 w-full flex-col">
                <div className="flex flex-row font-bold text-lg">
                    <LinkSolid
                        width={20}
                        className="text-gray-600"
                    />
                    Important Links
                </div>
                {org.links.map((links) => (
                    <ImportantLink
                        href={links}
                        children={links}
                    />
                ))}
            </div>
            <div className="flex h-1/10 w-full flex-row font-bold text-lg">
                <UsersSolid
                    width={20}
                    className="text-gray-600"
                />
                Members: {org.members}
            </div>
            <div className="flex h-1/10 flex-col font-bold text-lg">
                <div className="flex flex-row font-bold text-lg">
                    <ContactLabel>
                        <MailSolid
                            width={20}
                            className="text-gray-600"
                        />
                    </ContactLabel>
                    Contact
                </div>
                <div className="flex flex-col font-light">
                    <Contact
                        href={org.email}
                        children={org.email}
                    />

                    {/*{org.sponsors.map((links) => (
                        <Contact
                            href={links}
                            children={links}
                        />
                    ))}*/}
                </div>
            </div>

        </div>
        
    )
    
}
