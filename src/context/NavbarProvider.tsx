/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { FC, ReactNode } from 'react'
import { NavbarContextProps, NavbarContext } from './NavbarContext'

export interface NavbarProps {
    children: ReactNode;
}

export const NavbarProvider: FC<NavbarProps> = ({ children }: NavbarProps) => {
    const [width, setWidth] = React.useState(window.innerWidth)
    const [height, setHeight] = React.useState(window.innerHeight)
    const [isMobile, setIsMobile] = React.useState<boolean>(false)

    const onResize = () => {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }

    const handleIsMobile = React.useCallback(() => {
        console.log(width)
        if (width < 764) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }, [])

    let providerValue: NavbarContextProps = { height, setHeight, width, setWidth, isMobile, setIsMobile, onResize, handleIsMobile }

    return <NavbarContext.Provider value={providerValue}>{children}</NavbarContext.Provider>
}

export default NavbarProvider