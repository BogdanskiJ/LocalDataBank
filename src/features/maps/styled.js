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
  background-color: rgb(240, 240, 240);
  border: 1px solid rgb(203, 203, 203);
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

export const Box = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  max-height: 550px;
  @media ((max-width: ${({theme}) => theme.breakpoint.lg})) {
    flex-direction: column;
    height: 100%;
  }
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

export const StyledMap = styled.div`
  display: flex;
  flex: 0 0 50%;
  // max-width: 500px;
  //max-height: 500px;
  justify-content: flex-end;
  align-content: center;
  flex-direction: row;
`

export const StyledSvg = styled.svg`
  cursor: pointer;
  @media (max-width: ${({theme}) => theme.breakpoint.lg}) {
    max-height: 450px;
  }
  @media ((max-width: ${({theme}) => theme.breakpoint.md})) {
    // max-width: 400px;
  }

  /* @media ((min-width: ${({theme}) =>
    theme.breakpoint.xl}) and (max-width:${({theme}) => theme.breakpoint.xxl})){
           max-height:400px;
        };

@media ((min-width: ${({theme}) => theme.breakpoint.lg}) and (max-width:${({
    theme,
  }) => theme.breakpoint.xl})){
           max-height:100px;
        };

@media ((min-width: ${({theme}) => theme.breakpoint.md}) and (max-width:${({
    theme,
  }) => theme.breakpoint.lg})){
           max-height:100px;
        };

@media ((min-width: ${({theme}) => theme.breakpoint.sm}) and (max-width:${({
    theme,
  }) => theme.breakpoint.md})){
           max-height:100px;
        };

@media ((max-width:${({theme}) => theme.breakpoint.sm})){
           max-height:100px;
        }; */

  & path:hover {
    /* transform: scale(1.1); */
    transform-origin: 50% 50%;
    transform-box: fill-box;
    /* position: relative;
  z-index:4 */
  }
  & path:active {
    fill: #9d0c26;
  }
  & a:hover {
    outline: none;
    transition: all 0.5s ease-in-out;
  }
`

export const Link = styled(NavLink)`
  text-decoration: none;
  text-decoration-line: none;
`

export const StyledList = styled.div`
  display: flex;
  max-width: 35%;
  width: 100%;
  height: 100%;
  background-color: white;
  padding: 10px;
  border: 1px solid rgb(203, 203, 203);
  border-radius: 20px 0 0 20px;
  height: auto;
  max-height: 100%;
  overflow-y: scroll;
  scrollbar-width: thin;
  word-break: break-word;
  /*
		xs: 0
		sm: 576
		md: 768p
		lg: 992px
		xl: 1200px
		xxl: 1400px
, */
  @media ((min-width: ${({theme}) => theme.breakpoint.xxl})) {
    width: 30%;
  }
  @media ((max-width: ${({theme}) => theme.breakpoint.xxl})) {
    font-size: 14px;
    //max-height: 400px;
  }

  @media ((max-width: ${({theme}) => theme.breakpoint.xl})) {
    // max-height: 300px;
  }

  @media ((max-width: ${({theme}) => theme.breakpoint.lg})) {
    font-size: 12px;
    max-width: 95%;
    width: 100%;
    height: auto;
    min-height: 60px;
    padding: 2px 10px;
    border-radius: 20px 20px 0 0;
    overflow-y: hidden;
    justify-content: center;
    &::-webkit-scrollbar {
      height: 8px;
    }
    &::-webkit-scrollbar-thumb {
      width: 100px;
    }
  }

  /* &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: #cdcdcd;
    border-radius: 10px;
    border: 1px solid black;
    height: 100px;
  } */

  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.1);
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.2);
  }
  &::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.4);
  }
  &::-webkit-scrollbar-thumb:active {
    background: rgba(0, 0, 0, 0.5);
  }
`

export const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: fit-content;
  margin: auto;
  padding: 0;
  text-decoration: none;
  text-decoration-line: none;
  list-style-type: none;
  @media ((max-width: ${({theme}) => theme.breakpoint.lg})) {
    flex-direction: row;
    width: auto;
    min-width: 100px;
    height: 100%;
    justify-content: flex-start;
    text-align: center;
    align-items: center;
    padding: 0;
  }
`

export const StyledLi = styled.li`
  display: flex;
  text-decoration: none;
  text-decoration-line: none;
  padding: 5px;
  border: 0 solid black;
  border-radius: 10px;
  &:hover {
    //font-weight: bold;
    cursor: pointer;
    background-color: rgb(240, 240, 240);
  }
  &:active {
    color: #808080;
  }
  ${({active}) =>
    active &&
    css`
       {
        fill: black;
        /* font-weight: bold; */
        background-color: rgba(0, 0, 0, 0.17);
        &:hover {
          fill: black;
          color: black;
          background-color: rgba(0, 0, 0, 0.27);
        }
      }
    `};
  @media ((max-width: ${({theme}) => theme.breakpoint.lg})) {
    flex-direction: row;
    width: auto;
    word-break: keep-all;
  }
`

export const StyledSelect = styled.div`
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
  color: black;
  margin: 0 auto;
  margin-top: 10px;
  text-decoration: none;
  text-decoration-line: none;
  width: fit-content;
`

export const StyledUnitBox = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  align-items: center;
  height: 100%;
`

export const StyledCheck = styled.div`
  max-width: 27px;
  @media ((max-width: ${({theme}) => theme.breakpoint.md})) {
    max-width: 20px;
  }
`

export const StyledRegionNameLabel = styled.div`
  text-transform: uppercase;
  text-align: center;
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
`

export const StyledButtonBox = styled.div`
  display: flex;
  gap: 10px;
  text-align: center;
  text-transform: uppercase;
  margin-left: auto;
`
