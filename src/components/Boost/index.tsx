import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background-color: var(--dark-violet);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 210px;
`

const ImagemFundo = styled.img`
  position: relative;
  width: 100%;
  height: 210px;
`

const Titulo = styled.h2`
  font-weight: bold;
  color: var(--white);
  position: absolute;
  margin-bottom: 70px;
`
const BotaoBoost = styled.button`
  position: absolute;
  color: var(--white);
  background: var(--cyan);
  width: 170px;
  border-radius: 26px;
  padding: 14px;
  border: none;
  font-size: 18px;
  font-weight: bold;
  margin-top: 80px;
  &:hover{
    filter: grayscale(50%) brightness(120%);
  }
`

const Container2 = styled.div`
  width: 100%;
  height: 210px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

const Boost = () => {
  return (
    <Container>
      <ImagemFundo src="/images/bg-boost-desktop.svg" alt="" />
      <Container2>
        <Titulo>Boost your links today</Titulo>
        <BotaoBoost>Get Started</BotaoBoost>
      </Container2>
    </Container>
  )
}

export default Boost