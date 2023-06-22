import {NavLink} from 'react-router-dom'
import styled, {css} from 'styled-components'

export const Container = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  gap: 10px;
  padding: 20px;
  flex-direction: column;
  width: 50%;
  background-color: ${({theme}) => theme.color.gallery};
  border: 1px solid ${({theme}) => theme.color.silver};
  border-radius: 20px;
  @media ((max-width: ${({theme}) => theme.breakpoint.md})) {
    width: auto;
  }
`

export const StyledBoxPoland = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  flex-direction: column;
`

export const StyledMapPoland = styled.div`
  display: flex;
  height: 100%;
  margin: auto;
  min-width: 65%;
  width: 85%;
  max-width: 600px;
  align-content: center;
  flex-direction: column;
  place-content: center;
`

export const Header = styled.span`
  margin: 0 auto 10px auto;
  text-transform: uppercase;
  margin-bottom: 10px;
  text-align: center;
`

export const StyledButtonBox = styled.div`
  display: flex;
  gap: 10px;
  text-align: center;
  text-transform: uppercase;
  margin-left: auto;
`

export const StyledUnitBox = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  align-items: center;
  height: 100%;
`

export const StyledSvg = styled.svg`
  cursor: pointer;

  @media (max-width: ${({theme}) => theme.breakpoint.lg}) {
    max-height: 450px;
  }
  & path:hover {
    transform-origin: 50% 50%;
    transform-box: fill-box;
  }
  & path:active {
    fill: ${({theme}) => theme.color.monarch};
  }
  & a:hover {
    outline: none;
    transition: all 0.5s ease-in-out;
  }
`

export const StyledCheck = styled.div`
  max-width: 27px;

  @media ((max-width: ${({theme}) => theme.breakpoint.md})) {
    max-width: 20px;
  }
`

export const StyledSelect = styled.div`
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
  color: ${({theme}) => theme.color.black};
  margin: 0 auto;
  margin-top: 10px;
  text-decoration: none;
  text-decoration-line: none;
  width: fit-content;
`

export const StyledRegionNameLabel = styled.div`
  text-transform: uppercase;
  text-align: center;
`
