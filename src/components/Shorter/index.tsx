'use client'

import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const InputLink = styled.input`
  position: absolute;
  width: 40%;
  height: 25%;
  margin-right: 250px;
`

const BotaoShorter = styled.button`
  position: absolute;
  margin-left: 750px;
  color: var(--white);
  background: var(--cyan);
  width: 160px;
  border-radius: 26px;
  padding: 14px;
  border: none;
  font-size: 18px;
  font-weight: bold;
  &:hover{
    opacity: 0.5;
  }
`

const Shorter = () => {
  return (
    <Container>
      <img src="/images/bg-shorten-desktop.svg" alt="Fundo" />
      <InputLink type="text" placeholder='Shorten a link here...'/>
      <BotaoShorter>Shorten It!</BotaoShorter>
    </Container>
  )
}

export default Shorter