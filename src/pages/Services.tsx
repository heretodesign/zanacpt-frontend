import React from 'react'
import  bgImg  from '../images/pawel-czerwinski-RkIsyD_AVvc-unsplash.jpg'
import  imgPic  from '../images/jasmin-sessler-CIItgnBEOgw-unsplash.jpg'
import 'react-bulma-components'
import { Link } from "react-router-dom"
import styled from 'styled-components'
import { Container } from 'react-bulma-components';

const Section = styled.section`
    background-image: url(${bgImg});
    background-position: left center;
    background-repeat:  no-repeat;
    background-size:  cover;
    position: relative;
    // height: 100hv;
    height: 100%;
    filter: grayscale(80%);
    -webkit-filter: grayscale(70%);
`

const HeaderTitle = styled.p`
  font-size: 1.6rem;
  margin-top: 0px;
  color: #08313A;
  font-weight: 200;

`
const ContainerDiv = styled.div`
    padding-bottom: 50px;
    // margin: 80px 0px;
    font-family: 'Open Sans', sans-serif;
`
const MainPara = styled.p`
  font-size: 1.2rem;
  color: #08313A;
  margin-top: 20px;
  font-family: 'Open Sans', sans-serif;
`
const TopPara = styled.p`
  color: #9aa8bd;
  font-size: 14px;
  letter-spacing: 1.2px;
`

export const Services = () => {
    return (
        <>
            <section className="section is-paddingless-horizontal" id="ourServics">
                {/* <br />
                <br /> */}
                <div className="container grid is-large">
                    <div className="firstsections">
                        <div className="content">
                        <div className="columns">
                            <div className="column is-8 is-offset-2">
                                <div className="content">
                                    <MainPara className="has-text-left">
                                        <div className="card">
                                            <div className="card-image" style={{maxHeight: '200px'}}>
                                                {/* <img src={imgPic}  alt="Placeholder image" /> */}
                                            </div>
                                            <div className="card-content">
                                                <div className="media">
                                                    <div className="media-content">
                                                        {/* <HeaderTitle className="title  has-text-left">The Benefit of Working with us</HeaderTitle> */}
                                                    </div>
                                                </div>

                                                <div className="content">
                                                    <TopPara className="subtitle is-6 has-text-left is-uppercase">Benefit of Working with us</TopPara>
                                                    <MainPara className="has-text-left" style={{fontStyle: 'italic'}}>
                                                        We offer the best cleaning services taylored for your specific needs at a competitive price. Our intended end result is to achieve enviromental cleanliness by eliminate 99.9% of the toxins found in bins. Our Founders Remarks
                                                    </MainPara>
                                                </div>
                                            </div>
                                        </div>
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
