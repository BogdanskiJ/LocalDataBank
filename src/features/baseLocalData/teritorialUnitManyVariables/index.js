import React from "react";
import { TeritorialUnit } from "./TeritorialUnit";
import { MapPoland } from "../../maps/MapPoland";
import { StyledHead, StyledPageBody, StyledResults } from "./styled";
import { useSelector } from "react-redux";
import {
	selectTeritorialUnitFinalData,
	selectTeritorialUnitStatus,
	selectTeritorialUnitVariablesName,
} from "./teritorialUnitManyVariablesSlice";
import { Results } from "./displayingResults";
import { NoDataPage } from "../../../common/NoDataPage";
import { ErrorPage } from "../../../common/ErrorPage";
import { useRef } from "react";
import { useEffect } from "react";

export const TeritorialUnitManyVariables = () => {
	const teritorialUnitFinalData = useSelector(selectTeritorialUnitFinalData);
	const teritorialUnitVariablesName = useSelector(
		selectTeritorialUnitVariablesName,
	);
	const status = useSelector(selectTeritorialUnitStatus);

	// const resultsRef = useRef(null);

	// const scrollToResults = () => {
	// 	resultsRef.current.scrollIntoView({
	// 		behavior: "smooth",
	// 		block: "start",
	// 	});
	// };

	// useEffect(() => {
	// 	scrollToResults();
	// }, [teritorialUnitFinalData]);

	return (
		<StyledPageBody>
			{/* <ErrorPage /> */}

			<StyledHead>Dane dla wybranej jednostki terytorialnej</StyledHead>
			<StyledResults>
				<TeritorialUnit />
				<MapPoland />
			</StyledResults>

			{teritorialUnitVariablesName !== "" ? (
				<div>
					{teritorialUnitFinalData !== "" ? (
						<>
							<div>
								{teritorialUnitFinalData.totalRecords === 0 ? (
									<NoDataPage />
								) : (
									<>
										<Results />
									</>
								)}
							</div>
						</>
					) : (
						""
					)}
				</div>
			) : (
				""
			)}
			{/* <div
			// ref={resultsRef}
			>
				cośtam tasdasdasdasd
			</div> */}
		</StyledPageBody>
	);
};
