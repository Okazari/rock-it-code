import React from "react"
import styled from "styled-components"

const TextWrapper = styled.div`
  text-align: center;
`

const Title = styled.h1`
  color: white;
  margin: 0;
  font-weight: lighter;
`

const Subtitle = styled.h2`
  color: white;
  font-weight: lighter;
  margin: 0;
`

const PresentationText = () => {
  return (
    <TextWrapper>
      <Title>Welcome to Rock it Code</Title>
      <Subtitle>Simply paste your code in the editor below, press play and let it rock</Subtitle>
    </TextWrapper>
  )
}

export default PresentationText
