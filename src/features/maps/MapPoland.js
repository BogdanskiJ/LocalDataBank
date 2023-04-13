import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import { Box, Container, Header, StyledLi, StyledList, StyledMapPoland, StyledSvg, StyledUl } from "./styled";
import { Link } from 'react-router-dom';
import { usePoland } from './province/MapPoland';
import { useState } from 'react';
import { DisplayResults } from '../displayResults';
import { useProvincesId } from './getData';
import { nanoid } from '@reduxjs/toolkit';

export const MapPoland = () => {
  const poland = usePoland();
  const [isHovering, setIsHovering] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isChosen, setIsChosen] = useState("");

  const handleMouseOver = (province) => {
    setIsHovering(province.name);
    setIsClicked(false);
  };

  const handleMouseDown = (province) => {
    setIsClicked(province.name);
    setIsChosen([province.name, province.id])
  };

  const handleMouseOut = () => {
    setIsHovering();
  };

  return (
    <Container>
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
              // <Link
              //   to={`/maps/provinces/${province.name}`}
              //   
              //   key={province.name}
              // >
              <StyledSvg
                data-tooltip-id="my-tooltip"
                place="bottom"
                data-tooltip-content={`${province.name}`}
                style={{
                  transition: "all 0.5s ease-in-out",
                  fill: (isHovering === province.name ? (isClicked === province.name ? "#8e0b23" : "crimson") : "teal"),
                  borderStyle: "none",
                  outline: "none",
                  // position: "absolute",
                  // zIndex: (isHovering === region.name ? 6 : 1),
                }
                }
                onMouseOver={() => handleMouseOver(province)}
                onMouseDown={() => handleMouseDown(province)}
                onMouseOut={() => handleMouseOut()}
                //key={nanoid()}
                key={province.id}
              >
                {province.data}
              </StyledSvg>
              // </Link>
            ))}
          </StyledSvg>
          <Tooltip id="my-tooltip" style={{ backgroundColor: "black", color: "white", padding: "5px 10px" }} place="bottom" />
        </StyledMapPoland >
        <StyledList >
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
                  onMouseDown={() => handleMouseDown(province)}
                  onMouseOut={() => handleMouseOut()}
                  style={{ fontWeight: (isHovering === province.name ? "700" : ""), }}
                >
                  {province.name}
                </StyledLi>
              </Link>)}
          </StyledUl>
        </StyledList>
      </Box>
      <DisplayResults
        chosenRegion={isChosen}
      />
    </Container >

  );
};