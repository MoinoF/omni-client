import React from 'react'
import styled from 'styled-components'
import Title from '../templates/Title'
import Form from '../templates/form/Form'
import Subtitle from '../templates/Subtitle'
import Logo from '../../assets/svg/black_logo_small_Svg'
import ContactInfo from './ContactInfo'


const Container = styled.div`
  min-height: 100vh;

`

const Section = styled.div`
  padding: 0 8rem 8rem 8rem
` 

const Contant = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: end;

  grid-gap: 6rem;
  @media(max-width: 1036px) {
    grid-template-columns: 1fr;
    justify-content: center;
  }
`

const FormContainer = styled.div`
  margin: 8rem 0 0 0;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  @media(max-width: 1036px) {
    justify-self: center;
  }
`

const ContactInfoContainer = styled.div`
  justify-self: flex-end;
  @media(max-width: 1036px) {
    justify-self: center;
  }
`


const Contact = () => {

  const labels = [
    "Nome",
    "Email",
    "Telefone",
    "Mensagem", 
  ]

  const names = [
    "name",
    "email",
    "telephone",
    "Message",
  ]

  const placeholders = [
    "Seu nome",
    "Seu e-mail",
    "Número de contacto",
    "Escreva a mensagem aqui",
  ]

  const types = [
    "text",
    "email",
    "text",
    "textarea"
  ]

  return (
    <Container>
      <Title first_value="Con" red_value="ta" last_value="cto" />
      <Section>

        <Contant >
          <FormContainer>
            <Subtitle value='Escreva uma' red_value="mensagem" />
            <Form labels={labels} types={types} placeholders={placeholders} names={names} />
          </FormContainer>
          <ContactInfoContainer>
            <Logo />
            <ContactInfo telephone1="(258) 000000000" telephone2="(258) 000000000" whatsapp1="(258) 000000000" whatsapp2="(258) 000000000" insta="instagram.com/profile" facebook="facebook.com/profile" email="email@gmail.com" />

          </ContactInfoContainer>
        </Contant>
      </Section>
    </Container>
  )
}

export default Contact