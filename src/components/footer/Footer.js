import React from 'react'
import styled from 'styled-components'


const Container = styled.footer`
  padding: 4rem;
  background: var(--dark);
  display: grid;
  justify-content: center;
`

const Paragraph = styled.h1`
  font-family: "Futura Bold";
  text-align: center;
  color: #101010;

`

const Footer = () => {

  const date = new Date()
  const year = date.getFullYear()

  return (
    <Container>
      <Paragraph>
        blackphotography {year}
      </Paragraph>
    </Container>
  )
}

export default Footer