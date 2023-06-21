import styled from 'styled-components'

export const StyledResultHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  justify-items: center;
  margin: 20px;
  width: auto;
  max-width: 100%;
  gap: 10px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`

export const StyledResultsTitle = styled.div`
  display: flex;
  justify-content: center;
  font-size: 28px;
  text-align: center;
  font-weight: 700;
  text-transform: uppercase;
  width: 100%;
  max-width: 100%;

  @media (min-width: ${({theme}) => theme.breakpoint.xxl}) {
    font-size: 28px;
  }
  @media ((max-width: ${({theme}) => theme.breakpoint.xxl})) {
    font-size: 26px;
  }
  @media ((max-width: ${({theme}) => theme.breakpoint.xl})) {
    font-size: 24px;
  }
  @media ((max-width: ${({theme}) => theme.breakpoint.lg})) {
    font-size: 22px;
  }
  @media ((max-width: ${({theme}) => theme.breakpoint.md})) {
    font-size: 20px;
  }
  @media ((max-width: ${({theme}) => theme.breakpoint.sm})) {
    font-size: 16px;
  }
`

export const StyledSwitcher = styled.div`
  display: flex;
  justify-content: flex-end;
  min-width: 100%;
  max-width: 20%;
`

export const StyledResultsBox = styled.div`
  max-width: 100%;
`
export const StyledResultsPage = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  margin: 20px;
`
