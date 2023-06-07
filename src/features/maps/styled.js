import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	-webkit-box-align: center;
	align-items: center;
	padding: 20px;
	flex-direction: column;
	width: 50%;
	background-color: rgb(240, 240, 240);
	border: 1px solid rgb(203, 203, 203);
	border-radius: 20px;
	@media ((max-width: ${({ theme }) => theme.breakpoint.md})) {
		width: auto;
	}
`;

export const StyledBoxPoland = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	justify-content: center;
	flex-direction: column;
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
	height: 100%;
	align-content: center;
	flex-direction: column;
	place-content: center;
`;

export const Header = styled.span`
	margin: 0 auto 10px auto;
	text-transform: uppercase;
	margin-bottom: 10px;
	text-align: center;
`;

export const StyledMap = styled.div`
	display: flex;
	flex: 0 0 50%;
	max-width: 500px;
	max-height: 500px;
	justify-content: flex-end;
	align-content: center;
	flex-direction: row;
`;

export const StyledSvg = styled.svg`
	@media (min-width: ${({ theme }) => theme.breakpoint.xxl}) {
		max-height: 600px;
	}
	@media ((max-width: ${({ theme }) => theme.breakpoint.md})) {
		max-width: 400px;
	}

	/* @media ((min-width: ${({ theme }) =>
		theme.breakpoint.xl}) and (max-width:${({ theme }) =>
		theme.breakpoint.xxl})){
           max-height:400px;
        };

@media ((min-width: ${({ theme }) => theme.breakpoint.lg}) and (max-width:${({
		theme,
	}) => theme.breakpoint.xl})){
           max-height:100px;
        };

@media ((min-width: ${({ theme }) => theme.breakpoint.md}) and (max-width:${({
		theme,
	}) => theme.breakpoint.lg})){
           max-height:100px;
        };

@media ((min-width: ${({ theme }) => theme.breakpoint.sm}) and (max-width:${({
		theme,
	}) => theme.breakpoint.md})){
           max-height:100px;
        };

@media ((max-width:${({ theme }) => theme.breakpoint.sm})){
           max-height:100px;
        }; */

	& path:hover {
		/* transform: scale(1.1); */
		transform-origin: 50% 50%;
		transform-box: fill-box;
		/* position: relative;
  z-index:4 */
	}
	& path:active {
		fill: #9d0c26;
	}
	& a:hover {
		outline: none;
		transition: all 0.5s ease-in-out;
	}
`;

export const Link = styled(NavLink)`
	text-decoration: none;
	text-decoration-line: none;
`;

export const StyledList = styled.div`
	min-width: 235px;
	max-width: 50%;
`;

export const StyledUl = styled.ul`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	width: fit-content;
	margin: 0;
	color: green;
	text-decoration: none;
	text-decoration-line: none;
	list-style-type: none;
	padding: 0;
	&:hover {
		// transition: all 0.6s ease-in-out;
	}
`;

export const StyledLi = styled.li`
	display: flex;
	color: black;
	text-decoration: none;
	text-decoration-line: none;
	width: fit-content;
	&:hover {
		font-weight: bold;
		cursor: default;
	}
	&:active {
		color: #808080;
	}
`;

export const StyledSelect = styled.div`
	display: flex;
	gap: 5px;
	justify-content: center;
	align-items: center;
	color: black;
	margin: 0 auto;
	margin-top: 10px;
	text-decoration: none;
	text-decoration-line: none;
	width: fit-content;
`;

export const StyledUnitBox = styled.div`
	display: flex;
	flex-direction: row;
	align-content: center;
	justify-content: center;
	align-items: center;
`;

export const StyledCheck = styled.div`
	max-width: 27px;
	@media ((max-width: ${({ theme }) => theme.breakpoint.md})) {
		max-width: 20px;
	}
`;

export const StyledRegionNameLabel = styled.div`
	text-transform: uppercase;
	text-align: center;
`;
