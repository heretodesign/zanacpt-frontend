import React from 'react';
// import { Link } from "react-router-dom"
import styled from 'styled-components'
import 'react-bulma-components'
import { Button, Container } from 'react-bulma-components';
import { elastic as Menu } from 'react-burger-menu'
import Contact from '../../pages/Contact';
import './Navbar.css'
import { Link } from 'react-scroll'


export function SideBar({ props }: any) {

  return (
    <>
      <Menu {...props} right>
        <Link className="navbar-item"
          to="whoWeAre" spy={true} smooth={true}>
          Who we are
        </Link>
        <Link className="navbar-item"
          to="whoWeAre" spy={true} smooth={true}>
          What we do
        </Link>
        <Link className="navbar-item"
          to="ourServices" spy={true} smooth={true}>
            Our Services
        </Link>
        <Link className="navbar-item"
          to="faq" spy={true} smooth={true}>
          FAQs
        </Link>
        <Link className="navbar-item"
          to="contactUsNow" spy={true} smooth={true}>
          Contact us
        </Link>
      </Menu>
    </>
  );
}

const Navbar: React.FC = () => {
  const [open, setOpen] = React.useState(false)
  const node = React.useRef

    return (
        <>
            <Section className="is-primary  container-fluid" id="outer-container">
                <div className="is-paddingless-horizontal topNav">
                    <div className="container-fluid grid">
                        <TopDiv className="devsections">
                            <TopPara className="subtitl is-5 has-text-centered isdata">
                            <strong className="has-text-white">RSP</strong> – dedicated fuel distributer & forwarder, powering economic growth and sustainable living –– +267 71572088 | 75034118 | 74237959
                            </TopPara>
                        </TopDiv>
                    </div>
                </div> 

                <Nav className="navbar is-transparent" role="navigation" aria-label="main navigation">
                    <div className="container">
                        <div className="navbar-brand" id="logoStyle">
                            <Link className="navbar-item"
                            to="/"
                            >
                            <strong className="has-text-white is-2">Zana Capitals</strong>
                            </Link>
                            {/* <span className="navbar-burger burger" data-target="navbarMenuHeroA"> */}
                              <SideBar pageWrapId={'page-wrap'} otherContainer={'outer-container'} />
                              {/* <span></span>
                              <span></span>
                              <span></span> */}
                              {/* </SideBar> */}
                            {/* </span> */}
                        </div>

                        <div id="page-wrap" className="navbar-menu">
                            <div className="navbar-end">
                                <div className="navbar-item">
                                    <LinkNav 
                                        to="/" 
                                        className="navbar-item has-text-weight-semibold" 
                                        >
                                        <Span>Home</Span>
                                    </LinkNav>
                                    <LinkNav 
                                        to="/about-us" 
                                        className="navbar-item has-text-weight-semibold" 
                                        >
                                        <Span>About Us</Span>
                                    </LinkNav>
                                    <LinkNav 
                                        to="/contact-us" 
                                        className="navbar-item has-text-weight-semibold" 
                                        >
                                        <Span>Contact us</Span>
                                    </LinkNav>
                                    {/* <span className="navbar-item">
                                    </span> */}
                                    {/* <div className="navbar-item">
                                        <LinkContact 
                                            to="/admin-signin" 
                                            className="navbar-item button has-text-weight-semibold" 
                                            >Sign In
                                            <SpanText></SpanText>
                                        </LinkContact>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </Nav>
            </Section>
        </>
    );
}

const Span = styled.span`
    color: white;
`
const SpanText = styled.span`
    color: #003468;

    &:hover {
        background: transparent;
        color: white;
    }
`
const TopDiv = styled.div`
    background: #ed6d23;
`
const Nav = styled.nav`
    background: #003468;
    color: white;
`
const TopPara = styled.p`
    font-size: 13px;
    padding: 10px;
    text-align: center;
    line-height: 16px;
    // background: #FFF3;
    color: #fff;
    width: 100%;
`
const InputBtn = styled(Link)`
    background: #003468;
    color: white;

    &:hover {
        color: #003468;
        background: white;
        border-color: #003468;
    }
`
const LinkContact = styled(Link)`
  color: #003468;
  background: white;
  font-weight: bold;
  padding-right: 25px;
  padding-left: 25px;
  border-color: transparent;

  &:hover {
    background: #003468;
    color: white;
    border-color: white;
  }

  @include tablet {
    font-size: 1.2rem;
    margin-top: 1px;
    background: #fba502;
  }
	@media (max-width: 768px) { 
		width: 450px; 
		padding: 10px;
	}

  @include phone {
    font-size: 1rem;
    margin-top: 1px;
  }
`
const LinkNav = styled(Link)`
  color: white;
  background: transparent;
  font-size: 1.1rem;

  &:hover {
    background: transparent;
    color: white;
  }

  @include tablet {
    font-size: 1.2rem;
    margin-top: 1px;
    background: #fba502;
  }
	@media (max-width: 768px) { 
		width: 450px; 
		padding: 10px;
	}

  @include phone {
    font-size: 1rem;
    margin-top: 1px;
  }


`
const LinkBtn = styled(Link)`
  color: #003468;
  background: white;

  @include tablet {
    font-size: 1.2rem;
    margin-top: 1px;
    background: #fba502;
  }
	@media (max-width: 768px) { 
		width: 450px; 
		padding: 10px;
	}

  @include phone {
    font-size: 1rem;
    margin-top: 1px;
  }

  &:hover {
    background-color: #003468;
    color: white;
  }
`

const Section = styled.section`
    background: #003468;
    color: white;
`
export default Navbar;
