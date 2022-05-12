import React, { useState } from 'react'
import { Pages } from '../../../../constants/pages'
import MenuButton from './components/menuButton'
import NavLink from './components/navLink'
import NavTitle from './components/navTitle'

export default function NavBar({ currentPage }) {
    const [menu, setMenu] = useState<boolean>(false)
    const title = 'Centennial HS Clubs and Organizations'

    function toggleMenu() {
        setMenu(!menu)
    }
    return (
        <nav className="bg-white border-gray-200 px-4 py-4 dark:bg-gray-800 shadow-md">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <NavTitle imgSrc="/images/logo.png">{title}</NavTitle>
                <MenuButton onClick={toggleMenu} />
                <div
                    className={`${
                        menu ? 'hidden' : ''
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
