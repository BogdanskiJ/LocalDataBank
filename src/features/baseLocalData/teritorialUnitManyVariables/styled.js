import styled from "styled-components";

export const StyledPageBody = styled.div`
	max-width: 1920px;
	margin: auto;
`;

export const StyledResults = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	align-items: stretch;
	gap: 10px;
	margin: 20px;

	@media ((max-width: ${({ theme }) => theme.breakpoint.md})) {
		flex-direction: column;
		margin: 20px;
	}
`;

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
