import React from 'react'
import  bins  from '../images/gary-chan-YzSZN3qvHeo-unsplash.jpg'
import 'react-bulma-components'
import { Link } from "react-router-dom"
import styled from 'styled-components'

const Section = styled.section`
//   background: #003468;
    margin-bottom: 10pm;
    margin-top: 10pm;
//   color: white;
`

const ServicesGet = styled.p`
  margin-top: 0px;
  color: #011240;
  font-family: 'Open Sans', sans-serif;
`
const ServicesTitle = styled.p`
  font-size: 2.6rem;
  color: #003468;
  font-family: 'Open Sans', sans-serif;
  font-weight: 200;
  
  @media (max-width: 768px) { 
    color: #003468;
    font-family: 'Open Sans', sans-serif;
    font-size: 2rem;
    text-align: center;
	}
`
const ServicesParagraph = styled.p`
  font-size: 1.2rem;
  margin-top: -10px;
  color: #003468;
  font-family: 'Open Sans', sans-serif;

  @media (max-width: 768px) { 
    text-align: center;
    color: #003468;
    margin-top: -10px;
    font-family: 'Open Sans', sans-serif;
	}
`

const LinkBtn = styled(Link)`
  color: #003468;
  background: white;
  font-size: 1.2rem;

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
  //   background-color: #003468;
  //   color: white;
  // }
`

export const Next = () => {
    return (
        <>
            <Section className="section is-paddingless-horizontal" id="servicesPage">
                <div className="container grid is-large" id="contAboutPage">
                <div className="firstssection">
                    <div className="content">
                        <div className="columns">
                                <br />
                                
                        <div className="column is-two-fifths is-offset-1">
                        <br />
                            <div className="content">
                            <ServicesGet className="subtitle is-6 has-text-left is-uppercase" id="headTitle">PROCESSES</ServicesGet>
                            <ServicesTitle className="subtitle has-text-left is-2">How its done</ServicesTitle>
                            <ServicesParagraph className="has-text-left">
                                We clean of bins using the machine designed to clean them that is mounted on the trailer. Through a combination of water under pressure and We ONLY use 100% Biodegradable chemicals which have been approved by Environment Health Department, the patented mobile trailer is able to clean up to tour to six bins at one time. It operates by spraying a strong jet of water, mixed with the detergent into the bins, which are mounted upside down on the frame of the machine.
                                  This has proven to be a very efficient and effective means of cleaning soiled refuse bins. It has further proved cost effective as the machine filters and uses recycled water. The biodegradable detergents are used during the cleaning process, which ensures that the environment is not damaged during or after the cleaning procedure.
                                <br />
                                <br />
                                {/* <LinkBtn 
                                    to="/about-us" 
                                    className="title is-underlined has-text-centered" 
                                    >
                                    Read More
                                </LinkBtn> */}
                            </ServicesParagraph>
                            </div>
                        </div>
                        <div className="column is-two-fifths">
                        <br />
                            <img className="content" src={bins} id="imgCover" alt="office" />
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </Section>
        </>
    )
}

