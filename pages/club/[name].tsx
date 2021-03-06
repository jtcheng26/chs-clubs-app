import { GetServerSidePropsContext } from 'next'
import React from 'react'
import { OrgWithAll } from '..'
import ExpandedCard from '../../components/home/cardList/expandedCard'
import Breadcrumbs from '../../components/templates/headers/breadcrumbs'
import Layout from '../../components/templates/layouts/layout'
import { Pages } from '../../constants/pages'
import prismaClient from '../../lib/prisma'
import PageNotFound from '../404'

interface ClubPageProps {
    org: OrgWithAll
}

export default function ClubPage({ org }: ClubPageProps) {
    return org ? (
        <Layout page={Pages.HOME} title="">
            <Breadcrumbs
                links={[
                    {
                        name: 'Organizations',
                        href: '/',
                    },
                    {
                        name: org.identifier,
                        href: '/clubs/' + org.identifier,
                    },
                ]}
            />
            {<ExpandedCard org={org} />}
        </Layout>
    ) : (
        <PageNotFound />
    )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { name } = context.query
    const club = await prismaClient.org.findUnique({
        where: {
            identifier: name as string,
        },
        include: {
            sponsors: true,
            categories: true,
            links: true,
        },
    })
    return {
        props: {
            org: club,
        },
    }
}
