import styled from "styled-components";

export const StyledMapPoland = styled.div`
& path{
  fill: ${({ hoverColor }) => hoverColor || "teal"};
};
& path:hover{
  fill: ${({ hoverColor }) => hoverColor || "crimson"}
};
`;