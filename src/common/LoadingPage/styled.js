import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 100%;
  margin: auto;
`

export const StyledHeader = styled.header`
  font-weight: 600;
  font-size: 20px;
  line-height: 120%;
  width: 100%;
  text-transform: uppercase;
  color: ${({theme}) => theme.color.black};
  margin-top: 10px;
  text-align: center;

  @media ((max-width: ${({theme}) => theme.breakpoint.md})) {
    font-weight: 500;
    font-size: 14px;
    line-height: 130%;
    margin-top: 24px;
    margin-left: 16px;
  }
`
