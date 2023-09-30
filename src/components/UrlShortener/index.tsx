'use client'

import styled from 'styled-components'
import React, { useState } from 'react';
import axios from 'axios';
import { useShorterUrl } from '@/Hooks/useShorterUrl';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Background = styled.div`
    position: relative;
    width: 1100px;
    height: 168px;
    background-color: var(--dark-violet);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
`

const InputLink = styled.input`
  position: absolute;
  width: 60%;
  height: 30%;
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

const InputLink_Label = styled.label`
  position: absolute;
  color: red;
`

const BotaoShorter = styled.button`
  position: absolute;
  right: 70px;
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
    filter: grayscale(50%) brightness(120%);
  }
`

const UrlShortener = () => {

  const { inputUrl, handleUrlInputChange, shortenUrl, shortenedUrls } = useShorterUrl();

  return (
    <div>
      <Container>
        <Background>
          <div>
            <InputLink
              type="text"
              placeholder="Shorten a link here..."
              value={inputUrl}
              onChange={handleUrlInputChange}
              />
          </div>
        <BotaoShorter onClick={shortenUrl}>Shorten It!</BotaoShorter>
        </Background>
      </Container>
      <ul>
          {shortenedUrls.map((url, index) => (
            <li key={index}>
              <a href={url.shortenedUrl} target="_blank" rel="noopener noreferrer">{url.shortenedUrl}</a>
              <a href={url.fullUrl} target="_blank" rel="noopener noreferrer">{url.fullUrl}</a>
            </li>
          ))}
        </ul>
    </div>
  );
}

export default UrlShortener;


