import React, { ReactNode } from 'react'
import { NavbarContextProps, NavbarContext } from './NavbarContext'
import { useWindowResize } from '../customHook'

export interface NavbarProps {
    children: ReactNode;
}

export const NavbarProvider = (props: any) => {
    const [selected, setSelected] = React.useState<number[]>([])
    const [title, setTitle] = React.useState<string[]>([])
    const [previousURL, setPreviousURL] = React.useState<string>('wefwqefqwefqwe')
    const [height, setHeight] = React.useState(window.innerHeight)
    const [isMobile, setIsMobile] = React.useState<boolean>(false)
    const [hamburgerActive, setHamburgerActive] = React.useState<boolean>(false)
    const getWidth = () => window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const [width, setWidth] = React.useState(getWidth())
    
    const size = useWindowResize()

    const handleIsMobile = () => {
        console.log(width)
        if (size[0] < 1024) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
        setWidth(size[0])
    }

    const handleMobileMenu = () => {
        !hamburgerActive 
            ? document.body.classList.add("no-scroll") 
            :  document.body.classList.remove("no-scroll")
        setHamburgerActive(!hamburgerActive)
    }

    React.useEffect(() => {
        handleIsMobile()
    }, [size])

    let providerValue: NavbarContextProps = { 
        height, 
        setHeight, 
        width, 
        setWidth, 
        isMobile, 
        setIsMobile, 
        handleIsMobile,
        title, setTitle, selected, setSelected, previousURL, setPreviousURL, handleMobileMenu, hamburgerActive
    }

    return <NavbarContext.Provider value={providerValue}>{props.children}</NavbarContext.Provider>
}