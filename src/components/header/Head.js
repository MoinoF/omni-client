// @ts-check
import React from 'react'
import styled from 'styled-components'
import ToggleSvg from '../../assets/svg/toggle_Svg'
import MenuLink from '../templates/Menu_Link'

const Container = styled.div`
  padding: 4rem 8rem 0 0;
  display: flex;
  gap: 2rem;
  justify-content: space-between;
`

const Head = () => {
  return (
    <Container>
      <MenuLink value="Menu" to="#" />
      <ToggleSvg fill='#fff' />
    </Container>
  )
}

export default Head