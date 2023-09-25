import React from 'react'
import styled from 'styled-components'

const Container = styled.figcaption`
  background-color: var(--dark-violet);
  position: relative;
  display: flexbox;
  align-items: center;
  justify-content: center;
`

const ImagemFundo = styled.img`
  position: relative;
  width: 100%;
`

const Titulo = styled.h2`
  font-size: 40px;
  font-weight: bold;
  color: var(--white);
  position: absolute;
  top: 30%;
  left: 40%;
`
const BotaoBoost = styled.button`
  position: absolute;
  top: 60%;
  left: 47%;
  color: var(--white);
  background: var(--cyan);
  width: 170px;
  border-radius: 26px;
  padding: 14px;
  border: none;
  font-size: 18px;
  font-weight: bold;
  &:hover{
    opacity: 0.5;
  }
`

const Boost = () => {
  return (
    <Container>
      <ImagemFundo src="/images/bg-boost-desktop.svg" alt="" />
      <Titulo>Boost your links today</Titulo>
      <BotaoBoost>Get Started</BotaoBoost>
    </Container>
  )
}

export default Boost