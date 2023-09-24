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
  height: 30%;
  margin-right: 250px;
  border: 2px var(--dark-violet) solid;
  border-radius: 6px;

  &:placeholder-shown{
    color: var(--gray-violet);
    font-weight: 500;
    font-size: 18px;
    padding-left: 20px;
  }

`

const BotaoShorter = styled.button`
  position: absolute;
  margin-left: 750px;
  color: var(--white);
  background: var(--cyan);
  width: 160px;
  height: 30%;
  border-radius: 12px;
  padding: 14px;
  border: none;
  font-size: 18px;
  font-weight: bold;
  &:hover{
    opacity: 0.7;
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