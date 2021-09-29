import React from 'react'
import 'react-bulma-components'
import { Link } from "react-router-dom"
import styled from 'styled-components'

const FQATitle = styled.h4`
  font-size: 1.2rem;
  color: #08313A;
  font-family: 'Open Sans', sans-serif;

  @media (max-width: 768px) { 
    text-align: center;
    color: #08313A;
    font-family: 'Open Sans', sans-serif;
	}
`

const LI = styled.li`
  margin-top: 0px;
  color: #08313A;
  font-size: 1.1rem;
  font-family: 'Open Sans', sans-serif;
`


export const Clean = () => {
    return (
        <>
            <Section className="section is-paddingless-horizontal" id="servicesPage">
                <div className="container grid is-large" id="contAboutPage">
                <div className="firstssection">
                    <div className="content">
                        <div className="columns">
                        <div className="column is-10 is-offset-1">
                            <div>
                                <div className="content">
                                <ServicesGet className="subtitle is-6 has-text-left is-uppercase" id="ourServices">Our Service</ServicesGet>
                                <ServicesTitle className="subtitle has-text-left is-2" style={{color: "#08313A"}}>Lets Us Clean it</ServicesTitle>
                                <ServicesParagraph style={{color: "#08313A"}}>We wash, sanities and dries the client bins, removing bacteria and odors, keeping them clean, dry and fragrant affordably and easily: </ServicesParagraph>
                                <div className="columns">
                                    <div className="column is-half"></div>
                                    <div className="column"></div>
                                </div>

                                <FQATitle style={{color: "#08313A"}}>Reasons why you should clean your bins:</FQATitle>
                                <ul>
                                    <LI>Eliminate Bad Odor – With all the rotting food, used sanitary musks , disposable diapers, and This can make your trash can smell even when it is empty. 
                                        Cleaning bins must be done at least once in a week to get rid of bad  odor. </LI>
                                    <LI>Eliminate Germs – Throwing away old food, and used diapers can infect your trash can with germs and diseases, such as Salmonella, Listeria, and E-Coli.
                                        Sanitizing your trash bins will kill these germs, and help keep you and your family safe. </LI>
                                    <LI>Get Rid of Maggots – Have you ever noticed how flies are attracted to your trash?. Keeping your trash bins odor free will keep flies from finding them. </LI>
                                </ul>
                                <br />
                                <FQATitle style={{color: "#08313A"}}>Strengths</FQATitle>
                                <ul>
                                    <LI style={{color: "#08313A"}}>The proven ability to establish excellent personalized client service. </LI>
                                    <LI>Strong relationships with suppliers that offer flexibility and respond to special product requirements. </LI>
                                    <LI>Good referral relationships with cleaning companies, complementary vendors, and local general public.  </LI>
                                    <LI>Client loyalty developed through a solid reputation among repeat, high-cash purchase clients. </LI>
                                    <LI>The use of good and quality chemicals for cleaning the rubbish bins. </LI>
                                </ul>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </Section>
        </>
    )
}



const Section = styled.section`
//   background: #003468;
    margin-bottom: 10pm;
    margin-top: 10pm;
//   color: white;
`

const ServicesGet = styled.p`
  margin-top: 0px;
  color: #9aa8bd;
  font-family: 'Open Sans', sans-serif;
`
const ServicesTitle = styled.p`
  font-size: 2.6rem;
  color: color: #08313A;
  font-family: 'Open Sans', sans-serif;
  font-weight: 200;

  @media (max-width: 768px) { 
    color: color: #08313A;
    font-family: 'Open Sans', sans-serif;
    font-size: 2rem;
    text-align: center;
	}
`

const ServicesParagraph = styled.p`
  font-size: 1.2rem;
  margin-top: -10px;
  color: color: #08313A;
  font-family: 'Open Sans', sans-serif;

  @media (max-width: 768px) { 
    text-align: center;
    color: color: #08313A;
    margin-top: -10px;
    font-family: 'Open Sans', sans-serif;
	}
`