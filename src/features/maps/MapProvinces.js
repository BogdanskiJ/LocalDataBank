import "react-tooltip/dist/react-tooltip.css";
import { Link, useParams } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import {
	Box,
	Container,
	StyledList,
	StyledMapPoland,
	StyledSvg,
	StyledUl,
} from "./styled";
import { useAllProvinces } from "./useAllProvinces";

export const MapProvinces = () => {
	const param = useParams();
	const allProvinces = useAllProvinces();

	return (
		<Container>
			{
				<Link to="/maps/Poland">
					<button>Powrót do mapy Polski</button>
				</Link>
			}
			<Box>
				<StyledMapPoland>
					{allProvinces.map((province) =>
						param.name === province.name ? (
							<>
								<StyledSvg
									version="1"
									preserveAspectRatio={`${province.preserveAspectRatio}`}
									viewBox={`${province.viewBox}`}
									stroke="white"
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
									place="bottom"
								/>
							</>
						) : (
							""
						),
					)}
				</StyledMapPoland>
				<StyledList>
					{allProvinces.map((province) =>
						province.name === param.name ? (
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
