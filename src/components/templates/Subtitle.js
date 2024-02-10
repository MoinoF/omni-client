import React from 'react'
import styled from 'styled-components'

const Container = styled.h2`
  color: var(--foreground);
  font-family: "Futura Bold";
  font-size: 1.125rem;
`

const RedValue = styled.span`
  color: var(--red);
  margin-left: 5px;
`

const Subtitle = ({value, red_value}) => {
  return (
    <Container>
      {value}
      <RedValue>
        {red_value}
      </RedValue>
    </Container>
  )
}

export default Subtitle