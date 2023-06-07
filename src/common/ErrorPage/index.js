import { ReactComponent as ErrorIcon } from "./errorIcon.svg";
import { Container, Error, Info } from "./styled";

export const ErrorPage = () => (
	<>
		<Container icon>
			<ErrorIcon />
		</Container>
		<Error>Ooops! Something went wrong...</Error>
		<Info>
			Please check your network connection <br /> and try again
		</Info>
	</>
);
