import React from 'react'
import styled from 'styled-components'
import Card from './Card'
import UrlShortener from '../UrlShortener'

const Container = styled.div`
  background-color: var(--ligth-violet);
  width: 100%;
  height: 900px;
  max-height: none;
  text-align: center;
  overflow: auto;
`
const Div1 = styled.div`
  margin-top: 100px;
`

const Titulo = styled.h2`
  font-size: 40px;
  color: var(--black);
  font-weight: bold;
`

const Descricao = styled.p`
  font-size: 18px;
  color: var(--gray-violet);
`
const ContainerCards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;

  & :nth-child(2) {
    transform: translateY(2rem);
  }

  & :nth-child(3) {
    transform: translateY(3rem);
  }

`

const Linha = styled.div`
  width: 40%;
  height: 8px;
  background-color: #1acbf7;
  margin-top: -120px;
  margin-left: 30%;
`

const Vantagens = () => {
  
  return (
    <Container>
        <UrlShortener/>
        <Div1>
          <Titulo>Advanced Statistics</Titulo>
          <Descricao>
            Track how your links are performing across the web with <br />
            our advanced statistics dashboard.
          </Descricao>
          <ContainerCards>
            <Card
              icone='/images/icon-brand-recognition.svg'
              titulo='Brand Recognition'
              descricao='Bosst your brandrecognition with each click.'
            />
            <Card
              icone='/images/icon-detailed-records.svg'
              titulo='Detailed Records'
              descricao='Gain insigths into who is clicking your links.'
            />
            <Card
              icone='/images/icon-fully-customizable.svg'
              titulo='Fully Customizable'
              descricao='Improve brand awareness and content discoverability trhough customizable links.'
            />
          </ContainerCards>
          <Linha/>
        </Div1>
      </Container>
  )
}

export default Vantagens