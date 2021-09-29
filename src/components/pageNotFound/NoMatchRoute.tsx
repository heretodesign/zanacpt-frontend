import React from 'react'
import styled from 'styled-components'
import HomePage from '../../pages/HomePage';
import { Link } from "react-router-dom"


const TopPara = styled.p`
  color: #9aa8bd;
  font-size: 14px;
  letter-spacing: 1.2px;
`
const LinkNavs = styled(Link)`
  background: #08313A;
  color: #000;
  font-weight: bold;
  padding-right: 25px;
  padding-left: 25px;
  min-height: 3.25rem;

//   &:hover {
//     color: #08313A;
//     background-color: white;
//   }

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

export const NoMatchRoute = () => {
    return (
        <>
            <section className="section is-paddingless-horizontal">
                <div className="container grid is-large">
                    <div className="firstsections">
                        <div className="content">
                        <div className="columns">
                            <div className="column">
                            <div className="content">
                                <TopPara className="subtitle is-6 has-text-centered is-uppercase">404. Thats an error.</TopPara>
                                <p className="subtitle has-text-centered is-4">The requested URL was not found on this server</p>
                                <br />
                                <br />
                                <LinkNavs className="button is-centered has-text-white"
                                    to="/"
                                    >
                                        Redirect to HomePage
                                    {/* <strong className="has-text-bold is-2">Zana Capitals</strong> */}
                                </LinkNavs>
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

export default NoMatchRoute