import React from 'react'

interface NavBarProps {
    children: React.ReactNode
}

const NavBar = ({ children }: NavBarProps) => {
    return (
        <nav className="flex flex-row items-center justify-between w-screen py-6 bg-gray-800">
            { children }
        </nav>
    )
}

export default NavBar