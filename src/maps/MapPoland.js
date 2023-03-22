import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import { Box, Container, StyledList, StyledMap, StyledMapPoland, StyledSvg } from "./styled";
import { Link } from 'react-router-dom';
import { useAllProvinces } from './province/MapAllProvinces';

export const MapPoland = () => {
  const poland = useAllProvinces();

  return (
    <Container>
      <Box>
        <StyledMapPoland>
          <StyledSvg version="1" preserveAspectRatio="xMidYMid meet" viewBox="0 0 500 464.876">
            {poland.map((province) => (
              <g key={province.name}>
                <Link to={`/maps/provinces/${province.name}`} data-tooltip-id="my-tooltip" place="bottom" data-tooltip-content={`${province.name}`}
                >
                  {province.data}
                </Link>
              </g>
            ))}
          </StyledSvg>
          <Tooltip id="my-tooltip" style={{ backgroundColor: "black", color: "white", padding: "5px 10px" }} place="bottom" />
        </StyledMapPoland >
        <StyledList>
          <ul>
            <li>Zachodniopomorskie</li>
            <li>Pomorskie</li>
            <li>Warmińsko-Mazurskie</li>
            <li>Podlaskie</li>
            <li>Mazowieckie</li>
            <li>Kujawsko-Pomorskie</li>
            <li>Wielkopolskie</li>
            <li>Lubuskie</li>
            <li>Łódzkie</li>
            <li>Lubelskie</li>
            <li>Świętokrzyskie</li>
            <li>Podkarpackie</li>
            <li>Małopolskie</li>
            <li>Śląskie</li>
            <li>Opolskie</li>
            <li>Dolnośląskie</li>
          </ul>
        </StyledList>
      </Box>
      <StyledList>
        <ul>
          <li>coś tam</li>
          <li>coś tam</li>
          <li>coś tam</li>
          <li>coś tam</li>
          <li>coś tam</li>

          <li>coś tam</li>
          <li>coś tam</li>
        </ul>
      </StyledList><StyledList>
        <ul>
          <li>coś tam</li>
          <li>coś tam</li>
          <li>coś tam</li>
          <li>coś tam</li>
          <li>coś tam</li>

          <li>coś tam</li>
          <li>coś tam</li>
        </ul>
      </StyledList><StyledList>
        <ul>
          <li>coś tam</li>
          <li>coś tam</li>
          <li>coś tam</li>
          <li>coś tam</li>
          <li>coś tam</li>

          <li>coś tam</li>
          <li>coś tam</li>
        </ul>
      </StyledList><StyledList>
        <ul>
          <li>coś tam</li>
          <li>coś tam</li>
          <li>coś tam</li>
          <li>coś tam</li>
          <li>coś tam</li>

          <li>coś tam</li>
          <li>coś tam</li>
        </ul>
      </StyledList><StyledList>
        <ul>
          <li>coś tam</li>
          <li>coś tam</li>
          <li>coś tam</li>
          <li>coś tam</li>
          <li>coś tam</li>

          <li>coś tam</li>
          <li>coś tam</li>
        </ul>
      </StyledList><StyledList>
        <ul>
          <li>coś tam</li>
          <li>coś tam</li>
          <li>coś tam</li>
          <li>coś tam</li>
          <li>coś tam</li>

          <li>coś tam</li>
          <li>coś tam</li>
        </ul>
      </StyledList><StyledList>
        <ul>
          <li>coś tam</li>
          <li>coś tam</li>
          <li>coś tam</li>
          <li>coś tam</li>
          <li>coś tam</li>

          <li>coś tam</li>
          <li>coś tam</li>
        </ul>
      </StyledList><StyledList>
        <ul>
          <li>coś tam</li>
          <li>coś tam</li>
          <li>coś tam</li>
          <li>coś tam</li>
          <li>coś tam</li>

          <li>coś tam</li>
          <li>coś tam</li>
        </ul>
      </StyledList><StyledList>
        <ul>
          <li>coś tam</li>
          <li>coś tam</li>
          <li>coś tam</li>
          <li>coś tam</li>
          <li>coś tam</li>

          <li>coś tam</li>
          <li>coś tam</li>
        </ul>
      </StyledList><StyledList>
        <ul>
          <li>coś tam</li>
          <li>coś tam</li>
          <li>coś tam</li>
          <li>coś tam</li>
          <li>coś tam</li>

          <li>coś tam</li>
          <li>coś tam</li>
        </ul>
      </StyledList><StyledList>
        <ul>
          <li>coś tam</li>
          <li>coś tam</li>
          <li>coś tam</li>
          <li>coś tam</li>
          <li>coś tam</li>

          <li>coś tam</li>
          <li>coś tam</li>
        </ul>
      </StyledList><StyledList>
        <ul>
          <li>coś tam</li>
          <li>coś tam</li>
          <li>coś tam</li>
          <li>coś tam</li>
          <li>coś tam</li>

          <li>coś tam</li>
          <li>coś tam</li>
        </ul>
      </StyledList><StyledList>
        <ul>
          <li>coś tam</li>
          <li>coś tam</li>
          <li>coś tam</li>
          <li>coś tam</li>
          <li>coś tam</li>

          <li>coś tam</li>
          <li>coś tam</li>
        </ul>
      </StyledList><StyledList>
        <ul>
          <li>coś tam</li>
          <li>coś tam</li>
          <li>coś tam</li>
          <li>coś tam</li>
          <li>coś tam</li>

          <li>coś tam</li>
          <li>coś tam</li>
        </ul>
      </StyledList><StyledList>
        <ul>
          <li>coś tam</li>
          <li>coś tam</li>
          <li>coś tam</li>
          <li>coś tam</li>
          <li>coś tam</li>

          <li>coś tam</li>
          <li>coś tam</li>
        </ul>
      </StyledList>
    </Container>
  );
};