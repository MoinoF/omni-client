import React from 'react'
import styled from 'styled-components'

const Container = styled.li``

const Li = ({value}) => {
  return (
    <Container>{value}</Container>
  )
}

export default Li