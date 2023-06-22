import {NavLink} from 'react-router-dom'
import styled from 'styled-components'

export const StyledNavUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  min-height: 94px;
  width: 100%;
  background: ${({theme}) => theme.color.black};
  margin: 0;
  list-style-type: none;
  padding: 0px;
`

export const StyledNavBox = styled.div`
  max-width: 1368px;
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  margin: auto;
  padding: 0 1% 0 1%;
  flex-direction: row;
  justify-content: space-between;
  color: ${({theme}) => theme.color.white};

  @media ((max-width: ${({theme}) => theme.breakpoint.md})) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    padding-top: 24px;
    padding-bottom: 16px;
  }
`

export const StyledNavLink = styled(NavLink)`
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  color: ${({theme}) => theme.color.white};
  font-size: 20px;
  padding: 15px 20px;
  display: flex;
  gap: 10px;
  align-items: center;

  @media ((max-width: ${({theme}) => theme.breakpoint.lg})) {
    font-size: 16px;
  }
  @media ((max-width: ${({theme}) => theme.breakpoint.md})) {
    font-size: 14px;
  }
  &.active {
    border: 1px solid ${({theme}) => theme.color.white};
    border-radius: 10px;
  }
`
