import { OrgType, Org } from '@prisma/client'
import { useState } from 'react'
import CardList from '../components/home/cardList'
import Filter from '../components/home/filter'
import SearchBar from '../components/home/search'
import PageHeader from '../components/templates/headers/pageHeader'
import NavBar from '../components/templates/layouts/navbar'
import Page from '../components/templates/layouts/page'
import { Pages } from '../constants/pages'
import prismaClient from '../lib/prisma'
import { Prisma } from '@prisma/client'

const userWithRelations = Prisma.validator<Prisma.OrgArgs>()({
    include: { categories: true, sponsors: true },
})
export type OrgWithAll = Prisma.OrgGetPayload<typeof userWithRelations>

interface HomeProps {
    orgs: OrgWithAll[]
}

export default function Home({ orgs }: HomeProps) {
    const [searchQuery, setSearchQuery] = useState<string>('')
    const [searchTags, setSearchTags] = useState<Set<number>>(new Set([]))
    return (
        <>
            <div className="fixed top-0 left-0 right-0">
                <NavBar currentPage={Pages.HOME} />
            </div>
            <div className="mt-24">
                <Page>
                    <PageHeader>All Clubs and Organizations</PageHeader>
                    <div className="space-y-8">
                        <SearchBar setSearchQuery={setSearchQuery} />
                        <Filter
                            setSearchTags={setSearchTags}
                            searchTags={searchTags}
                        />
                    </div>
                    <CardList
                        orgs={orgs}
                        searchQuery={searchQuery}
                        searchTags={searchTags}
                    />
                </Page>
            </div>
        </>
    )
}

export async function getServerSideProps() {
    // const orgs2 = await prismaClient.org.findMany({
    //     include: {
    //         sponsors: true,
    //         categories: true,
    //     },
    // })
    const orgs = [
        {
            id: 1,
            type: OrgType.CLUB,
            picture: '/images/logo.png',
            name: 'Org name',
            hook: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            description: 'Org description',
            meetDay: 'Monday',
            meetFreq: 'Weekly',
            meetLocation: 'Virtual',
            links: ['/', '/help'],
            email: 'abcdefg@gmail.com',
            sponsors: [
                {
                    id: 2,
                    role: 'Teacher',
                    name: 'Teacher #1',
                    email: 'tecaher@gmail.com',
                    orgs: [],
                },
            ],
            members: 10,
            categories: [
                {
                    id: 1,
                    name: 'Category 1',
                    color: '#26f',
                },
                {
                    id: 2,
                    name: 'Category 2',
                    color: '#f62',
                },
            ],
        },
        {
            id: 5,
            type: OrgType.CLUB,
            picture: '/images/logo.png',
            name: 'Org name 2',
            hook: 'Org hook',
            description: 'Org description',
            meetDay: 'Monday',
            meetFreq: 'Weekly',
            meetLocation: 'Room 604',
            links: ['/', '/help'],
            email: 'abcdefg@gmail.com',
            sponsors: [
                {
                    id: 6,
                    role: 'Teacher',
                    name: 'Teacher #1',
                    email: 'tecaher@gmail.com',
                    orgs: [],
                },
            ],
            members: 10,
            categories: [
                {
                    id: 1,
                    name: 'Category 1',
                    color: '#26f',
                },
            ],
        },
    ]
    return {
        props: { orgs },
    }
}
