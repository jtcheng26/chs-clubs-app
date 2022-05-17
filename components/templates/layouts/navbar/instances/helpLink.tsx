import React from 'react'
import NavLink, { NavLinkProps } from '../components/navLink'
import QuestionMarkCircle from '@heroicons/react/solid/QuestionMarkCircleIcon'

export default function HelpLink({ active, href }: NavLinkProps) {
    return (
        <>
            <NavLink active={active} href={href}>
                <QuestionMarkCircle width={20} height={20} />
                <span>Help</span>
            </NavLink>
        </>
    )
}
