import React from "react";
import { useState } from "react";
import {
	selectTeritorialUnitAutoScrollSwitcher,
	selectTeritorialUnitDisplayResultsSwitcher,
	selectTeritorialUnitFinalData,
	selectTeritorialUnitFinalValues,
	selectTeritorialUnitSubGroupData,
	selectTeritorialUnitSubGroupName,
} from "../teritorialUnitManyVariablesSlice";
import { useSelector } from "react-redux";
import { measures } from "../../../../common/measures";
import { Table } from "./Table";
import { LineGraph } from "./LineGraph/index";
import { useEffect } from "react";
import {
	StyledResultHeader,
	StyledSwitcher,
	StyledResultsTitle,
	StyledResultsBox,
	StyledResultsPage,
} from "./styled";
import { DisplayResultsSwitcher } from "./Switchers/DisplayResultsSwitcher";
import { useRef } from "react";

export const Results = () => {
	const teritorialUnitFinalData = useSelector(selectTeritorialUnitFinalData);
	const teritorialUnitFinalValues = useSelector(
		selectTeritorialUnitFinalValues,
	);
	const teritorialUnitSubGroupName = useSelector(
		selectTeritorialUnitSubGroupName,
	);
	const teritorialUnitSubGroupData = useSelector(
		selectTeritorialUnitSubGroupData,
	);
	const teritorialUnitDisplayResultsSwitcher = useSelector(
		selectTeritorialUnitDisplayResultsSwitcher,
	);
	const teritorialUnitAutoScrollSwitcher = useSelector(
		selectTeritorialUnitAutoScrollSwitcher,
	);
	const [data, setData] = useState(teritorialUnitFinalData);
	const [newArray, setNewArray] = useState([]);
	const [newArray2, setNewArray2] = useState([]);
	const [data1, setData1] = useState(teritorialUnitFinalValues);

	useEffect(() => {
		setData(teritorialUnitFinalData);
	}, [teritorialUnitFinalData]);

	const addNewYearToArray = () => {
		let namesArray = [];
		data.results.map((result) => (namesArray = [...namesArray, result.id]));
		let temporaryArray = [];
		data1.map((values) =>
			values.map((value) => (temporaryArray = [...temporaryArray, value.year])),
		);
		const uniqueArray = [...new Set(temporaryArray)];
		const finalArray = uniqueArray.map((element) => ({ year: element }));
		setNewArray2(finalArray);
	};

	const addValuesToArray = () => {
		let valuesArray = [...newArray2];
		let valuesArray2 = [...newArray2];
		let index = "";

		data.results.map((results) =>
			results.values.map(
				(values) => (
					(index = valuesArray.findIndex(
						(element) => element.year === values.year,
					)),
					valuesArray2[index]
						? (valuesArray2[index] = {
								...valuesArray2[index],
								[results.id]: values.val,
						  })
						: ""
				),
			),
		);
		setNewArray(valuesArray2);
	};

	useEffect(() => {
		addNewYearToArray();
	}, [teritorialUnitFinalValues]);

	useEffect(() => {
		addValuesToArray();
	}, [newArray2, teritorialUnitFinalData, teritorialUnitFinalValues]);

	const measure = `[${
		measures.results.find(
			(measure) =>
				measure.id === teritorialUnitFinalData.results[0].measureUnitId,
		).name
	}]`;
	const resultsRef = useRef(null);

	const scrollToResults = () => {
		resultsRef.current.scrollIntoView({
			behavior: "smooth",
			block: "start",
			inline: "center",
		});
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			teritorialUnitAutoScrollSwitcher ? scrollToResults() : console.log();
		}, 200);
		return () => clearTimeout(timer);
	}, [newArray, newArray2]);

	return (
		<StyledResultsPage>
			<StyledSwitcher>
				<DisplayResultsSwitcher />
			</StyledSwitcher>
			<StyledResultHeader ref={resultsRef}>
				<StyledResultsTitle>
					{
						teritorialUnitSubGroupData.results.find(
							(element) => element.id === teritorialUnitSubGroupName,
						).name
					}
				</StyledResultsTitle>
			</StyledResultHeader>
			<StyledResultsBox>
				{teritorialUnitDisplayResultsSwitcher ? (
					<LineGraph measure={measure} newArray={newArray} />
				) : (
					<Table measure={measure} newArray2={newArray} />
				)}
			</StyledResultsBox>
		</StyledResultsPage>
	);
};
