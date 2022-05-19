import { GetServerSidePropsContext } from 'next'
import React from 'react'
import { OrgWithAll } from '..'
import ExpandedCard from '../../components/home/cardList/expandedCard'
import Layout from '../../components/templates/layouts/layout'
import { Pages } from '../../constants/pages'
import prismaClient from '../../lib/prisma'
import PageNotFound from '../404'

interface ClubPageProps {
    org: OrgWithAll
}

export default function ClubPage({ org }: ClubPageProps) {
    return org ? (
        <Layout page={Pages.HOME} title={org.name}>
            { <ExpandedCard org={org} /> }
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
    })
    return {
        props: {
            org: club,
        },
    }
}

