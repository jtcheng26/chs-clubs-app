import { useState } from 'react'
import CardList from '../components/home/cardList'
import Filter from '../components/home/filter'
import SearchBar from '../components/home/search'
import PageHeader from '../components/templates/headers/pageHeader'
import NavBar from '../components/templates/layouts/navbar'
import Page from '../components/templates/layouts/page'
import { Pages } from '../constants/pages'
import prismaClient from '../lib/prisma'

export default function Home({ orgs }) {
    const [searchQuery, setSearchQuery] = useState('')
    const [searchTags, setSearchTags] = useState([])
    return (
        <>
            <div className="sticky top-0 left-0 right-0">
                <NavBar currentPage={Pages.HOME} />
            </div>
            <Page>
                <PageHeader>All Clubs and Organizations</PageHeader>
                <div>
                    <SearchBar setSearchQuery={setSearchQuery} />
                    <Filter setSearchTags={setSearchTags} />
                </div>
                <CardList
                    orgs={orgs}
                    searchQuery={searchQuery}
                    searchTags={searchTags}
                />
            </Page>
        </>
    )
}

export async function getServerSideProps() {
    const orgs = await prismaClient.org.findMany({
        include: {
            sponsors: true,
            categories: true,
        },
    })
    return {
        props: { orgs },
    }
}
