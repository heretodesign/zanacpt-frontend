import React, { Component } from 'react';
// import { Link } from "react-router-dom"
import styled from 'styled-components'
import bgImg from '../../images/joanna-kosinska-mjC9apK53a8-unsplash.jpg'
import logo from '../../images/zanalogo.png'
import { Link } from 'react-scroll'
import { SideBar } from './Navbar';
import './Navbar.css'

const Section = styled.section`
    background-image: url(${bgImg});
    background-position: left center;
    background-repeat:  no-repeat;
    background-size:  cover;
    position: relative;
`
const NavSection = styled.div`
  background: transparent;
  color: #08313A;
  font-size: 1rem;
  font-weight: bold;
`
const NavBtnDiv = styled.div`
  color: transparent;
  background: #08313A;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 5%;
`
const LinkButton = styled(Link)`
  background-color: #08313A;
  color: white;
  border-color: #08313A;
  border-width: 2px;

  &:hover {
    color: #08313A;
    border-color: #08313A;
    background-color: white;
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
const BtnTextMain = styled.p`
  color: white;

  ${LinkButton}:hover & {
    color: #08313A;
  }
`

const MainTitle = styled.p`
  color: #fff;
  font-family: sans-serif;
  font-size: 3.8rem;
  font-weight: 600;

  @media (max-width: 768px) { 
    color: #fff;
    font-family: sans-serif;
    font-size: 2.4rem;
    font-weight: 500;
    text-align: center;

	}
`
const MainParagraph = styled.p`
  color: #08313A;
  font-size: 1.3rem;
  text-align: left;

  @media (max-width: 768px) { 
    color: #08313A;
    font-size: 1.2rem;
    text-align: center;
	}
`
const SpanColor = styled.span`
  color: #08313A;
  font-family: sans-serif;
  font-size: 4rem;
  font-weight: 600;
  text-align: left;

  @media (max-width: 768px) { 
    color: #08313A;
    font-family: sans-serif;
    font-size: 2.4rem;
    font-weight: 500;
    text-align: center;
	}
`
const LinkButtonNav = styled(Link)`
  background-color: #08313A;
  color: white;
  border-color: #08313A;
  border-width: 2px;

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
    background-color: #08313A;
    color: white;
    border-color: #08313A;
    border-width: 2px;
  }
`
const LinkContact = styled(Link)`
  // background: #08313A;
  background: transparent;
  color: #08313A;
  font-weight: bold;
  padding-right: 25px;
  padding-left: 25px;

  // &:hover {
  //   background-color: #08313A;
  //   color: white;
  // }

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
const LinkNavs = styled(Link)`
  // background: #08313A;
  background: transparent;
  color: #08313A;
  font-weight: bold;
  padding-right: 25px;
  padding-left: 25px;
  min-height: 3.25rem;

  // &:hover {
  //   background-color: #08313A;
  //   color: white;
  // }

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
const NavBtns = styled(Link)`
  background: #08313A;
  color: white;

  font-weight: bold;
  padding-right: 25px;
  padding-left: 25px;

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
const TopPara = styled.p`
    text-align: center;
    line-height: 16px;
    color: #fff;
    width: 100%;
`
const TopDiv = styled.div`
    background: #7CB7AF;
    font-size: 14px;
    padding: 10px;
`
const NAV = styled.nav`
  min-height: 3.25rem
`
const IMG = styled.img`
  min-height: 3.25rem
`
export const MobileNav: React.FC = () => {
  return (
    <>
      <Section className="hero is-primary is-medium imgLanding">
        <div className="is-paddingless-horizontal topNav"> 
            <div className="container-fluid grid">
                <TopDiv className="devsection">
                    <TopPara className="subtitl is-5 has-text-centered isdata">
                        Together we can make our cities cleaner. Call
                      –– <strong className="has-text-white">+267 75872399 & 75034118 </strong> now.
                    </TopPara>
                </TopDiv>
            </div>
        </div>
        <div className="hero-head">
          <NAV className="navbar is-transparent">
            <div className="container">
              <div className="navbar-brand" id="logoStyle">
                <LinkNavs className="navbar-item"
                  to="/"
                  >
                    <IMG src={logo} />
                  {/* <strong className="has-text-bold is-2">Zana Capitals</strong> */}
                </LinkNavs>
                <SideBar pageWrapId={'page-wrap'} otherContainer={'outer-container'} />
                {/* { window.innerWidth > 100 || window.innerWidth <= 700 ? <SideBar pageWrapId={'page-wrap'} otherContainer={'outer-container'} /> : '' } */}
                

                {/* <button onClick={() => console.log('ussss')} className="navbar-burger burger" data-target="navbarMenuHeroA">
                  <span></span>
                  <span></span>
                  <span></span>
                </button> */}
              </div>
              <NavSection id="navbarMenuHeroA" className="navbar-menu">
                {/* <div className="navbar-end">
                  <LinkContact 
                      to="whoWeAre" spy={true} smooth={true}
                      className="navbar-item has-text-weight-bold" 
                      >
                      Who we are
                  </LinkContact>
                  <LinkContact 
                      to="whatWeDo" spy={true} smooth={true}
                      className="navbar-item has-text-weight-bold" 
                    >
                      What we do
                  </LinkContact>
                  <LinkContact 
                      to="ourServices" spy={true} smooth={true}
                      className="navbar-item has-text-weight-bold" 
                      >
                      Our Services
                  </LinkContact>
                  <LinkContact 
                      to="faq" spy={true} smooth={true}
                      className="navbar-item has-text-weight-bold" 
                      >
                      FAQs
                  </LinkContact>
                  <span className="navbar-item">
                      <LinkButtonNav 
                          to="contactUsNow" spy={true} smooth={true} 
                          className="navbar-item button is-fullwidth has-text-weight-bold" 
                          >
                          Contact us
                      </LinkButtonNav>
                  </span>
                </div> */}
              </NavSection>
            </div>
          </NAV>
        </div>

        <div className="hero-body">
          <div className="container has-text-centered">
          <div className="firstssection">
              <div className="content">
                <div className="columns">
                  <div className="column  is-two-thirds is-offset-1">
                    <MainTitle className="title has-text-lefts">
                      <SpanColor>Residential & Commercial Sanitizing</SpanColor> 
                    </MainTitle>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-two-thirds is-offset-1">
                    <MainParagraph className="has-text-lefts">
                    The service offered will be start-up business that will offer comprehensive sanitary cleaning services for homes, 
                    industries and offices. It provides efficient and professionalized anti-bacterial bin cleaning services in Botswana.
                    The home services business is one of the leading companies specializing in commercial and domestic wheelie bin cleaning. 
                    The company washes, cleans and dries bins, thereby getting rid of bacteria and odors. 
                    The business offers bin cleaning services at affordable rates and the jobs are quickly done. 
                    </MainParagraph>
                  </div>
                </div>
              </div>
              <br />
              <div className="content" id="landingForm">
                <div className="columns">
                  <div className="column  is-two-fifths is-offset-1">
                    <LinkButton to="contactUsNow" spy={true} smooth={true}  className="button is-medium has-test-small is-fullwidth">
                      <BtnTextMain>Talk to our sales team</BtnTextMain>
                    </LinkButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}




