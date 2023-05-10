import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import { Box, Container, Header, StyledMapPoland, StyledSelect, StyledSvg } from "./styled";
import { usePoland } from './province/MapPoland';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectRegionAndProvincesMapsSelectedMap, setSelectedMap } from './mapsSlice';
import { SelectBoxRegionNameDisplay } from '../../common/select';
import { setProvinceName } from '../baseLocalData/teritorialUnitManyVariables/teritorialUnitManyVariablesSlice';

export const MapPoland = () => {
  const dispatch = useDispatch();
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

  const selectedMap = useSelector(selectRegionAndProvincesMapsSelectedMap);

  return (
    < Container >
      <Box >
        <StyledMapPoland>
          <Header>
            Wybierz województwo z poniższej mapy
          </Header>
          <StyledSvg
            version="1"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 500 464.876"
          >
            {poland.map((province) => (
              <StyledSvg
                data-tooltip-id="my-tooltip"
                place="bottom"
                data-tooltip-content={`${province.name}`}
                style={{
                  transition: "all 0.5s ease-in-out",
                  fill: (selectedMap[0] === province.name ? "#8e0b23" : (isHovering === province.name ? "crimson" : "teal")),
                  borderStyle: "none",
                  outline: "none",
                }
                }
                onMouseOver={() => handleMouseOver(province)}
                onMouseDown={() => handleMouseDown(province)}
                onMouseOut={() => handleMouseOut()}
                key={province.id}
              >
                {province.data}
              </StyledSvg>
            ))}
          </StyledSvg>
          <Tooltip id="my-tooltip" style={{ backgroundColor: "black", color: "white", padding: "5px 10px" }} place="bottom" />
        </StyledMapPoland >

        <StyledSelect>
          <SelectBoxRegionNameDisplay
            poland={poland}
            handleMouseOut={handleMouseOut}
            handleMouseOver={handleMouseOver}
            isHovering={isHovering}
            setProvinceName={setProvinceName}
          ></SelectBoxRegionNameDisplay>
        </StyledSelect>




        {/* <StyledList >
          <StyledUl >
            Przejdz do danego województwa:
            {poland.map(province =>
              <Link
                to={`/maps/provinces/${province.name}`}
                data-tooltip-content={`${province.name}`}
                style={{ textDecoration: "none" }}
                key={province.id}
              >
                <StyledLi
                  onMouseOver={() => handleMouseOver(province)}
                  onMouseOut={() => handleMouseOut()}
                  style={{ fontWeight: (isHovering === province.name ? "700" : ""), }}
                >
                  {province.name}
                </StyledLi>
              </Link>)}
          </StyledUl>
        </StyledList> */}
      </Box>
    </Container >
  );
};