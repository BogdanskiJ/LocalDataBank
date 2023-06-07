import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	selectTeritorialUnitDisplayResultsSwitcher,
	setTeritorialUnitDisplayResultsSwitcher,
} from "../../../teritorialUnitManyVariablesSlice";

import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

export const DisplayResultsSwitcher = () => {
	const dispatch = useDispatch();
	const teritorialUnitToogleButton = useSelector(
		selectTeritorialUnitDisplayResultsSwitcher,
	);

	return (
		<FormControl component="fieldset" variant="standard">
			<FormLabel component="legend">Wyświetl dane w postaci:</FormLabel>
			<FormGroup>
				<FormControlLabel
					control={
						<Switch
							checked={teritorialUnitToogleButton}
							onChange={() =>
								dispatch(setTeritorialUnitDisplayResultsSwitcher())
							}
						/>
					}
					label="Wykres"
				/>
				<FormControlLabel
					control={
						<Switch
							checked={!teritorialUnitToogleButton}
							onChange={() =>
								dispatch(setTeritorialUnitDisplayResultsSwitcher())
							}
						/>
					}
					label="Tabela"
				/>
			</FormGroup>
		</FormControl>
	);
};
