import React from 'react'
import styled from 'styled-components'
import Title from '../templates/Title'
import Logo from '../../assets/svg/black_logo_small_Svg'

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Contant = styled.div`
  padding: 0 0 4rem 8rem;
`

const Paragraph = styled.p`
  color: var(--paragraph);
  max-width: 23.75rem;
  font-family: "Futura Book";
`

const About = () => {
  return (
    <Container>
      <Title first_value='So' red_value='b' last_value='re' />
      <Contant>
        <Logo />
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut 
        </Paragraph>
      </Contant>
    </Container>
  )
}

export default About