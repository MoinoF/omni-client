import React from 'react'
import styled from 'styled-components'

const Container = styled.div``

const ContactItem = ({icon, value}) => {
  return (
    <Container>
      {icon}
      {value}
    </Container>
  )
}

export default ContactItem