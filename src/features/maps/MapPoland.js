import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import {
	Box,
	Container,
	Header,
	StyledBoxPoland,
	StyledCheck,
	StyledMapPoland,
	StyledRegionNameLabel,
	StyledSelect,
	StyledSvg,
	StyledUnitBox,
} from "./styled";
import { usePoland } from "./province/MapPoland";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	selectRegionAndProvincesMapsSelectedMap,
	setSelectedMap,
} from "./mapsSlice";
import { SelectBoxRegionNameDisplay } from "../../common/Select/select";
import { setProvinceName } from "../baseLocalData/teritorialUnitManyVariables/teritorialUnitManyVariablesSlice";
import { ReactComponent as Check } from "../../common/images/check.svg";
import { ReactComponent as NoCheck } from "../../common/images/noCheck.svg";

export const MapPoland = () => {
	const dispatch = useDispatch();
	const selectedMap = useSelector(selectRegionAndProvincesMapsSelectedMap);
	const poland = usePoland();

	const [isHovering, setIsHovering] = useState(false);

	const handleMouseOver = (province) => {
		setIsHovering(province.name);
	};

	const handleMouseDown = (province) => {
		dispatch(setSelectedMap([province.name, province.id]));
	};

	const handleMouseOut = () => {
		setIsHovering();
	};

	return (
		<Container>
			<StyledBoxPoland>
				<StyledMapPoland>
					<Header>Wybierz jednostkę terytorialną - WOJEWÓDZTWA</Header>
					<StyledUnitBox>
						<StyledSvg
							version="1"
							preserveAspectRatio="xMidYMid meet"
							viewBox="0 0 500 464.876"
							scale={1.2}>
							{poland.map((province) => (
								<StyledSvg
									data-tooltip-id="my-tooltip"
									place="bottom"
									data-tooltip-content={`${province.name}`}
									style={{
										transition: "all 0.5s ease-in-out",
										fill:
											selectedMap[0] === province.name
												? "#8e0b23"
												: isHovering === province.name
												? "crimson"
												: "teal",
										borderStyle: "none",
										outline: "none",
									}}
									onMouseOver={() => handleMouseOver(province)}
									onClick={() => handleMouseDown(province)}
									onMouseOut={() => handleMouseOut()}
									key={province.id}>
									{province.data}
								</StyledSvg>
							))}
						</StyledSvg>
						<StyledCheck> {selectedMap ? <Check /> : <NoCheck />}</StyledCheck>
					</StyledUnitBox>
					<Tooltip
						id="my-tooltip"
						style={{
							backgroundColor: "black",
							color: "white",
							padding: "5px 10px",
						}}
						// place="bottom"
					/>
				</StyledMapPoland>

				<StyledSelect>
					<StyledRegionNameLabel>
						Wybierz jednostkę terytorialną - POWIATY
					</StyledRegionNameLabel>
					<SelectBoxRegionNameDisplay
						poland={poland}
						handleMouseOut={handleMouseOut}
						handleMouseOver={handleMouseOver}
						isHovering={isHovering}
						setProvinceName={setProvinceName}></SelectBoxRegionNameDisplay>
				</StyledSelect>
			</StyledBoxPoland>
		</Container>
	);
};
