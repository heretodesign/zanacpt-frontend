import React from 'react'
import 'react-bulma-components'
import { Link } from "react-router-dom"
import styled from 'styled-components'

const FQATitle = styled.p`
  font-size: 1.2rem;
  color: #08313A;
  font-weight: 400;
  font-family: 'Open Sans', sans-serif;

  @media (max-width: 768px) { 
    text-align: center;
    color: #08313A;
    font-family: 'Open Sans', sans-serif;
	}
`

const DIV = styled.div`
    padding-bottom: 0px;
`

const Section = styled.section`
//   background: #08313A;
    margin-bottom: 10pm;
    margin-top: 10pm;
//   color: white;
`

const ServicesGet = styled.p`
  margin-top: 0px;
  color: #011240;
  font-family: 'Open Sans', sans-serif;
`
const TopPara = styled.p`
  color: #9aa8bd;
  font-size: 14px;
  letter-spacing: 1.2px;
  font-family: 'Open Sans', sans-serif;
`
// const ServicesTitle = styled.p`
//   font-size: 2.6rem;
//   color: color: #08313A;
//   font-family: 'Open Sans', sans-serif;
//   font-weight: 200;

//   @media (max-width: 768px) { 
//     color: color: #08313A;
//     font-family: 'Open Sans', sans-serif;
//     font-size: 2rem;
//     text-align: center;
// 	}
// `
const ServicesTitle = styled.p`
  font-size: 2.6rem;
  font-weight: 200;
  color: #08313A;
  font-family: 'Open Sans', sans-serif;
  margin-bottom: 1em;


  @media (max-width: 768px) { 
    color: #08313A;
    font-family: 'Open Sans', sans-serif;
    font-size: 2rem;
    text-align: center;
    margin-bottom: 1em;
	}
`

const ServicesParagraph = styled.p`
  font-size: 1.2rem;
  color: #08313A;
  font-family: 'Open Sans', sans-serif;

  @media (max-width: 768px) { 
    text-align: center;
    color: #08313A;
    font-family: 'Open Sans', sans-serif;
	}
`

export const Faq = () => {
    return (
        <>
            <Section className="section is-paddingless-horizontal" id="faq">
                <DIV className="container grid is-large" id="contAboutPage">
                <div className="firstssection">
                    <div className="content">
                        <div className="columns">
                            <div className="column is-10 is-offset-1">
                                <div className="content">
                                    <TopPara className="subtitle is-6 has-text-left is-uppercase" id="headTitle">Questions</TopPara>
                                    <ServicesTitle className="subtitle has-text-left is-2">Frequently Asked Questions</ServicesTitle>
                                    
                                    <FQATitle className="titles" style={{fontWeight: 600}}>How long does the virus that causes COVID-19 last on surfaces?</FQATitle>
                                    <ServicesParagraph className="has-text-left">
                                        Recent research evaluated the survival of the COVID-19 virus on different surfaces and reported that the virus 
                                        can remain viable for up to 72 hours on plastic and stainless steel, up to four hours on copper, and up 
                                        to 24 hours on cardboard.07 Apr 2020.
                                    </ServicesParagraph>
                                    <br />
                                    <FQATitle className="titles" style={{fontWeight: 600}}>Can COVID-19 be transmitted through food?</FQATitle>
                                    <ServicesParagraph className="has-text-left">
                                        There is currently no evidence that people can catch COVID-19 from food. The virus that causes COVID-19 can be 
                                        killed at temperatures similar to that of other known viruses and bacteria found in food.14 Aug 2020
                                    <br />
                                    </ServicesParagraph>
                                    <br />
                                    <FQATitle className="titles" style={{fontWeight: 600}}>What all is included in your service?</FQATitle>
                                    <ServicesParagraph className="has-text-left">
                                        We will arrive at your home we will be equipped with all the cleaning supplies and equipment needed to thoroughly clean your home.
                                    </ServicesParagraph>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </DIV>
            </Section>
        </>
    )
}
