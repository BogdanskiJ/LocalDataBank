import styled, {css} from 'styled-components'

export const StyledTablePage = styled.div`
  display: block;
  margin: auto;
  background-color: ${({theme}) => theme.color.white};
  padding: 4%;
  max-width: 100%;
  border: 1px solid ${({theme}) => theme.color.silver};
  border-radius: 20px;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.2);
  }
  ::-webkit-scrollbar-track {
    border-radius: 10px;
    margin: 10px;
    background: rgba(0, 0, 0, 0.1);
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: rgba(0, 0, 0, 0.4);
  }
  ::-webkit-scrollbar-thumb:active {
    background-color: rgba(0, 0, 0, 0.5);
  }
`

export const StyledTrThead = styled.tr`
  max-width: 100%;
  cursor: pointer;
`

export const StyledArrow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const StyledThYear = styled.th`
  padding: 10px;
  fill: none;
  border: 1px solid ${({theme}) => theme.color.alto};
  &:hover {
    fill: ${({theme}) => theme.color.gray};
    color: ${({theme}) => theme.color.gray};
  }
  text-align: left;
  display: table-cell;
  outline: 0;

  ${({active}) =>
    active &&
    css`
       {
        fill: ${({theme}) => theme.color.black};
        background-color: ${({theme}) => theme.color.blackOpacity007};
        &:hover {
          fill: ${({theme}) => theme.color.black};
          color: ${({theme}) => theme.color.black};
        }
      }
    `};
`

export const StyledThArrow = styled.div`
  text-align: left;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: flex-end;
  align-items: center;
  text-align: right;
  gap: 5px;
`

export const StyledTh = styled.th`
  fill: none;
  border: 1px solid ${({theme}) => theme.color.alto};
  padding: 10px;
  text-align: right;
  display: table-cell;
  outline: 0;

  &:hover {
    fill: ${({theme}) => theme.color.gray};
    color: ${({theme}) => theme.color.gray};
    background-color: ${({theme}) => theme.color.blackOpacity005};
  }
  ${({active}) =>
    active &&
    css`
       {
        fill: ${({theme}) => theme.color.black};
        background-color: ${({theme}) => theme.color.blackOpacity007};
        &:hover {
          fill: ${({theme}) => theme.color.black};
          color: ${({theme}) => theme.color.black};
        }
      }
    `};
`

export const StyledTr = styled.tr`
  border: 1px solid ${({theme}) => theme.color.alto};
  text-align: left;
  display: table-row;
  outline: 0;
  cursor: pointer;
  max-width: 100%;

  &:hover {
    margin: 10px;
    padding: 0px;
    background-color: ${({theme}) => theme.color.blackOpacity007};
  }
`

export const StyledTdYear = styled.td`
  padding-left: 10px;
  text-align: left;
  display: table-cell;
  outline: 0;
  background-color: ${({theme}) => theme.color.blackOpacity004};

  &:hover {
    background-color: ${({theme}) => theme.color.blackOpacity007};
  }
  ${({active}) =>
    active &&
    css`
       {
        fill: ${({theme}) => theme.color.black};
        background-color: ${({theme}) => theme.color.blackOpacity007};
        &:hover {
          fill: ${({theme}) => theme.color.black};
          color: ${({theme}) => theme.color.black};
        }
      }
    `};
`

export const StyledTd = styled.td`
  border-right: 1px solid ${({theme}) => theme.color.alto};
  text-align: right;
  display: table-cell;
  outline: 0;
  padding: 10px;
  word-break: break-word;
  vertical-align: top;

  &:hover {
    background-color: ${({theme}) => theme.color.blackOpacity007};
  }
  ${({active}) =>
    active &&
    css`
       {
        fill: ${({theme}) => theme.color.black};
        background-color: ${({theme}) => theme.color.blackOpacity007};
        &:hover {
          fill: ${({theme}) => theme.color.black};
          color: ${({theme}) => theme.color.black};
        }
      }
    `};
`

export const StyledTable = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  margin: auto;
  width: auto;
  min-width: 60%;
  max-width: 100%;
  display: table;

  @media ((max-width: ${({theme}) => theme.breakpoint.lg})) {
    font-size: 14px;
  }
  @media ((max-width: ${({theme}) => theme.breakpoint.md})) {
    font-size: 12px;
  }
  @media ((max-width: ${({theme}) => theme.breakpoint.sm})) {
    font-size: 11px;
  }
`

export const StyledThead = styled.thead`
  display: table-header-group;
  background-color: ${({theme}) => theme.color.blackOpacity004};
`

export const StyledTbody = styled.tbody`
  display: table-row-group;
`
