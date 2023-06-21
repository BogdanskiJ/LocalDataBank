import styled from 'styled-components'

export const Wrapper = styled.div`
  max-width: 1368px;
  margin: auto;
`

export const StyledHeader = styled.header`
  font-weight: 600;
  font-size: 36px;
  line-height: 120%;
  color: gray;
  margin: 56px 20px;
  text-align: center;

  @media (max-width: 1420px) {
    margin-left: 60px;
  }

  @media (max-width: 1050px) {
    font-size: 30px;
    margin-left: 40px;
  }

  @media (max-width: 767px) {
    font-size: 24px;
    line-height: 130%;
    margin: 24px 16px;
  }
`
