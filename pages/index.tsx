import { Category, OrgType, Role } from '@prisma/client'
import { useState } from 'react'
import CardList from '../components/home/cardList'
import Filter from '../components/home/filter'
import SearchBar from '../components/home/search'
import { Pages } from '../constants/pages'
import { Prisma } from '@prisma/client'
import Layout from '../components/templates/layouts/layout'
import prismaClient from '../lib/prisma'

const userWithRelations = Prisma.validator<Prisma.OrgArgs>()({
    include: { categories: true, sponsors: true },
})
export type OrgWithAll = Prisma.OrgGetPayload<typeof userWithRelations>

interface HomeProps {
    orgs: OrgWithAll[]
    categories: Category[]
}

export default function Home({ orgs, categories }: HomeProps) {
    const [searchQuery, setSearchQuery] = useState<string>('')
    const [searchTags, setSearchTags] = useState<Set<number>>(new Set([]))
    return (
        <Layout page={Pages.HOME} title="All Clubs and Organizations">
            <div className="space-y-8">
                <SearchBar setSearchQuery={setSearchQuery} />
                <Filter
                    tags={categories}
                    setSelectedTags={setSearchTags}
                    selectedTags={searchTags}
                />
            </div>
            <CardList
                orgs={orgs}
                searchQuery={searchQuery}
                searchTags={searchTags}
            />
        </Layout>
    )
}

export async function getServerSideProps() {
    const orgs2 = await prismaClient.org.findMany({
        include: {
            sponsors: true,
            categories: true,
        },
    })
    const categories2 = await prismaClient.category.findMany()
    const categories = [
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
        {
            id: 3,
            name: 'Category 1',
            color: '#26f',
        },
        {
            id: 4,
            name: 'Category 2',
            color: '#f62',
        },
        {
            id: 5,
            name: 'Category 1',
            color: '#26f',
        },
        {
            id: 6,
            name: 'Category 2',
            color: '#f62',
        },
        {
            id: 7,
            name: 'Category 1',
            color: '#26f',
        },
        {
            id: 8,
            name: 'Category 2',
            color: '#f62',
        },
    ]

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
                    role: Role.TEACHER,
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
                    role: Role.TEACHER,
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
        props: { orgs, categories },
    }
}
