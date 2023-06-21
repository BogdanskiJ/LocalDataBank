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

export const Container = styled.div`
  margin-top: 120px;
  display: flex;
  justify-content: center;

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  animation: rotate 2s linear infinite;

  @media (max-width: 767px) {
    margin-top: 24px;
  }
`

export const LoadingIcon = styled.img`
  @media (max-width: 767px) {
    width: 35px;
    height: 35px;
  }
`
