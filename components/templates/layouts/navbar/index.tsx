import Link from 'next/link'
import React, { useState } from 'react'
import { Pages } from '../../../../constants/pages'
import MenuButton from './components/menuButton'
import NavTitle from './components/navTitle'
import HelpLink from './instances/helpLink'
import HomeLink from './instances/homeLink'

interface NavBarProps {
    currentPage: Pages
}

export default function NavBar({ currentPage }: NavBarProps) {
    const [menu, setMenu] = useState<boolean>(false)
    const title = 'Centennial HS Clubs and Organizations'
    const titleShort = 'Centennial HS Clubs'

    function toggleMenu() {
        setMenu(!menu)
    }

    return (
        <nav className="bg-white border-gray-200 px-4 py-4 dark:bg-gray-800 shadow-md z-50">
            <div className="flex flex-wrap justify-between items-center">
                <div>
                    <Link href="/" passHref>
                        <span className="hidden md:block">
                            <NavTitle imgSrc="/images/logo.png" href="/">
                                {title}
                            </NavTitle>
                        </span>
                    </Link>
                    <div className="md:hidden">
                        <NavTitle imgSrc="/images/logo.png" href="/">
                            {titleShort}
                        </NavTitle>
                    </div>
                </div>

                <MenuButton onClick={toggleMenu} />
                <div
                    className={`${
                        !menu ? 'hidden' : ''
                    } w-full md:block md:w-auto`}
                >
                    <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium">
                        <HomeLink
                            active={currentPage === Pages.HOME}
                            href="/"
                        />
                        <HelpLink
                            active={currentPage === Pages.HELP}
                            href="/help"
                        />
                    </ul>
                </div>
            </div>
        </nav>
    )
}
