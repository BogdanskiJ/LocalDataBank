import { ReactComponent as ArrowUp } from "../../../../../../common/images/arrowUp.svg";
import { ReactComponent as ArrowDown } from "../../../../../../common/images/arrowDown.svg";

export const Arrow = ({ order, sort }) =>
	order[0] === sort ? (
		order[1] === "ASC" ? (
			<ArrowUp />
		) : (
			<ArrowDown />
		)
	) : order[1] === "DSC" ? (
		<ArrowUp />
	) : (
		<ArrowDown />
	);
