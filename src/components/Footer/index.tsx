import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.footer`
  width: 100%;
  height: 320px;
  background-color: var(--very-dark-violet);
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: var(--white);

  @media (max-width: 375px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    height: 650px;
  }
`

const Logo = styled.img`
  margin-bottom: 110px;
  filter: grayscale(100%) brightness(450%);

  @media (max-width: 375px) {
    margin: 15px;
  }
`

const LinksFooter = styled.div`
  display: flex;
  width: 40%;
  justify-content: space-between;

  & ul{
    list-style-type: none;
  }

  & h3 {
    font-weight: 600;
    font-size: 22px;
  }

  @media (max-width: 375px) {
    flex-direction: column;

    & ul{
      margin: 15px;
    }

    & h3 {
      margin-bottom: 10px;
  }
  }
`

const LinkFooter = styled(Link)`
  color: var(--gray);
  font-size: 14px;

  &:hover {
    color: var(--gray-violet);
  }
`

const SocialMidias = styled.div`
  margin-bottom: 110px;
  width: 10%;
  display: flex;
  margin-left: -200px;
  justify-content: space-between;

  & img {
      &:hover {
        filter: sepia(100%) brightness(80%);
    }
  }

  @media (max-width: 375px) {
    margin: 40px 10px 10px 10px;
    width: 100%;
    justify-content: center;
    gap: 15px;
  }
`

const Footer = () => {
  return (
    <FooterContainer>
      <Logo src="/images/logo.svg" alt="logo" />
      <LinksFooter>
      <ul>
        <h3>Features</h3>
        <li>
          <LinkFooter href="/">Link Shortening</LinkFooter>
        </li>
        <li>
          <LinkFooter href="/">Branded Links</LinkFooter>
        </li>
        <li>
          <LinkFooter href="/">Analytics</LinkFooter>
        </li>
      </ul>
      <ul>
        <h3>Resources</h3>
        <li>
          <LinkFooter href="/">Blog</LinkFooter>
        </li>
        <li>
          <LinkFooter href="/">Developers</LinkFooter>
        </li>
        <li>
          <LinkFooter href="/">Support</LinkFooter>
        </li>
      </ul>
      <ul>
        <h3>Company</h3>
        <li>
          <LinkFooter href="/">About</LinkFooter>
        </li>
        <li>
          <LinkFooter href="/">Our Team</LinkFooter>
        </li>
        <li>
          <LinkFooter href="/">Careers</LinkFooter>
        </li>
        <li>
          <LinkFooter href="/">Contact</LinkFooter>
        </li>
      </ul>
      </LinksFooter>
      <SocialMidias>
          <Link href="/">
            <img src="/images/icon-facebook.svg" alt="facebook icon"/>
          </Link>
          <Link href="/">
            <img src="/images/icon-twitter.svg" alt="twitter icon"/>
          </Link>
          <Link href="/">
            <img src="/images/icon-pinterest.svg" alt="pinterest icon"/>
          </Link>
          <Link href="/">
            <img src="/images/icon-instagram.svg" alt="instagram icon"/>
          </Link>
      </SocialMidias>
    </FooterContainer>
  )
}

export default Footer