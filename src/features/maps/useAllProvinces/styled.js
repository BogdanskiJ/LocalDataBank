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
    fill: ${({theme}) => theme.color.monarch};
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
      }
    `};
  @media ((max-width: ${({theme}) => theme.breakpoint.lg})) {
    flex-direction: row;
    width: auto;
    word-break: keep-all;
  }
`
