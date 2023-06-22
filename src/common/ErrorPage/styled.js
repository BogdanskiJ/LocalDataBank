import {NavLink} from 'react-router-dom'
import styled from 'styled-components'

export const StyledErrorPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 56px;
`

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 180px;

  @media ((max-width: ${({theme}) => theme.breakpoint.md})) {
    width: 50px;
    height: 45px;
    margin: auto;
  }
`
export const Error = styled.p`
  font-weight: 600;
  font-size: 36px;
  line-height: 120%;
  margin-top: 38px;
  text-align: center;
  color: ${({theme}) => theme.color.gray};

  @media ((max-width: ${({theme}) => theme.breakpoint.md})) {
    font-weight: 500;
    font-size: 14px;
    line-height: 130%;
    margin-left: 16px;
    margin-top: 48px;
  }
`

export const Info = styled.p`
  font-weight: 500;
  font-size: 22px;
  line-height: 130%;
  text-align: center;
  color: ${({theme}) => theme.color.gray};
  margin-top: 24px;

  @media ((max-width: ${({theme}) => theme.breakpoint.md})) {
    font-weight: 400;
    font-size: 10px;
    line-height: 140%;
    margin-left: 16px;
    margin-top: 12px;
  }
`

export const StyledNavLink = styled(NavLink)``
