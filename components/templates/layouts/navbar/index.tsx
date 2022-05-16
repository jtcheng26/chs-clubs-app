import React, { useState } from 'react'
import { Pages } from '../../../../constants/pages'
import MenuButton from './components/menuButton'
import NavLink from './components/navLink'
import NavTitle from './components/navTitle'

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
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <span className="hidden md:block">
                    <NavTitle imgSrc="/images/logo.png">{title}</NavTitle>
                </span>
                <span className="md:hidden">
                    <NavTitle imgSrc="/images/logo.png">{titleShort}</NavTitle>
                </span>
                <MenuButton onClick={toggleMenu} />
                <div
                    className={`${
                        !menu ? 'hidden' : ''
                    } w-full md:block md:w-auto`}
                >
                    <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium">
                        <NavLink active={currentPage == Pages.HOME} href="/">
                            Organizations
                        </NavLink>
                        <NavLink
                            active={currentPage == Pages.HELP}
                            href="/help"
                        >
                            Help
                        </NavLink>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
