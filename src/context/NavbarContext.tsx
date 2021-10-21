import React, { Dispatch, SetStateAction } from 'react'

export interface NavbarContextProps {
    height: number; 
    width: number; 
    isMobile: boolean; 
    hamburgerActive: boolean;
    selected: number[];
    title: string[];
    setTitle: (s: string[]) => void; 
    setSelected: (i: number[]) => void; 
    setHeight: (h: number) => void; 
    setWidth: (w: number) => void;
    // setWidth: Dispatch<SetStateAction<number>>;
    handleMobileMenu: () => void;
    handleIsMobile: () => void; 
    previousURL: string; 
    setPreviousURL: (s: string) => void; 
    setIsMobile: Dispatch<SetStateAction<boolean>>; 
}

export const NavbarContext = React.createContext({} as NavbarContextProps)

