import PageHeader from '../components/templates/headers/pageHeader'
import Page from '../components/templates/layouts/page'
import prismaClient from '../lib/prisma'

export default function Home({ orgs }) {
    return (
        <Page>
            <PageHeader>All Clubs and Organizations</PageHeader>
        </Page>
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
