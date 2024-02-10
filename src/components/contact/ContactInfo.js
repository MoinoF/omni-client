import React from 'react'
import styled from 'styled-components'
import TelephoneSvg from '../../assets/svg/telephone_icon_Svg'
import WhatsappSvg from '../../assets/svg/whatsapp_icon_Svg'
import InstaSvg from '../../assets/svg/instagram_icon_Svg'
import FacebookSvg from '../../assets/svg/facebook_icon_Svg'
import EmailSvg from '../../assets/svg/email_icon_Svg'

const Container = styled.div`
`

const Item = styled.div`
  color: var(--foreground);
  display: flex;
  grid-gap: 2rem;
`

const Info = styled.p`
  font-family: "Futura Book";
  letter-spacing: .1rem;
  display: inline-block;
  margin-bottom: 1rem;
`

const contactInfo = ({telephone1, telephone2, whatsapp1, whatsapp2, insta, facebook, email}) => {


  return (
    <Container >
      <Item>
        <TelephoneSvg />
        <Info>
          {telephone1}
        </Info>
      </Item>
      <Item>
        <TelephoneSvg />
        <Info>
          {telephone2}
        </Info>
      </Item>
      <Item>
        <WhatsappSvg />
        <Info>
          {whatsapp1}
        </Info>
      </Item>
      <Item>
        <WhatsappSvg />
        <Info>
          {whatsapp2}
        </Info>
      </Item>
      <Item>
        <InstaSvg />
        <Info>
          {insta}
        </Info>
      </Item>
      <Item>
        <FacebookSvg />
        <Info>
          {facebook}
        </Info>
      </Item>
      <Item>
        <EmailSvg />
        <Info>
          {email}
        </Info>
      </Item>
    </Container>
  )
}

export default contactInfo