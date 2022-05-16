import { useRouter } from 'next/router'
import React from 'react'
import Layout from '../../components/templates/layouts/layout'
import { Pages } from '../../constants/pages'

function parseClubName(name: string): string {
    return name
}

export default function ClubPage() {
    const router = useRouter()
    const { name } = router.query
    const clubName = parseClubName(name as string)
    return (
        <Layout page={Pages.HOME} title={clubName}>
            content
        </Layout>
    )
}
