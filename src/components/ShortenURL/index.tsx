'use client'

import { useEncurtarURL } from '@/app/Hooks/EncurtarURL/useEncurtarURL'
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

const ShortenURL = () => {

  const { 
    originalURL, 
    setOriginalURL, 
    isValidURL,
    isEmpty,
    shortenURL,
    shortenedURL  
  } = useEncurtarURL();

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
            {isEmpty && <InputLink_Label>O campo não pode estar vazio.</InputLink_Label>}
        </div>
      <BotaoShorter onClick={shortenURL}>Shorten It!</BotaoShorter>
      </Background>
      {!isValidURL && !isEmpty && (
        <InputLink_Label>URL inválida. Por favor, insira uma URL válida.</InputLink_Label>
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