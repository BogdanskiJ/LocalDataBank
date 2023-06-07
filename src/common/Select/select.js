import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Select from "react-select";
import { selectProvinceName } from "../../features/baseLocalData/teritorialUnitManyVariables/teritorialUnitManyVariablesSlice";
import { useEffect } from "react";
import { StyledMultiSelect, StyledSelect } from "./styled";
import { useRef } from "react";

export const SelectBoxTeritorialUnitOneVariable = ({
	teritorialUnitType,
	setValue,
}) => {
	const dispatch = useDispatch();
	const style = {
		control: (styles) => ({
			...styles,
			display: "flex",
			width: "100%",
			margin: "0 10px",
			cursor: "pointer",
			margin: "auto",
			flexDirection: "row",
		}),
		dropdownIndicator: (styles) => ({
			...styles,
			width: "100%",
			color: "green",
			justifyContent: "center",
			"&:hover": {
				...styles[`:hover`],
				backgroundColor: "hsl(120 100% 85% / 1)",
				color: "green",
			},
		}),
	};

	return (
		<StyledSelect>
			<Select
				className="basic-single"
				classNamePrefix="select"
				defaultValue={{
					value: "",
					label: "wybierz",
				}}
				isClearable={false}
				isSearchable={true}
				autoFocus={true}
				styles={style}
				options={teritorialUnitType.results.map((unit) => ({
					value: unit.id,
					label: unit.n3
						? unit.n1 + " " + unit.n2 + " " + unit.n3
						: unit.n2
						? unit.n1 + " " + unit.n2
						: unit.n1
						? unit.n1
						: unit.name,
				}))}
				onChange={(target) => dispatch(setValue(target.value))}></Select>
		</StyledSelect>
	);
};

export const SelectBoxTeritorialUnitManyVariables = ({
	teritorialUnitType,
	setValue,
}) => {
	const dispatch = useDispatch();

	const style = {
		control: (styles) => ({
			...styles,
			display: "flex",
			width: "100%",
			cursor: "pointer",
			flexDirection: "row",
			"@media (max-width: 576px)": {
				...styles[`@media ((max-width:${({ theme }) => theme.breakpoint.md}))`],
				flexDirection: "column",
			},
		}),
		multiValue: (styles) => ({
			//kontener z tekstem i znakiem usunięcia X
			...styles,
			display: "flex",
			flexDirection: "row",
			width: "auto",
			textAlign: "center",
			maxWidth: "100%",
			//maxWidth: 'calc(60%)',
		}),
		multiValueLabel: (styles) => ({
			//tekst
			...styles,
			display: "flex",
			flexDirection: "row",
			width: "100%",
			whiteSpace: "wrap",
		}),
		valueContainer: (styles) => ({
			//blok z szarym tłem pod tekstem
			...styles,
			display: "flex",
			flexDirection: "row",
			width: "auto",
			maxWidth: "100%",
		}),
		indicatorsContainer: (styles) => ({
			...styles,
			display: "flex",
			flexDirection: "row",
			width: "100%",
		}),
		clearIndicator: (styles) => ({
			...styles,
			width: "100%",
			color: "red",
			justifyContent: "center",
			backgroundColor: "hsl(359deg 100% 94%)",
			borderRadius: "5px",
			border: "1px hsl(359deg 100% 94%) solid",
			"&:hover": {
				...styles[`:hover`],
				backgroundColor: "hsl(359deg 100% 84%)",
				color: "red",
			},
		}),
		dropdownIndicator: (styles) => ({
			...styles,
			width: "100%",
			color: "green",
			justifyContent: "center",
			backgroundColor: "hsl(120 100% 95% / 1)",
			borderRadius: "5px",
			border: "1px hsl(120 100% 95% / 1) solid",
			"&:hover": {
				...styles[`:hover`],
				backgroundColor: "hsl(120 100% 85% / 1)",
				color: "green",
				border: "1px hsl(120 100% 95% / 1) solid",
			},
		}),
	};
	return (
		<StyledMultiSelect>
			<Select
				className="basic-multi-select"
				classNamePrefix="select"
				defaultValue={null}
				isMulti
				isClearable={true}
				isSearchable={true}
				autoFocus={true}
				styles={style}
				options={teritorialUnitType.results.map((unit) => ({
					value: unit.id,
					label: unit.n3
						? unit.n1 + " " + unit.n2 + " " + unit.n3
						: unit.n2
						? unit.n1 + " " + unit.n2
						: unit.n1
						? unit.n1
						: unit.name,
				}))}
				onChange={(target) => dispatch(setValue(target))}></Select>
		</StyledMultiSelect>
	);
};

export const SelectBoxRegionNameDisplay = ({
	poland,
	handleMouseOver,
	handleMouseOut,
	isHovering,
}) => {
	return (
		<Select
			className="basic-single"
			classNamePrefix="select"
			defaultValue={{
				value: "",
				label: "Wybierz województwo",
			}}
			isClearable={false}
			isSearchable={true}
			options={poland.map((province) => ({
				value: province.id,
				label: (
					<Link
						to={`/maps/provinces/${province.name}`}
						data-tooltip-content={`${province.name}`}
						style={{
							display: "flex",
							justifyContent: "center",
							textDecoration: "none",
							color: "black",
							fontWeight: isHovering === province.name ? "700" : "",
						}}
						onMouseOver={() => handleMouseOver(province)}
						onMouseOut={() => handleMouseOut()}>
						{province.name}
					</Link>
				),
			}))}></Select>
	);
};
