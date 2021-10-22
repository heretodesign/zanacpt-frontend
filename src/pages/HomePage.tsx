/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from 'react'
import Header from '../components/Header/Header'
import 'react-bulma-components'
import { Link } from "react-router-dom"
import styled from 'styled-components'
import NavbarHero from '../components/Header/NavbarHero'
import { CustomSpacer } from '../components/CustomSpacer'
import { Next } from './Next' 
import { Faq } from './Faq' 
import { Clean } from './Clean' 
import { Services } from './Services' 
import { Serv } from './Serv' 
import  residenc  from '../images/mitchell-luo-UBU_pM78yxQ-unsplash.jpg'
import  governemn  from '../images/kinga-kolodziejska-MEGB-u82JnU-unsplash.jpg'
import  comm  from '../images/pexels-vladislav-vasnetsov-2682683.jpg'
import { MobileNav } from '../components/Header/MobileNav'
import { NavbarContext } from '../context/NavbarContext'
import { Contact } from './Contact'


const Section = styled.section`
  background: #08313A;
  color: white;
`
const DIV = styled.div`
    padding-bottom: 50px;
`
const P = styled.p`
  color: #08313A;
  background: white;
  font-size: 1.4rem;
`
const LinkBtn = styled(Link)`
  color: #08313A;
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

  // &:hover {
  //   background-color: #08313A;
  //   color: white;
  // }
`
const TextPara = styled.p`
  font-size: 1.2rem;
  color: #08313A;
`
const Button = styled.button`
  color: #08313A;
  text-decoration: underline;
  text-align: center;
  margin-bottom: 10px;

  // :hover: {
  //   color: #fba502
  // }
`

const CardSection = styled.section`
  // background-color: #f1f6fe;
  background-color: #e3f4fc;
  card-color: transparent;
  color: #08313A;
`
const HeaderTitle = styled.p`
  font-size: 2.6rem;
  margin-top: 0px;
  color: #fff;
  font-weight: 200;
`
const HeaderTitleGreen = styled.p`
  font-size: 2.6rem;
  margin-top: 0px;
  color: #08313A;
  font-weight: 300;
  text-align: left;

  @media (max-width: 768px) { 
    color: #08313A;
    text-align: center;
	}
`
const MainPara = styled.p`
  font-size: 1.2rem;
  color: #fff;
  margin-top: -20px;
`
const MainParaGreen = styled.p`
  font-size: 1.2rem;
  color: #08313A;
  margin-top: -20px;
  text-align: left;

  @media (max-width: 768px) { 
    color: #08313A;
    text-align: center;
	}
`
const MainParaCard = styled.p`
  font-size: 1.2rem;
  color: #08313A;

  

  @media (max-width: 768px) { 
    color: #08313A;
    font-size: 1.1rem;
    text-align: center;
	}
`
const AboutPara = styled.p`
  font-size: 1.2rem;
  color: #08313A;
`
const TopPara = styled.p`
  color: #9aa8bd;
  font-size: 14px;
  letter-spacing: 1.2px;
  font-family: 'Open Sans', sans-serif;
  text-align: left;

  @media (max-width: 768px) { 
    color: #9aa8bd;
    // font-size: 1.1rem;
    text-align: center;
	}
`
const CardParagraph = styled.p`
  color: #08313A;
  text-align: left;
  font-size: 1.1rem;
  margin-top: 15px;
`
const CardDiv = styled.div`
  border-style: outset;
  border-bottom-color: #041B61;
`
const CardDivs = styled.div`
  border-bottom-color: white;
  max-width: 100%;

  &:hover {
    border-bottom: groove;
    max-width: 100%;
    border-color: #7CB7AF;
    border-width: 3px;
    box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%), 0 0 0 1px rgb(10 10 10 / 2%);
  }
`
const ParagraphSty = styled.p`
  color: #08313A;
  font-size: 1.2rem;
  margin-top: 10px;
`
const CardParagraphs = styled.p`
  color: #08313A;
  font-size: 1.2rem;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;

  @media (max-width: 768px) { 
    color: #003468;
    font-size: 1rem;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px;
	}
`
export const HomePage = () => {
  const { width, hamburgerActive, previousURL } = React.useContext(NavbarContext)

    const checkBrowser = () => {
        if (navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf("OPR") !== -1) {
            return "Opera"
        } else if (navigator.userAgent.indexOf("Chrome") !== -1) {
            return "Chrome"
        } else if (navigator.userAgent.indexOf("Safari") !== -1) {
            return "Safari"
        } else if (navigator.userAgent.indexOf("Firefox") !== -1) {
            return "Firefox"
        }
         else {
            return "unknown"
        }
    }

    React.useEffect(() => {
        let browser = checkBrowser()
        if (browser !== "Firefox" && browser !== "unknown") {
            let sheet = document.createElement("style")
            sheet.innerHTML = "html { scroll-behavior: smooth; }";
            document.body.appendChild(sheet)
        }
    }, [])
    
    useEffect(() => {}, [width]);

    return (
        <>
            {width  < 1024 ? <MobileNav /> : <NavbarHero />}
            <section className="section is-paddingless-horizontal" id="whoWeAre">
                <br />
                <br />
                <div className="container grid is-large">
                    <div className="firstsections">
                        <div className="content container">
                        <div className="columns">
                            <div className="column is-3 is-offset-1">
                              <div className="content">
                                <div className="has-text-left">
                                  <CardDivs className="card">
                                      <div className="card-image">
                                          <img src={comm} alt="Placeholder image" />
                                      </div>
                                      <div className="card-content">
                                        <div className="media">
                                          
                                          <div className="media-content">
                                            <MainParaCard className="title is-4 has-text-centered">Residential Sanitizing</MainParaCard>
                                          </div>
                                        </div>
                                        <MainParaCard className="content">
                                          Sanitizing your Home requires clinical sanitizing services. Imagine your home clinically clean, free from backeria and viruses, free from mold and mildew.
                                          <br />
                                        </MainParaCard>
                                      </div>
                                    </CardDivs>
                                </div>
                              </div>
                            </div>
                            <div className="column is-4">
                              <div className="content">
                                <div className="has-text-left">
                                  <CardDivs className="card">
                                      <div className="card-image">
                                          <img src={governemn} alt="Placeholder image" />
                                      </div>
                                      <div className="card-content">
                                        <div className="media">
                                          
                                          <div className="media-content">
                                            <MainParaCard className="title is-4 has-text-centered">Commercial Sanitizing</MainParaCard>
                                          </div>
                                        </div>
                                        <MainParaCard className="content">
                                          Commercially dedicated & comprehensive sanitizing services offering a vast range of both contract and specialist cleaning services. 
                                          <br />
                                        </MainParaCard>
                                      </div>
                                    </CardDivs>
                                </div>
                              </div>
                            </div>
                
                            <div className="column is-3">
                              <div className="content">
                                <div className="has-text-left">
                                  <CardDivs className="card">
                                      <div className="card-image">
                                          <img src={residenc} alt="Placeholder image" />
                                      </div>
                                      <div className="card-content">
                                        <div className="media">
                                          <div className="media-content">
                                            <MainParaCard className="title is-4 has-text-centered">Government Sanitizing</MainParaCard>
                                          </div>
                                        </div>

                                        <MainParaCard className="content">
                                          Dedicated and flexible government premises sanitizing services. We clean, to keep the principal and essential places bacteria free.
                                          <br />
                                        </MainParaCard>
                                      </div>
                                    </CardDivs>
                                </div>
                              </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className=" is-paddingless-horizontal">
                <br />
                <div className="container grid is-large">
                    <div className="firstsections">
                        <div className="content">
                        <div className="columns">
                            <div className="column is-10 is-offset-1">
                            <div className="content">
                                <TopPara className="subtitle is-6 has-text-lefts is-uppercase">Business Overview</TopPara>
                                <HeaderTitleGreen className="subtitle has-text-lefts is-2">Key Objectives</HeaderTitleGreen>
                                <MainParaGreen className="has-text-lefts">
                                    The health care system in Botswana has been challenged over the past several years by the HIV/AIDS 
                                    epidemic and the re-emergence of related conditions such as tuberculosis, which has put a substantial 
                                    strain on the economy. Furthermore, the increasing incidences of non-communicable diseases, notably 
                                    hypertension, diabetes and cancer as well as escalating road accident- related injuries are a cause for 
                                    concern. The ministry of Health aims to improve the quality of life of Batswana by adopting various strategies
                                     that will address key health problems. <br /><br />
                                    In pursuit of the above company Zana Capital was established in 2015 and it is registered under the company act, 
                                    2021 (section 22 (c)) of the Republic of Botswana by Director Tirelo McPhillip who are all the citizens of Botswana. 
                                    The company is registered and incorporated under number BW00002630157; this means the company will be regulated by the 
                                    laws of Botswana. We intend to provide a number of necessary services to the business community and to the public.
                                     Initial plans are to introduce two main lines of cleaning services, with the primary focus on Clean Bins, 
                                     Mattress Cleaning, surface cleaning, and General Cleaning.
                                </MainParaGreen>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* <Next /> */}

            <section className="section is-paddingless-horizontal" id="whatWeDo">
                <div className="container grid is-large">
                    <div className="firstsections">
                        <div className="content">
                        <div className="columns">
                            <div className="column is-10 is-offset-1">
                            <div className="content">
                                <TopPara className="subtitle is-6 has-text-lefts is-uppercase">Processes</TopPara>
                                <HeaderTitleGreen className="subtitle has-text-lefts ">How its done</HeaderTitleGreen>
                                <MainParaGreen className="has-text-lefts">
                                We clean bins using the machine designed to clean them that is mounted on the trailer.  
                                Through a combination of water under pressure and We ONLY use 100% Biodegradable chemicals 
                                which have been approved by Environment Health Department, the patented mobile trailer is 
                                able to clean up to tour to six bins at one time. It operates by spraying a strong jet of 
                                water, mixed with the detergent into the bins, which are mounted upside down on the frame 
                                of the machine. <br /> <br />This has proven to be a very efficient and effective means of cleaning 
                                soiled refuse bins. It has further proved cost effective as the machine filters and uses 
                                recycled water. The biodegradable detergents are used during the cleaning process, 
                                which ensures that the environment is not damaged during or after the cleaning procedure.
                                </MainParaGreen>
                            </div>
                            </div>
                            
                        </div>
                        </div>
                    </div>
                </div>
            </section>
            
            
            {/* <Serv /> */}
            
            <Clean />
            <Faq />
            
            <section className=" is-paddingless-horizontal" id="contactUsNow">
                <div className="container grid is-large">
                    <div className="firstsections">
                        <div className="content">
                        <div className="columns">
                            <div className="column is-10 is-offset-1">
                              <div className="content">
                                  <TopPara className="subtitle is-6 has-text-lefts is-uppercase">Inquiry</TopPara>
                                  <HeaderTitleGreen className="subtitle has-text-lefts ">Talk to our sales team</HeaderTitleGreen>
                                  <MainParaGreen className="has-text-lefts">
                                    For additional information or questions to clarify, our dedicated sales team is here to help you. 
                                    <br />
                                    <br />
                                  </MainParaGreen>
                              </div>
                              <div className="columns">
                                  <div className="column is-half">
                                    <div className="card">
                                      <div className="card-content">
                                        <div className="content is-medium">
                                            <MainParaCard>For general booking or inquiry please call</MainParaCard>
                                            <strong>
                                                <MainParaCard className="has-text-lefts">
                                                    Mobile number: +267 75872399 & 75034118
                                                </MainParaCard>
                                            </strong>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="column is-auto">
                                    <div className="card">
                                      <div className="card-content">
                                        <div className="content is-medium">
                                            <MainParaCard>Alternatively, fill the form below or</MainParaCard>
                                            <strong>
                                                <MainParaCard className="has-text-lefts">
                                                    Email us at: zanacapital15@gmail.com
                                                </MainParaCard>
                                            </strong>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
            <CustomSpacer />
            <Contact />
            {/* <Services /> */}
            <CustomSpacer />
        </>
    )
}

const ColStyle = styled.p`
  color: #08313A;
  font-size: 2.4rem;
  font-weight: bolder;
  margin-bottom: 0px;
`
const Inside = styled.p`
  color: #08313A;
`
const CardTit = styled.p`
  color: #08313A;
  font-weight: bold;
`
const AboutGet = styled.p`
  font-size: 2.6rem;
  margin-top: 0px;
  color: #08313A;
`
const AboutRole = styled.p`
  font-size: 2.6rem;
  margin-bottom: 10px;
  color: #08313A;
  text-align: center;
  text-decoration: underline;
`


export default HomePage