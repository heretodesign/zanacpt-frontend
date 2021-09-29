import React from 'react'
import 'bulma/css/bulma.min.css';
import 'react-bulma-components'
import { Link } from "react-router-dom"
import styled from 'styled-components'
import Navbar from '../components/Header/Navbar'

export const Contact = () => {
    return (
        <>
          <Navbar />
            <section className="section is-paddingless-horizontal">
                <div className="container grid is-large">
                    <div className="firstsections">
                        <div className="content">
                        <div className="columns">
                            <div className="column">
                            <div className="content">
                                <TopPara className="subtitle is-6 has-text-left is-uppercase">Why we exist</TopPara>
                                <HeaderTitle className="subtitle has-text-left is-2">About Us</HeaderTitle>
                                <MainPara className="has-text-left has-text-black">
                                    Seth Resources (Pty) Ltd, is a Botswana company founded in 2015; The company is incorporated under Botswana Law (100% citizen owned), to offer customers the widest range of services 
                                    in respect of Procurement and Logistics of Oil & gas Derivatives including the storage, 
                                    handling and distribution (Transportation) of various products according to the needs of the users and also expands the activities out of Botswana boundaries. 
                                </MainPara>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}



const Section = styled.section`
  background: #003468;
  color: white;
`

const P = styled.p`
  color: #003468;
  background: white;
  font-size: 1.4rem;
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

  // &:hover {
  //   background-color: #003468;
  //   color: white;
  // }
`
const TextPara = styled.p`
  font-size: 1.2rem;
  color: #003468;
`
const Button = styled.button`
  color: #003468;
  text-decoration: underline;
  text-align: center;
  margin-bottom: 10px;

  // :hover: {
  //   color: #fba502
  // }
`
const cardTitle = {
    color: '#003468',
    textDecoration: 'underline',
    textAlign: 'center',
    marginBottom: '10px'
  }
  const AboutRoles = {
    color: '#003468',
    fontSize: '1rem',
    textAlign: 'center',
    marginBottom: '10px'
}


const CardSection = styled.section`
  // background-color: #f1f6fe;
  background-color: #e3f4fc;
  card-color: transparent;
  color: #003468;
`

const HeaderTitle = styled.p`
  font-size: 2.6rem;
  margin-top: 0px;
  color: #fff;
`
const MainPara = styled.p`
  font-size: 1.2rem;
  color: #fff;
  margin-top: -20px;
`
const AboutPara = styled.p`
  font-size: 1.2rem;
  color: #003468;
`
const TopPara = styled.p`
  color: #9aa8bd;
  font-size: 14px;
  letter-spacing: 1.2px;
`
const CardParagraph = styled.p`
  color: #003468;
  text-align: left;
  font-size: 1.1rem;
  margin-top: 15px;
`



export default Contact