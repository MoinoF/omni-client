import React from 'react'
import styled from 'styled-components'
import Title from '../templates/Title'
import Image from '../templates/Image'
import Logo from '../../assets/svg/black_logo_small_Svg'

const Container = styled.div`
  min-height: 100vh;
`
const Images = styled.div`
  margin: 8rem 8rem 4rem 8rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;
  @media(max-width: 1400px ) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media(max-width: 1110px) {
    grid-template-columns: 1fr 1fr;
  }
  @media(max-width: 800px) {
    grid-template-columns: 1fr;
  }
`

const LogoContainer = styled.div`
  margin-left: 8rem;
`


const gallery = () => {
  return (
    <Container>
      <Title first_value="Ga" red_value="ll" last_value="ery" />
      <Images>
        <Image />
        <Image />
        <Image />
        <Image />
        <Image />
        <Image />
      </Images>
      <LogoContainer>
        <Logo />
      </LogoContainer>
    </Container>
  )
}

export default gallery