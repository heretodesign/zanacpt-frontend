import React from 'react'
import  bgImg  from '../images/pawel-czerwinski-RkIsyD_AVvc-unsplash.jpg'
import  imgPic  from '../images/jasmin-sessler-CIItgnBEOgw-unsplash.jpg'
import 'react-bulma-components'
import { Link } from "react-router-dom"
import styled from 'styled-components'

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
    border-radius: 0px;
    background-color: #071133;


    &:hover {
        opacity: 0.2;
        // background-color: #08313A;
        // color: white;
    }

`
const Sec = styled.section`
    border-radius: 0px;
    background-color: #555;
    height: auto%;


    &:hover {
        opacity: 0.5;
        // background-color: #08313A;
        // color: white;
    }
`
const TopDiv = styled.div`
    margin-bottom: 20px;
    background-color: #071133;
`
const TopSecDiv = styled.div`
    margin: 0 auto;
    max-width: 1000px;
`
const ContentDiv = styled.div`
    text-align: left;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 2em;
    color: #fff;
    text-transform: uppercase;
    font-size: 1.25em;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
`
const ThirdDiv = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 2em;
    width: 100%;
    height: 50%;
`
const Ptext = styled.p`
    &:hover {
        color: #08313A;
        // border-color: #08313A;
        // background-color: white;
    }

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
    color: #ffffff;
    font-weight: 800;
    font-style: normal;
    font-size: 1.25em;
    line-height: 1.2;
`

export const Serv = () => {
    return (
        <>
            <Section className="container is-paddingless-horizontal">
                    <div className="container grid is-large">
                        <div className="firstsections">
                            <TopDiv className="content">
                                <div className="columns">
                                    <div className="column is-8 is-offset-2">
                                    <div className="content">
                                        <TopPara className="subtitle is-6 has-text-left is-uppercase">Processes</TopPara>
                                        <h4 className="subtitle has-text-left ">How its done</h4>
                                        <p className="has-text-left">
                                        We clean of bins using the machine designed to clean them that is mounted on the trailer.  
                                        Through a combination of water under pressure and We ONLY use 
                                        </p>
                                    </div>
                                    </div>
                                    
                                </div>
                            </TopDiv>
                        </div>
                    </div>
                </Section>
            {/* <TopDiv className="container topdiv">
                <TopSecDiv className="container topdiv">
                    <Section className="section is-paddingless-horizontal">
                        <ContentDiv className="columns ">
                            <ThirdDiv className="column is-8 is-offset-2">
                                <div className="content">
                                    <TopPara>This is our Title</TopPara>
                                    <p></p>
                                    <p></p>
                                    <Ptext>transition: opacity .2s,transform .35s,-webkit-transform .35s;</Ptext>
                                </div>
                                    <MainPara className="has-text-left">
                                        We offer the best cleaning services 
                                    </MainPara>
                            </ThirdDiv>
                        </ContentDiv> */}
                        {/* <ContainerDiv className="container grid is-large">
                            <div className="firstsections">
                                <div className="content">
                                <div className="columns">
                                    <div className="column is-4 is-offset-7">
                                        <div className="content">
                                            <MainPara className="has-text-left">
                                                <div className="card">
                                                    <div className="card-image">
                                                        <img src={imgPic} alt="Placeholder image" />
                                                    </div>
                                                    <div className="card-content">
                                                        <div className="media">
                                                            <div className="media-content">
                                                                <HeaderTitle className="title  has-text-left">The Benefit of Working with us</HeaderTitle>
                                                            </div>
                                                        </div>

                                                        <div className="content">
                                                            <MainPara className="has-text-left">
                                                                We offer the best cleaning services taylored for your specific needs at a competitive price. Our intended end result is to achieve enviromental cleanliness by eliminate 99.9% of the toxins found in bins.
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
                        </ContainerDiv> */}
                    {/* </Section>
                </TopSecDiv>
            </TopDiv> */}
        </>
    )
}
