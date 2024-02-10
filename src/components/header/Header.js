import React from 'react'
import styled from 'styled-components'
import Logo from '../../assets/svg/black_logo_Svg'
import Head from './Head'
import MenuLink from '../templates/Menu_Link'

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`

const LogoContainer = styled.div`
  place-self: center;
  margin-top: 14rem;
`

const OpenGallery = styled.div`
  position: absolute;
  top: 50vh;
  right: 0;
  display: none;
  @media(min-width: 1070px) {
    display: block;
  }
`



const Header = () => {

  return (
    <Container>
      <Head />
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <OpenGallery>
        <MenuLink value='Open Gallery' to='#' right='true' />
      </OpenGallery>
    </Container>
  )
}

export default Header