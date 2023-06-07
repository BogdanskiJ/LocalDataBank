import React from "react";
import { useDispatch } from "react-redux";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { setTeritorialUnitAutoScrollSwitcher } from "../../../teritorialUnitManyVariablesSlice";

export const AutoScrollSwitcher = () => {
	const dispatch = useDispatch();

	return (
		<Stack
			direction="row"
			spacing={1}
			alignItems="center"
			justifyContent="end"
			marginTop="10px">
			<span>AutoScroll</span>
			<Typography>Off</Typography>
			<Switch
				defaultChecked
				onChange={() => dispatch(setTeritorialUnitAutoScrollSwitcher())}
			/>
			<Typography>On</Typography>
		</Stack>
	);
};
