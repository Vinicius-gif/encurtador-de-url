'use client'

import { useState } from 'react'

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

const MenuHamburguer = styled.div`
  visibility: hidden;

  @media (max-width: 375px) {
    margin-bottom: -450px;
    margin-left: -370px;
    z-index: 1;
    visibility: visible;
    width: 320px;
    height: 400px;
    background-color: var(--dark-violet);
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    border-radius: 8px;

    & button {
      width: 80%;
    }

    & a {
      width: 80%;
      text-align: center;
    }
  }
`

const Header = () => {

  const isMobile = useMediaQuery({ maxWidth: 375 });
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <HeaderContainer>
      <LinksLogo>
        <img src="/images/logo.svg" alt="logo" />
        { isMobile ?
            <div>
              <Image 
                width={20} 
                height={20} 
                src="/images/menu.png" 
                alt="menu icon"
                onClick={toggleMenu}
              />
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
      {menuAberto && (
        <MenuHamburguer>
            <LinkCabecalho style={{color: 'white'}} href='/'>Features</LinkCabecalho>
            <LinkCabecalho style={{color: 'white'}} href='/'>Pricing</LinkCabecalho>
            <LinkCabecalho 
              style={{
                color: 'white',
                borderBottom: '1px solid var(--gray-violet)',
                paddingBottom: '20px'
                }} 
              href='/'
              >
                Resources
              </LinkCabecalho>
            <LinkCabecalho style={{color: 'white'}} href='/'>Login</LinkCabecalho>
          <Botao>Sign Up</Botao>
        </MenuHamburguer>
      )}
    </HeaderContainer>
  )
}

export default Header