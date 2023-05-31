import styled from "styled-components";

export const StyledTr = styled.tr`
    line-height: 1.43;
    border: 1px solid rgba(224, 224, 224, 1);
    text-align: left;
    padding: 1px;    
    display: table-row;
    outline: 0;
    cursor: pointer;
    &:hover{
      margin:10px;
      padding:0px;
      background-color: rgba(0, 0, 0, 0.04)
};
`;

export const StyledTd = styled.td`
    line-height: 1.43;
    text-align: right;
    display: table-cell;
    outline: 0;
    padding: 16px 10px;
    //margin:10px;
    //padding: 10px;
`;

export const StyledTdYear = styled.td`
    line-height: 1.43;
    text-align: left;
    display: table-cell;
    outline: 0;
    padding: 16px 10px;
    //margin:10px;
    //padding: 10px;
`;

export const StyledTh = styled.th`
    line-height: 1.43;
    text-align: right;
    display: table-cell;
    outline: 0;
    padding: 16px 10px;
    //margin:10px;
    //padding: 10px;
`;

export const StyledThYear = styled.th`
    line-height: 1.43;
    text-align: left;
    display: table-cell;
    outline: 0;
    padding: 16px 10px;
    //margin:10px;
    //padding: 10px;
`;
export const StyledThArrow = styled.div`
    text-align: left;
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: flex-end;
    align-items: center;
    text-align: right;
    gap:5px;
`;

export const StyledTable = styled.table`
    border-collapse: collapse;
    border-spacing: 0;
    width:100%;
    display:table;
`;

export const StyledTbody = styled.tbody`
    display: table-row-group;
`;

export const StyledThead = styled.thead`
display: table-header-group;
`;

export const StyledArrow = styled.div`
display: flex;
flex-direction:row;
justify-content:center;
`;