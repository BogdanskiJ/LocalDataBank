import styled from 'styled-components'

export const StyledLine = styled.div`
  //display: flex;
  width: auto;
  height: auto;
  aspect-ratio: 5/2;
  margin-top: 0;
  justify-content: center;
  background-color: white;
  border: 1px solid rgb(203, 203, 203);
  border-radius: 20px;
  //min-height: 400px;
  //height: 100%;
  //max-height: 700px;

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
