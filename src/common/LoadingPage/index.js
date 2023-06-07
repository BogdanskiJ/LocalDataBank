import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { StyledHeader, Wrapper } from "./styled";

export const LoadingPage = ({ title }) => (
	<Wrapper>
		<StyledHeader>{title}</StyledHeader>
		<Box sx={{ display: "flex", justifyContent: "center" }}>
			<CircularProgress size={40} thickness={5} />
		</Box>
	</Wrapper>
);
