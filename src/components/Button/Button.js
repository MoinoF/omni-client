import React from 'react'
import styled from 'styled-components'

const Container = styled.button`
  border-radius: 1.25rem;
  border: none;
  background: var(--foreground);
  font-family: "Futura Bold";
  font-size: 1.125rem;
  letter-spacing: .01rem;
  color: var(--dark);
  padding: .7rem 1rem;
  cursor: pointer;

`



const Button = ({value}) => {

  return (
    <Container>
      {value}
    </Container>
  )
}

export default Button