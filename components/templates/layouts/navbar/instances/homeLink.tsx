import React from 'react'
import NavLink, { NavLinkProps } from '../components/navLink'
import AcademicCap from '@heroicons/react/solid/AcademicCapIcon'

export default function HomeLink({ active, href }: NavLinkProps) {
    return (
        <>
            <NavLink active={active} href={href}>
                <AcademicCap width={20} height={20} />
                <span>Organizations</span>
            </NavLink>
        </>
    )
}
