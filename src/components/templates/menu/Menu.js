import React from 'react'
import styled from 'styled-components'
import MenuButton from './MenuButton'

const Container = styled.div`
  cursor: pointer;
  /* padding: .1rem; */
`

const Menu = () => {
  return (
    <Container title='menu'>
      <MenuButton />
    </Container>
  )
}

export default Menu