import styled, {css} from 'styled-components'

export const StyledResultSwitcheLabelBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  font-size: 14px;

  @media ((max-width: ${({theme}) => theme.breakpoint.lg})) {
    font-size: 12px;
  }
  @media ((max-width: ${({theme}) => theme.breakpoint.md})) {
    flex-direction: row;
    gap: 20px;
    font-size: 14px;
  }
`

export const StyledResultSwitcherText = styled.span`
  @media ((max-width: ${({theme}) => theme.breakpoint.sm})) {
    display: none;
  }
`
export const StyledResultSwitcherBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`

export const StyledResultSwitcherTextGraph = styled.span`
  ${({active}) =>
    active &&
    css`
       {
        color: green;
        font-weight: bold;
        font-size: 18px;
      }
    `};
`

export const StyledResultSwitcherTextTable = styled.span`
  ${({active}) =>
    active &&
    css`
       {
        color: #1976d2;
        font-weight: bold;
        font-size: 18px;
      }
    `};
`
