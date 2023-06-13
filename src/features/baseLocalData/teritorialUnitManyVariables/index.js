import React from "react";
import { TeritorialUnit } from "./TeritorialUnit";
import { MapPoland } from "../../maps/MapPoland";
import { StyledHead, StyledPageBody, StyledResults } from "./styled";
import { useSelector } from "react-redux";
import {
	selectProvinceName,
	selectTeritorialUnitFinalData,
	selectTeritorialUnitStatus,
	selectTeritorialUnitVariablesName,
} from "./teritorialUnitManyVariablesSlice";
import { Results } from "./displayingResults";
import { NoDataPage } from "../../../common/NoDataPage";
import { ErrorPage } from "../../../common/ErrorPage";
import { useRef } from "react";
import { useEffect } from "react";
import { MapProvinces } from "../../maps/MapProvinces";

export const TeritorialUnitManyVariables = () => {
	const teritorialUnitFinalData = useSelector(selectTeritorialUnitFinalData);
	const teritorialUnitVariablesName = useSelector(
		selectTeritorialUnitVariablesName,
	);
	const provinceName = useSelector(selectProvinceName);
	console.log("provinceName", provinceName);
	const status = useSelector(selectTeritorialUnitStatus);

	console.log("status w slice", status);
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
			{status === "error" ? (
				<ErrorPage />
			) : (
				<>
					<StyledHead>Dane dla wybranej jednostki terytorialnej</StyledHead>
					<StyledResults>
						<TeritorialUnit />
						{provinceName === "" ? <MapPoland /> : <MapProvinces />}
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
				</>
			)}
		</StyledPageBody>
	);
};
