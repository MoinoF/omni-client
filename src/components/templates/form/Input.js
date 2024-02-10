import React from 'react'
import styled from 'styled-components'

const Container = styled.label`
  color: var(--foreground);
  display: flex;
  flex-direction: column;
  gap: .5rem;
  font-family: "Futura Book";
  letter-spacing: .01rem;
`

const InputField = styled.input`
  background: none;
  color: var(--foreground);
  border: 3px solid var(--dark);
  border-radius: 1.25rem;
  padding: .5rem 1rem;
  display: flex;
  justify-content: center;
  font-family: "Futura Book";
  font-size: 1.125rem;
  letter-spacing: .01rem;
`

const TextAreaField = styled.textarea`
  background: none;
  border: 3px solid var(--dark);
  border-radius: 1.25rem;
  padding: .5rem 1rem;
  display: flex;
  justify-content: center;
  font-family: "Futura Book";
  letter-spacing: .01rem;
`

const Input = ({label, name, placeholder, type}) => {
  return (
    <Container>
      {label}
      {
        type !== "textarea" && 
        <InputField name={name} placeholder={placeholder} type={type}></InputField>
      }
      {
        type === "textarea" && 
        <TextAreaField name={name} placeholder={placeholder} rows="5"></TextAreaField>
      }
    </Container>
  )
}

export default Input