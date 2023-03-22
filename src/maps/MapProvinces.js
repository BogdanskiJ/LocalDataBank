import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAllProvinces } from "./province/MapAllProvinces";
import { Box, Container, StyledList, StyledMap } from "./styled";

export const MapProvinces = () => {
  const param = useParams();
  const poland = useAllProvinces();
  const [province, setProvince] = useState("Mazowieckie");

  // Redirect("/maps/Poland")
  useEffect(() => {
    (poland.find(province =>
      (province.name === param.name ? (setProvince(province)) : (console.log("znalazło za którymś razem")))))
  }, []);

  return (
    <Container>
      <Box>
        {province.map}
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