import styled from 'styled-components'

export const StyledTeritorialUnit = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  width: 50%;
  background-color: #f0f0f0;
  border: 1px solid #cbcbcb;
  border-radius: 20px;
  @media ((max-width: ${({theme}) => theme.breakpoint.md})) {
    width: auto;
  }
  /* @media ((max-width: 362px)){
  max-width:276px;
        };  */
`

export const StyledLabelBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  min-width: 100%;
  max-width: 100%;
`

export const StyledMultiSelectLabelBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  width: auto;
`

export const StyledLabel = styled.label`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 5px;
  text-transform: uppercase;
  align-items: baseline;
  gap: 5px;
`

export const StyledSelectBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`

export const StyledMultiSelectBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`

export const StyledCheck = styled.div`
  max-width: 27px;
  min-width: 27px;
  @media ((max-width: ${({theme}) => theme.breakpoint.md})) {
    max-width: 20px;
    min-width: 20px;
  }
`

export const StyledBox = styled.div`
  max-width: 100%;
`
export const StyledLabelText = styled.span`
  font-size: 10px;
  color: gray;
`
