'use client'

import styled from 'styled-components'
import React from 'react';
import { useShorterUrl } from '@/Hooks/useShorterUrl';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 70px;
`

const Background = styled.article`
    position: relative;
    width: 1100px;
    height: 168px;
    background-color: var(--dark-violet);
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 12px;
    margin-top: 30px;

    @media (max-width: 375px) {
      flex-direction: column;
      width: 100%;
      margin: 20px;

      & input {
        width: 85%;
        top: 15px;
        left: 8%;
        border-radius: 8px;
      }

      & button {
        bottom: 15px;
        left: 8%;
        width: 85%;
        border-radius: 8px;
      }
    }
`

const InputLink = styled.input`
  position: absolute;
  width: 700px;
  height: 50px;
  border-radius: 6px;
  top: 60px;
  left: 100px;

  &:focus{
    border: 2px solid #e4085c;
    outline: 0;

    &:placeholder-shown {
      color: #e4085c;
    }
  }

  &:placeholder-shown{
    color: var(--gray-violet);
    font-weight: 500;
    font-size: 18px;
    padding-left: 20px;
  }
`

const BotaoShorter = styled.button`
  position: absolute;
  right: 100px;
  color: var(--white);
  background: var(--cyan);
  width: 160px;
  height: 50px;
  border-radius: 12px;
  padding: 14px;
  border: none;
  font-size: 18px;
  font-weight: bold;
  &:hover{
    filter: grayscale(50%) brightness(120%);
  }
`

const ListaUrls = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ContainerUrl = styled.li`
  width: 1100px;
  height: 60px;
  background-color: var(--white);
  border-radius: 4px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  padding: 15px;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 375px) {
    width: 90%;
    height: 168px;
    flex-direction: column;
    text-align: start;

    & a {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      overflow: hidden;
      width: 100%;
      margin: 0;
    }

    & button {
      width: 100%;
      margin-top: 20px;
    }
  }
`

const ShortUrl = styled.a`
  color: var(--cyan);
  margin-right: 20px;
`

const CopyButton = styled.button`
  color: var(--white);
  background: var(--cyan);
  width: 90px;
  height: 40px;
  border-radius: 8px;
  padding: 4px;
  border: none;
  font-size: 14px;
  font-weight: bold;
  &:hover{
    filter: grayscale(50%) brightness(120%);
  }
`

const UrlShortener = () => {

  const { inputUrl, handleUrlInputChange, shortenUrl, shortenedUrls } = useShorterUrl();

  const copyToClipboard = (text: string) => {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert('Link copiado para a área de transferência.');
  };

  return (
    <div>
      <Container>
        <Background>
            <InputLink
              type="text"
              placeholder="Shorten a link here..."
              value={inputUrl}
              onChange={handleUrlInputChange}
              />
            <BotaoShorter onClick={shortenUrl}>Shorten It!</BotaoShorter>
        </Background>
      </Container>
      <ListaUrls>
          {shortenedUrls.map((url, index) => (
            <ContainerUrl key={index}>
                <a href={url.fullUrl} target="_blank" rel="noopener noreferrer">{url.fullUrl}</a>
              <div>
                <ShortUrl href={url.shortenedUrl} target="_blank" rel="noopener noreferrer">{url.shortenedUrl}</ShortUrl>
                <CopyButton onClick={() => copyToClipboard(url.shortenedUrl)}>Copy</CopyButton>
              </div>
            </ContainerUrl>
          ))}
      </ListaUrls>
    </div>
  );
}

export default UrlShortener;


