import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavigation = styled.ul`
    display: flex;
    align-items: center;
    justify-content:center;
    flex-wrap: wrap;
    min-height: 94px;
    width: 100%;
    background:black;
    margin: 0;
    list-style-type: none;
    padding: 0px;
`;

export const Container = styled.div`
    max-width:1368px;
    width:100%;
    display: flex;
    margin:auto;
    padding:0 1% 0 1%;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    color: white;
     @media (max-width: 768px){
        display: flex;
        flex-direction: column;
        align-items: center;
        gap:24px;
        padding-top:24px;
        padding-bottom:16px;
    };
`;

