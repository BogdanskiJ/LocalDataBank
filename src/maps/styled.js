import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledMap = styled.div`
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