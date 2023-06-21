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
    fill: #9d0c26;
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
  flex-direction: row;
  max-height: 550px;

  @media ((max-width: ${({theme}) => theme.breakpoint.lg})) {
    flex-direction: column;
    height: 100%;
  }
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

  @media ((min-width: ${({theme}) => theme.breakpoint.xxl})) {
    width: 30%;
  }
  @media ((max-width: ${({theme}) => theme.breakpoint.xxl})) {
    font-size: 14px;
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
