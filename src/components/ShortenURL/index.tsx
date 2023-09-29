'use client'

import axios from 'axios'
import React, { useState } from 'react'
import styled from 'styled-components'

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

  & label {
    position: absolute;
  }

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
const API_KEY = 'b2e173f7369d128004d88defe16314b123c62650'; // chave de API do Bitly

const ShortenURL: React.FC = () => {
  const [originalURL, setOriginalURL] = useState('');
  const [shortenedURL, setShortenedURL] = useState('');
  const [isValidURL, setIsValidURL] = useState(true);
  const [isEmpty, setIsEmpty] = useState(false);

  const validateURL = (url: string) => {
    try {
      if (url === '') {
        setIsValidURL(true);
        setIsEmpty(true);
        return;
      }

      new URL(url);
      setIsValidURL(true);
    } catch (error) {
      setIsValidURL(false);
      setIsEmpty(false);
    }
  };

  const shortenURL = async () => {
    validateURL(originalURL);

    if (!isValidURL) {
      return;
    }

    try {
      const response = await axios.post(
        'https://api-ssl.bitly.com/v4/shorten',
        {
          long_url: originalURL,
        },
        {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      );

      const { link } = response.data;
      setShortenedURL(link);
    } catch (error) {
      console.error('Erro ao encurtar a URL:', error);
      alert('Ocorreu um erro ao encurtar a URL. Por favor, tente novamente mais tarde.');
    }
  };

  return (
    <Container>
      <Background>
        <div>
          <InputLink
            type="text"
            placeholder="Shorten a link here..."
            value={originalURL}
            onChange={(e) => setOriginalURL(e.target.value)}
            style={{ borderColor: isValidURL ? 'initial' : 'red' }}
          />
          {isEmpty && <label style={{ color: 'red' }}>O campo não pode estar vazio.</label>}
        </div>
      <BotaoShorter onClick={shortenURL}>Shorten It!</BotaoShorter>
      </Background>
      {!isValidURL && !isEmpty && (
        <label style={{ color: 'red' }}>URL inválida. Por favor, insira uma URL válida.</label>
      )}
      {shortenedURL && (
        <p>
          URL encurtada:{' '}
          <a href={shortenedURL} target="_blank" rel="noopener noreferrer">
            {shortenedURL}
          </a>
        </p>
      )}
    </Container>
  );
};

export default ShortenURL;