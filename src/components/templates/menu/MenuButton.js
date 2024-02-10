import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 5px;
  cursor: pointer;
`

const Line = styled.span`
  display: inline-block;
  width: 15px;
  height: 1px;
  background: #e6e6e6;
`

const MenuButton = () => {
  return (
    <Container>
      <Line></Line>
      <Line></Line>
      <Line></Line>
    </Container>
  )
}

export default MenuButton