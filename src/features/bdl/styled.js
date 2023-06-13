import styled from "styled-components";

export const StyledHead = styled.h1`
	display: flex;
	justify-content: center;
	text-transform: uppercase;
	text-align: center;
	font-size: 30px;

	@media (min-width: ${({ theme }) => theme.breakpoint.xxl}) {
		font-size: 30px;
	}

	@media ((max-width: ${({ theme }) => theme.breakpoint.xxl})) {
		font-size: 28px;
	}

	@media ((max-width: ${({ theme }) => theme.breakpoint.xl})) {
		font-size: 26px;
	}

	@media ((max-width: ${({ theme }) => theme.breakpoint.lg})) {
		font-size: 24px;
	}

	@media ((max-width: ${({ theme }) => theme.breakpoint.md})) {
		font-size: 22px;
	}

	@media ((max-width: ${({ theme }) => theme.breakpoint.sm})) {
		font-size: 18px;
	}
`;

export const StyledParagraph = styled.p`
	display: flex;
	justify-content: flex-start;
	text-align: left;
	line-height: 1.45;
	/* font-size: 30px;

	@media (min-width: ${({ theme }) => theme.breakpoint.xxl}) {
		font-size: 30px;
	}

	@media ((max-width: ${({ theme }) => theme.breakpoint.xxl})) {
		font-size: 28px;
	}

	@media ((max-width: ${({ theme }) => theme.breakpoint.xl})) {
		font-size: 26px;
	}

	@media ((max-width: ${({ theme }) => theme.breakpoint.lg})) {
		font-size: 24px;
	}

	@media ((max-width: ${({ theme }) => theme.breakpoint.md})) {
		font-size: 22px;
	}

	@media ((max-width: ${({ theme }) => theme.breakpoint.sm})) {
		font-size: 18px;
	} */
`;
export const StyledBDLPage = styled.div`
	display: flex;
	flex-direction: column;
	margin: 20px;
	gap: 10px;
	/* font-size: 30px;

	@media (min-width: ${({ theme }) => theme.breakpoint.xxl}) {
		font-size: 30px;
	}

	@media ((max-width: ${({ theme }) => theme.breakpoint.xxl})) {
		font-size: 28px;
	}

	@media ((max-width: ${({ theme }) => theme.breakpoint.xl})) {
		font-size: 26px;
	}

	@media ((max-width: ${({ theme }) => theme.breakpoint.lg})) {
		font-size: 24px;
	}

	@media ((max-width: ${({ theme }) => theme.breakpoint.md})) {
		font-size: 22px;
	}

	@media ((max-width: ${({ theme }) => theme.breakpoint.sm})) {
		font-size: 18px;
	} */
`;

export const StyledSection = styled.section`
	background-color: white;
	border: 1px solid rgb(203, 203, 203);
	border-radius: 10px;
	padding: 10px;
	@media (min-width: ${({ theme }) => theme.breakpoint.xxl}) {
		font-size: 18px;
	}

	@media ((max-width: ${({ theme }) => theme.breakpoint.xxl})) {
		font-size: 16px;
	}

	@media ((max-width: ${({ theme }) => theme.breakpoint.xl})) {
		font-size: 14px;
	}

	@media ((max-width: ${({ theme }) => theme.breakpoint.lg})) {
		font-size: 12px;
	}

	@media ((max-width: ${({ theme }) => theme.breakpoint.md})) {
		font-size: 10px;
	}

	@media ((max-width: ${({ theme }) => theme.breakpoint.sm})) {
		font-size: 8px;
	}
`;

export const StyledSectionHeader = styled.h2`
	margin: auto;
	text-align: center;
	@media (min-width: ${({ theme }) => theme.breakpoint.xxl}) {
		font-size: 24px;
	}

	@media ((max-width: ${({ theme }) => theme.breakpoint.xxl})) {
		font-size: 22px;
	}

	@media ((max-width: ${({ theme }) => theme.breakpoint.xl})) {
		font-size: 20px;
	}

	@media ((max-width: ${({ theme }) => theme.breakpoint.lg})) {
		font-size: 18px;
	}

	@media ((max-width: ${({ theme }) => theme.breakpoint.md})) {
		font-size: 16px;
	}

	@media ((max-width: ${({ theme }) => theme.breakpoint.sm})) {
		font-size: 12px;
	}
`;

export const StyledTbody = styled.tbody`
	margin: auto;
	text-align: center;
	border-collapse: collapse;
	tr:nth-child(odd) {
		background-color: #f2f2f2;
	}
`;

export const StyledTr = styled.tr``;

export const StyledTh = styled.th`
	padding: 10px;
	border: 1px solid #dee2e6;
`;

export const StyledTd = styled.td`
	padding: 10px;
	border: 1px solid #dee2e6;
`;

export const StyledAnchor = styled.a`
	color: blue;
	&:hover {
		color: blue;
	}
	&:visited {
		color: #6827ff;
	}
	&:hover {
		text-decoration: underline;
		color: purple;
	}
	&:active {
		color: red;
	}
`;
