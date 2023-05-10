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
`;

export const StyledMapPoland = styled.div`
display: flex;
    flex: 0 0 50%;
    max-width: 500px;
    max-height: 464px;
    justify-content: flex-end;
    align-content: center;
    flex-direction: column;
`;

export const Header = styled.span`
margin:auto;
`;

export const StyledMap = styled.div`
  display: flex;
    flex: 0 0 50%;
    max-width: 500px;
    max-height:500px;
    justify-content: flex-end;
    align-content: center;
    flex-direction: row;
`;

export const StyledSvg = styled.svg`
& path:hover{
  /* transform: scale(1.1); */
  transform-origin: 50% 50%;
  transform-box: fill-box;
  /* position: relative;
  z-index:4 */
};
& path:active{
  fill: #9d0c26;
};
& a:hover{
  outline: none;
  transition: all 0.5s ease-in-out;
};
`;

export const Link = styled(NavLink)`
text-decoration:none;
text-decoration-line:none;
`;

export const StyledList = styled.div`
min-width:235px;
max-width:50%;
`;

export const StyledUl = styled.ul`
display:flex;
flex-direction:column;
justify-content: flex-start;
width: fit-content;
margin:0;
color: green;
text-decoration:none;
text-decoration-line:none;
list-style-type: none;
padding:0;
&:hover{
 // transition: all 0.6s ease-in-out;
};
`;

export const StyledLi = styled.li`
display:flex;
color: black;
text-decoration:none;
text-decoration-line:none;
width:fit-content;
&:hover{
  font-weight: bold;
  cursor:default;
};
&:active{
  color:#808080;
};
`;


export const StyledSelect = styled.div`
display:flex;
color: black;
text-decoration:none;
text-decoration-line:none;
width:fit-content;
`;