import React from 'react'
import styled from 'styled-components'

const Container = styled.h1`
  padding: 4rem 4rem 0 0;
  color: var(--foreground);
  font-family: "Futura Bold";
  font-size: 1.5rem;
`

const Line = styled.span`
  display: inline-block;
  background: var(--foreground);
  width: 6rem;
  height: .0625rem;
  margin-bottom: .5rem;
  margin-right: 2rem;
`

const RedValue = styled.span`
  color: var(--red);
`

const Title = ({first_value, red_value, last_value}) => {
  return (
    <Container>
      <Line></Line>
      {first_value}
      <RedValue>
        {red_value}
      </RedValue>
      {last_value}
    </Container>
  )
}

export default Title