import styled from 'styled-components'

export const StyledLine = styled.div`
  width: auto;
  height: auto;
  aspect-ratio: 5/2;
  margin-top: 0;
  justify-content: center;
  background-color: ${({theme}) => theme.color.white};
  border: 1px solid ${({theme}) => theme.color.silver};
  border-radius: 20px;

  @media ((max-width: ${({theme}) => theme.breakpoint.xxl})) {
    aspect-ratio: 2/1;
  }
  @media ((max-width: ${({theme}) => theme.breakpoint.xl})) {
    aspect-ratio: 1.6/1;
  }
  @media ((max-width: ${({theme}) => theme.breakpoint.lg})) {
    aspect-ratio: 1.4/1;
  }
  @media ((max-width: ${({theme}) => theme.breakpoint.md})) {
    aspect-ratio: 1/1;
  }
  @media ((max-width: ${({theme}) => theme.breakpoint.sm})) {
    aspect-ratio: 1/1.5;
  }
`

export const StyledCheckbox = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 5px;
  align-items: center;

  @media ((max-width: ${({theme}) => theme.breakpoint.lg})) {
    font-size: 12px;
  }
`
