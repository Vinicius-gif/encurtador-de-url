'use client'

import React from 'react'
import styled from 'styled-components'

const Containner = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const TituloBanner = styled.h1`
  font-weight: 700;
  font-size: 50px;
  font-weight: bold;
  line-height: 3.8rem;
  margin-bottom: 10px;
`

const DescricaoTitulo = styled.h3`
  font-weight: 500;
  font-size: 18px;
  color: var(--gray-violet);
  margin-bottom: 20px;
`

const BotaoBanner = styled.button`
  color: var(--white);
  background: var(--cyan);
  width: 160px;
  border-radius: 26px;
  padding: 14px;
  border: none;
  font-size: 18px;
  font-weight: bold;
  &:hover{
    filter: grayscale(50%) brightness(120%);
  }
`

const Banner = () => {
  return (
    <Containner>
      <div>
        <TituloBanner>More than just <br/> shorter links</TituloBanner>
        <DescricaoTitulo>
          Build you brand`s recognition and get detailed <br/>
          insigths on how you links are performing
        </DescricaoTitulo>
        <BotaoBanner>Get Started</BotaoBanner>
      </div>
      <div>
        <img src="/images/illustration-working.svg" alt="Imagem de uma pessoa em uma mesa no computador" />
      </div>
    </Containner>
  )
}

export default Banner
