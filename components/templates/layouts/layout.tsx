import React from 'react'
import { ChildrenProps } from '../props'
import PageHeader from '../headers/pageHeader'
import NavBar from './navbar'
import Page from './page'
import { Pages } from '../../../constants/pages'

interface LayoutProps {
    page: Pages
    title: string
    children?: React.ReactNode
}

export default function Layout({ page, title, children }: LayoutProps) {
    return (
        <>
            <div className="fixed top-0 left-0 right-0 z-50">
                <NavBar currentPage={page} />
            </div>
            <div className="mt-24">
                <Page>
                    <PageHeader>{title}</PageHeader>
                    {children}
                </Page>
            </div>
        </>
    )
}
