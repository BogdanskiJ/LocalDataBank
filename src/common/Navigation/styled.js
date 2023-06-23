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
    gap: 8px;
    padding-top: 14px;
    padding-bottom: 8px;
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

  &:active {
    border: 1px solid ${({theme}) => theme.color.white};
    border-radius: 10px;
    background-color: ${({theme}) => theme.color.silver};
  }
  @media ((max-width: ${({theme}) => theme.breakpoint.lg})) {
    font-size: 16px;
    padding: 12px 17px;
  }
  @media ((max-width: ${({theme}) => theme.breakpoint.md})) {
    font-size: 14px;
    padding: 10px 15px;
  }
  &.active {
    border: 1px solid ${({theme}) => theme.color.white};
    border-radius: 10px;
    background-color: ${({theme}) => theme.color.gray};
  }
`
