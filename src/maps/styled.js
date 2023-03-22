import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
margin:auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Box = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
        align-items: center;
    flex-direction: row;
    
& path{
  fill: ${({ color }) => color || "teal"};
};

& path:hover{
  fill: ${({ hoverColor }) => hoverColor || "crimson"};
};
& a:hover{
  outline: none;
};
`;

export const StyledMapPoland = styled.div`
display: flex;
    flex: 0 0 50%;
    max-width: 500px;
    max-height: 464px;
    justify-content: flex-end;
    align-content: center;
    flex-direction: row;
`;
export const StyledMap = styled.div`
  /* display: flex;
  flex-direction: row;
  justify-content: center;
  height: 0px;
  padding-top: 30%;
  position: relative; */
  display: flex;
    flex: 0 0 50%;
    max-width: 500px;
    max-height:500px;
    justify-content: flex-end;
    align-content: center;
    flex-direction: row;
`;
export const StyledSvg = styled.svg`

`;


export const City = styled.g`
& path{
  fill: ${({ color }) => color || "#005757"};
};

& path:hover{
  fill: ${({ hoverColor }) => hoverColor || "crimson"};
};
& a:hover{
  outline: none;
};
`;

export const Link = styled(NavLink)``;

export const StyledList = styled.div`

`;

