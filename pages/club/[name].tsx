import { useRouter } from 'next/router'
import React from 'react'
import PageHeader from '../../components/templates/headers/pageHeader'
import NavBar from '../../components/templates/layouts/navbar'
import Page from '../../components/templates/layouts/page'
import { Pages } from '../../constants/pages'

export default function ClubPage() {
    const router = useRouter()
    const { name } = router.query
    return (
        <>
            <div className="fixed top-0 left-0 right-0">
                <NavBar currentPage={Pages.HOME} />
            </div>
            <div className="mt-24">
                <Page>
                    <PageHeader>{name}</PageHeader>
                </Page>
            </div>
        </>
    )
}
