import React from "react";
import styled from "styled-components";
import NavLinks from "./NavLinks";

import { useLayoutEffect } from "react";

interface Props {
    isMenuOpen: boolean
}

export function MobileNav({ isMenuOpen }: Props) {
  useLayoutEffect(() => {
    const original = window.getComputedStyle(document.body).overflow;

    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = original;
    };
  }, [isMenuOpen]);
}

const MobileNavbar = () => {
    const [isToggled, setToggle] = React.useState(false);
    // const toggle = () => setToggle((prevState) => !prevState);

    // const closeMenu = () => setToggle(false);
    // const { isMenuOpen } = useMenuContext();

    // useScrollFreeze(isMenuOpen);
    return (
        <>
        {/* {isMenuOpen && (
            <MobileNav>
            <NavLinks />
            </MobileNav>
        )} */}
        </>
    );
};

export default MobileNavbar;

const MobileNavStyle = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: var(--bg);
  display: flex;
  justify-content: center;
  align-items: center;
`;