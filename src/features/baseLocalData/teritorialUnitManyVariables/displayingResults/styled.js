import styled, { css } from "styled-components";

export const StyledTr = styled.tr`
	border: 1px solid rgba(224, 224, 224, 1);
	text-align: left;
	display: table-row;
	outline: 0;
	cursor: pointer;
	max-width: 100%;
	&:hover {
		margin: 10px;
		padding: 0px;
		background-color: rgba(0, 0, 0, 0.07);
	}
`;

export const StyledTd = styled.td`
	border-right: 1px solid rgb(224, 224, 224);
	text-align: right;
	display: table-cell;
	outline: 0;
	padding: 10px;
	word-break: break-word;
	vertical-align: top;
	//text-align: center;
	//vertical-align: middle;
	/* @media ((max-width: ${({ theme }) => theme.breakpoint.xl})) {
		padding: 0;
	} */
	//margin:10px;
	//padding: 10px;
	&:hover {
		background-color: rgba(0, 0, 0, 0.07);
	}
	${({ active }) =>
		active &&
		css`
			 {
				fill: black;
				background-color: rgba(0, 0, 0, 0.07);
				&:hover {
					fill: black;
					color: black;
				}
			}
		`};
`;

export const StyledTdYear = styled.td`
	padding-left: 10px;
	text-align: left;
	display: table-cell;
	outline: 0;
	background-color: rgba(0, 0, 0, 0.04);
	&:hover {
		background-color: rgba(0, 0, 0, 0.07);
	}
	//padding: 16px 10px;
	//margin:10px;
	//padding: 10px;
	${({ active }) =>
		active &&
		css`
			 {
				fill: black;
				background-color: rgba(0, 0, 0, 0.07);
				&:hover {
					fill: black;
					color: black;
				}
			}
		`};
`;

export const StyledTh = styled.th`
	fill: none;
	border: 1px solid rgb(224, 224, 224);
	padding: 10px;
	&:hover {
		fill: gray;
		color: gray;
		background-color: rgba(0, 0, 0, 0.05);
	}
	text-align: right;
	display: table-cell;
	outline: 0;
	${({ active }) =>
		active &&
		css`
			 {
				fill: black;
				background-color: rgba(0, 0, 0, 0.07);
				&:hover {
					fill: black;
					color: black;
				}
			}
		`};
`;

export const StyledThYear = styled.th`
	padding: 10px;
	fill: none;
	border: 1px solid rgb(224, 224, 224);
	&:hover {
		fill: gray;
		color: gray;
	}
	text-align: left;
	display: table-cell;
	outline: 0;

	${({ active }) =>
		active &&
		css`
			 {
				fill: black;
				background-color: rgba(0, 0, 0, 0.07);
				&:hover {
					fill: black;
					color: black;
				}
			}
		`};
`;
export const StyledThArrow = styled.div`
	text-align: left;
	display: flex;
	flex-direction: row;
	align-content: center;
	justify-content: flex-end;
	align-items: center;
	text-align: right;
	gap: 5px;
`;

export const StyledTable = styled.table`
	border-collapse: collapse;
	border-spacing: 0;
	margin: auto;
	width: auto;
	min-width: 60%;
	max-width: 100%;
	display: table;

	@media ((max-width: ${({ theme }) => theme.breakpoint.lg})) {
		font-size: 14px;
	}

	@media ((max-width: ${({ theme }) => theme.breakpoint.md})) {
		font-size: 12px;
	}

	@media ((max-width: ${({ theme }) => theme.breakpoint.sm})) {
		font-size: 11px;
	}

	/* breakpoint: {
		xs: 0,
		sm: 576
		md: 768
		lg:992
		xl: 1200
		xxl: 1400px
	}, */

	/* @media (min-width: ${({ theme }) => theme.breakpoint.xxl}) {
		font-size: 28px;
	}

	@media ((max-width: ${({ theme }) => theme.breakpoint.xxl})) {
		font-size: 26px;
	}

	@media ((max-width: ${({ theme }) => theme.breakpoint.xl})) {
		font-size: 24px;
	}

	
 */
`;

export const StyledTbody = styled.tbody`
	display: table-row-group;
`;

export const StyledThead = styled.thead`
	display: table-header-group;
	background-color: rgba(0, 0, 0, 0.04);
`;

export const StyledArrow = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
`;

export const StyledTableName = styled.h3`
	margin: auto;
	display: flex;
	width: 100%;
`;

export const StyledResultHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	justify-items: center;
	margin: 20px;
	width: auto;
	max-width: 100%;
	gap: 10px;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr;
`;

export const StyledResultsTitle = styled.div`
	display: flex;
	justify-content: center;
	font-size: 28px;
	text-align: center;
	font-weight: 700;
	text-transform: uppercase;
	width: 100%;
	max-width: 100%;

	@media (min-width: ${({ theme }) => theme.breakpoint.xxl}) {
		font-size: 28px;
	}

	@media ((max-width: ${({ theme }) => theme.breakpoint.xxl})) {
		font-size: 26px;
	}

	@media ((max-width: ${({ theme }) => theme.breakpoint.xl})) {
		font-size: 24px;
	}

	@media ((max-width: ${({ theme }) => theme.breakpoint.lg})) {
		font-size: 22px;
	}

	@media ((max-width: ${({ theme }) => theme.breakpoint.md})) {
		font-size: 20px;
	}

	@media ((max-width: ${({ theme }) => theme.breakpoint.sm})) {
		font-size: 16px;
	}
`;

export const StyledSwitcher = styled.div`
	display: flex;
	justify-content: flex-end;
	min-width: 100%;
	max-width: 20%;
`;

export const StyledResultsBox = styled.div`
	max-width: 100%;
`;
export const StyledResultsPage = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 100%;
	margin: 20px;
`;
