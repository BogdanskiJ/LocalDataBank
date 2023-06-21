import {NavLink} from 'react-router-dom'
import styled, {css} from 'styled-components'

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
