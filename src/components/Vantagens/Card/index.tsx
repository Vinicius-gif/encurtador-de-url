import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
  width: 300px;
  height: 200px;
  border-radius: 4px;
  background-color: var(--white);
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  margin: 15px;
  margin-bottom: 90px;
  
`
const IconeCard = styled.div`
  background-color: var(--dark-violet);
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-left: 20px;
  margin-top: -35px;
  padding-top: 10px;

  @media (max-width: 375px) {
    margin-left: 115px;
  }
`

const ConteudoTexto = styled.div`
  text-align: start;
  padding: 15px;

  @media (max-width: 375px) {
    text-align: center;
  }
`

const Titulo = styled.h2`
  color: var(--dark-violet);
  font-size: 22px;
  font-weight: bold;

  @media (max-width: 375px) {
    margin-bottom: 10px;
  }
`

const Descricao = styled.p`
  color: var(--gray-violet);
  font-size: 14px;
  word-break: break-all;
`

interface Props {
  icone: string;
  titulo: string;
  descricao: string;
}

const Card = ({icone, titulo, descricao}: Props) => {
  return (
    <CardContainer>
      <IconeCard>
        <img src={icone} alt="icone" />
      </IconeCard>
      <ConteudoTexto>
        <Titulo>{titulo}</Titulo>
        <Descricao>{descricao}</Descricao>
      </ConteudoTexto>
    </CardContainer>
  )
}

export default Card