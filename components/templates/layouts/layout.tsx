import React, { useEffect, useState } from 'react'
import PageHeader from '../headers/pageHeader'
import NavBar from './navbar'
import Page from './page'
import { Pages } from '../../../constants/pages'
import debounce from 'lodash.debounce'

interface LayoutProps {
    page: Pages
    title: string
    children?: React.ReactNode
}

export default function Layout({ page, title, children }: LayoutProps) {
    const [prevScrollY, setPrevScrollY] = useState(0)
    const [visible, setVisible] = useState(true)

    useEffect(() => {
        const handleScroll = debounce(
            () => {
                const currScrollY = window.pageYOffset
                setVisible(
                    (prevScrollY > currScrollY &&
                        prevScrollY - currScrollY > 10) ||
                        currScrollY < 10
                )
                setPrevScrollY(currScrollY)
            },
            200,
            { leading: true, trailing: true }
        )

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [prevScrollY, visible])
    return (
        <>
            <div
                className={`fixed ${
                    visible ? 'top-0' : '-top-20'
                } transition-all duration-500 left-0 right-0 z-50`}
            >
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
