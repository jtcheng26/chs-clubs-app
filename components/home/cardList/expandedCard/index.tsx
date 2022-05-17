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

    return (
        <div className="expandedCard display-flex justify-start flex-column">
            <div className="titleSection display-flex justify-start flex-row">
                <div className="logoAndName">
                    <Image
                        src={org.picture}
                        width={80}
                        height={80}
                        objectFit="contain"
                        alt={org.name + ' logo'}
                    />
                    <Title align-items-center>{org.name}</Title>
                </div>
            </div>
            <div className="genInfo flex-col">
                <IconLabel label={org.meetFreq}>
                    <CalendarSolid
                        width={30}
                        className="text-gray-600"
                    />
                </IconLabel>
                <IconLabel label={org.meetLocation}>
                    <LocationMarkerSolid
                        width={30}
                        className="text-gray-600"
                    />
                </IconLabel>
            </div>
            <div className="tags display-flex justify-start flex flex-row space-x-2">
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
            <div className="descriptionSection flex-col">
                <div>Description</div>
                <Description>{org.hook}</Description>
            </div>
            <div className="importantLinksSection flex-col">
                <LinkSolid
                    width={20}
                    className="text-gray-600"
                />
                {org.links.map((links) => (
                    <ImportantLink
                        href={links}
                    >{links}</ImportantLink>
                ))}
            </div>
            <div className="contactSection flex-col">
                <MailSolid
                    width={20}
                    className="text-gray-600"
                />
                <div>
                    {org.sponsors.map((sponsor) => (<>
                        <ContactLabel>
                            {sponsor.name}
                        </ContactLabel>
                        <Contact
                            email={sponsor.email}
                        >
                            {sponsor.email}
                        </Contact></>
                    ))}
                </div>
            </div>
            <div className="numMembers">
                <IconLabel label={org.members + ''}>
                    <UsersSolid width={20} className="text-gray-600" />
                </IconLabel>
            </div>
        </div>
    )
}
