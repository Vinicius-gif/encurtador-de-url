'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'

const HeaderContainer = styled.header`
  width: 100%;
  padding: 40px 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 375px) {
    padding: 10px 5%;
}
`

const LinkCabecalho = styled(Link)`
  text-decoration: none;
  color: var(--gray-violet);
  font-weight: bold;
  margin-left: 15px;
  margin-right: 15px;

  &:hover {
    color: var(--dark-violet);
  }
`

const Botao = styled.button`
  color: var(--white);
  background: var(--cyan);
  border-radius: 20px;
  padding: 12px;
  border: none;
  font-size: 16px;
  font-weight: bold;
  &:hover{
    filter: grayscale(50%) brightness(120%);
  }
`
const LinksLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 375px) {
    & div {
      margin-left: 180px;
    }
  }
`

const LinksSing = styled.div`
  @media (max-width: 375px) {
    visibility: hidden;
  }
`

const Header = () => {

  const isMobile = useMediaQuery({ maxWidth: 375 });

  return (
    <HeaderContainer>
      <LinksLogo>
        <img src="/images/logo.svg" alt="logo" />
        { isMobile ?
            <div>
              <Image width={20} height={20} src="/images/menu.png" alt="" />
            </div>
          :
          <>
            <LinkCabecalho href='/'>Features</LinkCabecalho>
            <LinkCabecalho href='/'>Pricing</LinkCabecalho>
            <LinkCabecalho href='/'>Resources</LinkCabecalho>
          </>
        }
      </LinksLogo>
      { !isMobile &&
        <LinksSing>
          <LinkCabecalho href='/'>Login</LinkCabecalho>
          <Botao>Sign Up</Botao>
        </LinksSing>
      }
    </HeaderContainer>
  )
}

export default Header