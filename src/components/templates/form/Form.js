import React from 'react'
import styled from 'styled-components'
import Input from './Input'
import Button from '../../Button/Button'

const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 25rem;
`

const Form = ({labels, names, placeholders, types}) => {

  return (
    <Container>
      {
        labels && names && placeholders && types &&

        labels.map((label, index) => (
          <Input label={label} name={names[index]} placeholder={placeholders[index]} type={types[index]} />
        ))
      }
      <Button value="Enviar" />
    </Container>
  )
}

export default Form