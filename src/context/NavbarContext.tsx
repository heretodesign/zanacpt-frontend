/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Dispatch, SetStateAction } from 'react'

export interface NavbarContextProps {
    height: number; 
    width: number; 
    isMobile: boolean; 
    setHeight: (h: number) => void; 
    setWidth: (w: number) => void;
    // setIsMobile: (m: boolean) => void;
    setIsMobile: Dispatch<SetStateAction<boolean>>; 
    handleIsMobile: () => void; 
    onResize: () => void; 
    // setHeight: Dispatch<SetStateAction<number>>; 
}

export const NavbarContext = React.createContext({} as NavbarContextProps)

