import React from 'react'
import styled from 'styled-components'
import Card from './Card'

const Container = styled.div`
  background-color: var(--ligth-violet);
  width: 100%;
  height: 500px;
  margin-top: -80px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
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
  margin-top: 50px;

`

const Vantagens = () => {
  return (
    <Container>
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
      </Div1>
    </Container>
  )
}

export default Vantagens