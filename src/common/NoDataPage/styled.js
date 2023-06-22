import styled from 'styled-components'

export const Wrapper = styled.div`
  max-width: 1368px;
  margin: auto;
`

export const StyledHeader = styled.header`
  font-weight: 600;
  font-size: 36px;
  line-height: 120%;
  color: ${({theme}) => theme.color.gray};
  margin: 56px 20px;
  text-align: center;

  @media ((max-width: ${({theme}) => theme.breakpoint.xxl})) {
    margin-left: 60px;
  }

  @media ((max-width: ${({theme}) => theme.breakpoint.xl})) {
    font-size: 30px;
    margin-left: 40px;
  }

  @media ((max-width: ${({theme}) => theme.breakpoint.md})) {
    font-size: 24px;
    line-height: 130%;
    margin: 24px 16px;
  }
`
