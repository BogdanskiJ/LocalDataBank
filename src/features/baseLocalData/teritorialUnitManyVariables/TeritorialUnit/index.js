import React from "react";
import { useSelector } from "react-redux";
import {
	selectTeritorialUnitCategoryData,
	selectTeritorialUnitCategoryName,
	selectTeritorialUnitGroupData,
	selectTeritorialUnitGroupName,
	selectTeritorialUnitSubGroupData,
	selectTeritorialUnitSubGroupName,
	selectTeritorialUnitVariablesData,
	selectTeritorialUnitVariablesName,
	setTeritorialUnitCategoryName,
	setTeritorialUnitGroupName,
	setTeritorialUnitSubGroupName,
	setTeritorialUnitVariablesNames,
} from "../teritorialUnitManyVariablesSlice";
import {
	SelectBoxTeritorialUnitManyVariables,
	SelectBoxTeritorialUnitOneVariable,
} from "../../../../common/Select/select";
import { LoadingPage } from "../../../../common/LoadingPage";
import {
	StyledBox,
	StyledCheck as StyledCheckBox,
	StyledLabel,
	StyledLabelBox,
	StyledLabelText,
	StyledMultiSelectBox,
	StyledMultiSelectLabelBox,
	StyledSelectBox,
	StyledTeritorialUnit,
} from "./styled";
import { ReactComponent as Check } from "../../../../common/images/check.svg";
import { ReactComponent as NoCheck } from "../../../../common/images/noCheck.svg";
import { AutoScrollSwitcher } from "../displayingResults/Switchers/AutoScrollSwitcher";

export const TeritorialUnit = () => {
	const teritorialUnit = useSelector(selectTeritorialUnitCategoryData);
	const teritorialUnitGroup = useSelector(selectTeritorialUnitGroupData);
	const teritorialUnitSubGroup = useSelector(selectTeritorialUnitSubGroupData);
	const teritorialUnitVariables = useSelector(
		selectTeritorialUnitVariablesData,
	);

	const teritorialUnitCategoryName = useSelector(
		selectTeritorialUnitCategoryName,
	);
	const teritorialUnitGroupName = useSelector(selectTeritorialUnitGroupName);
	const teritorialUnitSubGroupName = useSelector(
		selectTeritorialUnitSubGroupName,
	);
	const teritorialUnitVariablesName = useSelector(
		selectTeritorialUnitVariablesName,
	);

	return (
		<StyledTeritorialUnit>
			{teritorialUnit ? (
				<div>
					<StyledLabelBox>
						<StyledLabel>Wybierz kategorię: </StyledLabel>
						<StyledSelectBox>
							<SelectBoxTeritorialUnitOneVariable
								teritorialUnitType={teritorialUnit}
								setValue={setTeritorialUnitCategoryName}
							/>
							<StyledCheckBox>
								{teritorialUnitCategoryName ? <Check /> : <NoCheck />}
							</StyledCheckBox>
						</StyledSelectBox>
					</StyledLabelBox>
				</div>
			) : (
				<LoadingPage title={"Pobieram listę kategorii"} />
			)}
			{teritorialUnitCategoryName !== "" ? (
				<div>
					{teritorialUnitGroup ? (
						<div>
							<StyledLabelBox>
								<StyledLabel>Wybierz grupę: </StyledLabel>
								<StyledSelectBox>
									<SelectBoxTeritorialUnitOneVariable
										teritorialUnitType={teritorialUnitGroup}
										setValue={setTeritorialUnitGroupName}
									/>
									<StyledCheckBox>
										{teritorialUnitGroupName ? <Check /> : <NoCheck />}
									</StyledCheckBox>
								</StyledSelectBox>
							</StyledLabelBox>
						</div>
					) : (
						<LoadingPage title={"Pobieram listę grup"} />
					)}
				</div>
			) : (
				""
			)}

			{teritorialUnitGroupName !== "" ? (
				<div>
					{teritorialUnitSubGroup ? (
						<div>
							<StyledLabelBox>
								<StyledLabel>Wybierz podgrupę: </StyledLabel>
								<StyledSelectBox>
									<SelectBoxTeritorialUnitOneVariable
										teritorialUnitType={teritorialUnitSubGroup}
										setValue={setTeritorialUnitSubGroupName}
									/>
									<StyledCheckBox>
										{teritorialUnitSubGroupName ? <Check /> : <NoCheck />}
									</StyledCheckBox>
								</StyledSelectBox>
							</StyledLabelBox>
						</div>
					) : (
						<LoadingPage title={"Pobieram listę podgrup"} />
					)}
				</div>
			) : (
				""
			)}

			<StyledBox>
				{teritorialUnitSubGroupName !== "" ? (
					<div>
						{teritorialUnitVariables ? (
							<div>
								<StyledMultiSelectLabelBox>
									<StyledLabel>
										Wybierz zmienne: <StyledLabelText>max 10</StyledLabelText>
									</StyledLabel>
									<StyledMultiSelectBox>
										<SelectBoxTeritorialUnitManyVariables
											teritorialUnitType={teritorialUnitVariables}
											setValue={setTeritorialUnitVariablesNames}
										/>

										<StyledCheckBox>
											{teritorialUnitVariablesName ? <Check /> : <NoCheck />}
										</StyledCheckBox>
									</StyledMultiSelectBox>
									<AutoScrollSwitcher />
								</StyledMultiSelectLabelBox>
							</div>
						) : (
							<LoadingPage title={"Pobieram listę zmiennych"} />
						)}
					</div>
				) : (
					""
				)}
			</StyledBox>
		</StyledTeritorialUnit>
	);
};
