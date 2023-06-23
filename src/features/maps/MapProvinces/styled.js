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

export const StyledMapPoland = styled.div`
  display: flex;
  height: 100%;
  margin: auto;
  min-width: 65%;
  width: 85%;
  max-width: 600px;
  max-height: 550px;
  align-content: center;
  flex-direction: column;
  place-content: center;
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

export const Box = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  @media ((max-width: ${({theme}) => theme.breakpoint.lg})) {
    flex-direction: column;
    height: 100%;
  }
`

export const StyledLi = styled.li`
  display: flex;
  text-decoration: none;
  text-decoration-line: none;
  padding: 5px;
  border: 0 solid ${({theme}) => theme.color.black};
  border-radius: 10px;

  &:hover {
    cursor: pointer;
    background-color: ${({theme}) => theme.color.gallery};
  }
  &:active {
    color: ${({theme}) => theme.color.gray};
  }
  ${({active}) =>
    active &&
    css`
       {
        fill: ${({theme}) => theme.color.black};
        background-color: ${({theme}) => theme.color.blackOpacity017};
        &:hover {
          fill: ${({theme}) => theme.color.black};
          color: ${({theme}) => theme.color.black};
          background-color: ${({theme}) => theme.color.blackOpacity027};
      }
    `};
  @media ((max-width: ${({theme}) => theme.breakpoint.lg})) {
    flex-direction: row;
    width: auto;
    word-break: keep-all;
  }
`

export const StyledProvinceButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  width: 100%;
`

export const StyledHeaderText = styled.span`
  display: flex;
  text-align: center;
  text-transform: uppercase;
  margin: auto;
  align-items: center;
  gap: 5px;
`

export const StyledSelect = styled.div`
  display: flex;
  flex-direction: column;
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

export const StyledTips = styled.span``
