import "react-tooltip/dist/react-tooltip.css";
import { Link, useParams } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import {
	Box,
	Container,
	StyledHeaderText,
	StyledLi,
	StyledList,
	StyledList2,
	StyledMapPoland,
	StyledProvinceButtonBox,
	StyledSvg,
	StyledUl,
} from "./styled";
import { useAllProvinces } from "./useAllProvinces";
import { useDispatch, useSelector } from "react-redux";
import {
	selectProvinceName,
	setProvinceName,
} from "../baseLocalData/teritorialUnitManyVariables/teritorialUnitManyVariablesSlice";
import Button from "@mui/material/Button";
import { useWindowSize } from "../../common/WindowSize";
import Select from "react-select";
import { usePoland } from "./province/MapPoland";

export const MapProvinces = () => {
	const dispatch = useDispatch();
	const param = useParams();
	const allProvinces = useAllProvinces();
	const provinceName = useSelector(selectProvinceName);
	const [widthSize] = useWindowSize();
	const poland = usePoland();
	const provinceNameList = (province) => {
		const data = province.mapProvincesName.map((region) => region.key);
		const sortedlist = [...data]
			.sort()
			.map((name) => <StyledLi>{name}</StyledLi>);

		return sortedlist;
	};

	// <StyledList>
	// 	{allProvinces.map((province) =>
	// 		province.name === provinceName ? (
	// 			<StyledUl key={province.id}>{province.mapProvincesName}</StyledUl>
	// 		) : (
	// 			""
	// 		),
	// 	)}
	// </StyledList>;

	console.log("provinceName", provinceName);
	return (
		<Container>
			<StyledProvinceButtonBox>
				<StyledHeaderText>
					WYBIERZ JEDNOSTKĘ TERYTORIALNĄ - POWIATY
				</StyledHeaderText>
				<Button
					variant="contained"
					size="small"
					onClick={() => dispatch(setProvinceName(""))}>
					Mapa Polski
				</Button>
			</StyledProvinceButtonBox>
			<Box>
				<StyledMapPoland>
					{allProvinces.map((province) =>
						provinceName === province.name ? (
							<>
								<StyledSvg
									version="1"
									preserveAspectRatio={`${province.preserveAspectRatio}`}
									viewBox={`${province.viewBox}`}
									stroke="white"
									width="100%"
									height="100%"
									key={province.id}>
									{province.mapLink}
								</StyledSvg>
								<Tooltip
									id="my-tooltip"
									style={{
										backgroundColor: "black",
										color: "white",
										padding: "5px 10px",
									}}
								/>
							</>
						) : (
							""
						),
					)}
				</StyledMapPoland>
				<StyledList>
					{allProvinces.map((province) =>
						province.name === provinceName ? (
							<StyledUl key={province.id}>{province.mapProvincesName}</StyledUl>
						) : (
							""
						),
					)}
				</StyledList>
			</Box>
		</Container>
	);
};
/* <SelectBoxRegionNameDisplay
						poland={poland}
						handleMouseOut={handleMouseOut}
						handleMouseOver={handleMouseOver}
						isHovering={isHovering}
						setProvinceName={setProvinceName}></SelectBoxRegionNameDisplay> */

// 			<Select
// className="basic-single"
// classNamePrefix="select"
// defaultValue={{
// 	value: "",
// 	label: "Wybierz województwo",
// }}
// isClearable={false}
// isSearchable={true}
// options={poland.map((province) => ({
// 	value: province.id,
// 	label: province.name,
// }))}
// onChange={(target) => dispatch(setProvinceName(target.label))}></Select>

// <StyledList>
// 					{allProvinces.map((province) =>
// 						province.name === provinceName ? (
// 							<StyledUl key={province.id}>{province.mapProvincesName}</StyledUl>
// 						) : (
// 							""
// 						),
// 					)}
// 				</StyledList>

// <Select
// 						className="basic-single"
// 						classNamePrefix="select"
// 						defaultValue={{
// 							value: "",
// 							label: "Wybierz powiat",
// 						}}
// 						isClearable={false}
// 						isSearchable={true}
// 						autoFocus={false}
// 						// options={allProvinces
// 						// 	.find((element) => element.name === provinceName)
// 						// 	.map((region) => region.regionNameList.map(reg => ({
// 						// 		value:reg.id,
// 						// 	})))}
// 						onChange={(target) => console.log(target)}></Select>
