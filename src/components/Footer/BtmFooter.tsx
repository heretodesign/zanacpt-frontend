import React, { Component } from 'react'
import { Footer } from 'react-bulma-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGasPump,faBook } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import { Link } from 'react-scroll'

const Para = styled.p`
    color: white;
`
const FooterSection = styled.footer`
    background: #08313A;
    color: white;
`

const Div = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
`

const BtmFooter: React.FC = () => {
  return (
    <FooterSection className="section footer-btm">
        <div className="container content has-text-centered">
            <div className="columns">
                <div className="column is-3">
                    <div className="firstFooter">
                        <Para className="is-size-6 has-text-centered is-uppercase" >
                            <strong>
                                <Link to="whoWeAre" spy={true} smooth={true} className="has-text-white" > Who we are </Link>
                            </strong>
                        </Para>
                    </div>
                </div>
                <div className="column is-3">
                    <div className="firstFooter">
                        <Para className="is-size-6 has-text-white has-text-centered is-uppercase" >
                            <strong>
                                <Link className="has-text-white" to="whatWeDo" spy={true} smooth={true}> What we do </Link>
                            </strong>
                        </Para>
                    </div>
                </div>
                <div className="column is-3">
                    <div className="firstFooter">
                        <Para className="is-size-6 has-text-white has-text-centered is-uppercase" >
                            <strong><Link className="has-text-white" to="ourServices" spy={true} smooth={true} > Our Services </Link></strong>
                        </Para>
                    </div>
                </div>
                <div className="column is-3">
                    <div className="firstFooter">
                        <Para className="is-size-6 has-text-white has-text-centered is-uppercase" > 
                            <strong><Link to="contactUsNow" spy={true} smooth={true} className=" has-text-white is-small is-active">Contact us</Link></strong>
                        </Para>
                    </div>
                </div>
            </div>
        </div>
        <section className="section" id="reserved">
            <div className="container">
                <div className="columns">
                    <div className="column is-half is-offset-one-quarter">
                        <div className="content">
                            <div className="subtitle is-5 has-text-white">
                                <p className="has-text-centered has-text-weight-light">
                                    <p className="has-text-centered is-medium has-text-white is-size-6" >Zana Capitals<br />Plot 54368, iTowers North, Unit 4A CBD,<br /> Gaborone, Botswana</p>
                                </p>
                                <br />
                                <br />
                                <p className="has-text-centered has-text-weight-light">
                                    <a href="#" className="has-text-centered has-text-white is-size-7" id="mainFooter">© 2021 Zana Capitals. All rights reserved.</a>
                                </p>
                                <p className="has-text-centered is-medium is-size-6">Botswana | BWP</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </FooterSection>
    );
}


export default BtmFooter;
