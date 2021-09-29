import React from 'react'
import styled from 'styled-components'


const ContainerDiv = styled.div`
    margin-bottom: 20px;
`
const InnerDiv = styled.div`
    box-sizing: border-box;
`
const Div = styled.div`
    height: 50px;
`

export const CustomSpacer = () => {
    return (
        <ContainerDiv className="container">
            <InnerDiv className="inner">
                <Div className="child"></Div>
            </InnerDiv>
        </ContainerDiv>
    )
}
