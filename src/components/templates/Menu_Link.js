import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  place-items: center;
`

const Line = styled.span`
  display: inline-block;
  background: var(--foreground);
  width: 8rem;
  height: .0625rem;
`

const Link = styled.a`
  color: var(--foreground);
  font-family: "Futura Book";
  text-transform: lowercase;
  font-size: 1.25rem;
  letter-spacing: .1rem;
  margin-left: 2rem;
`

const MenuLink = ({value, to, right = false}) => {

  return (
    <Container>
      { !right &&
        <Line></Line>
      }
      <Link style={{marginRight: "2rem"}} href={to}>{value}</Link>
      {
        right && 
        <Line></Line>
      }
    </Container>
  )

}

export default MenuLink