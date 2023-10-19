'use client'

import React from 'react'
import styled from 'styled-components'

const Containner = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 60px;

  @media (max-width: 375px) {

    flex-direction: column-reverse;

    & img {
      width: 100%;
      margin-bottom: 40px;
      padding: 8px;
    }
  }
`

const TituloBanner = styled.h1`
  font-weight: 700;
  font-size: 50px;
  font-weight: bold;
  line-height: 3.8rem;
  margin-bottom: 10px;
  color: var(--dark-violet);

  @media (max-width: 375px) {
    text-align: center;
    font-size: 42px;
  }
`

const DescricaoTitulo = styled.h3`
  font-weight: 500;
  font-size: 18px;
  color: var(--gray-violet);
  margin-bottom: 20px;

  @media (max-width: 375px) {
    text-align: center;
    font-size: 15px;
    font-weight: 500;
    margin: 20px 2px;
  }
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

  @media (max-width: 375px) {
    margin: 0 25%;
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
      <img src="/images/illustration-working.svg" alt="Imagem de uma pessoa em uma mesa no computador" />
    </Containner>
  )
}

export default Banner
