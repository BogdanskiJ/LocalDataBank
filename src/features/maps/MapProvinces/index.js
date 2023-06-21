import {useDispatch, useSelector} from 'react-redux'
import {Tooltip} from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import Button from '@mui/material/Button'
import useAllProvinces from '../useAllProvinces'
import {
  Box,
  Container,
  StyledHeaderText,
  StyledList,
  StyledMapPoland,
  StyledProvinceButtonBox,
  StyledSvg,
  StyledUl,
} from './styled'
import {
  selectProvinceName,
  setProvinceName,
} from '../../teritorialUnit/teritorialUnitSlice'

export const MapProvinces = () => {
  const dispatch = useDispatch()
  const provinceName = useSelector(selectProvinceName)
  const allProvinces = useAllProvinces()

  return (
    <Container>
      <StyledProvinceButtonBox>
        <StyledHeaderText>
          WYBIERZ JEDNOSTKĘ TERYTORIALNĄ - POWIATY
        </StyledHeaderText>
        <Button
          variant="contained"
          size="small"
          onClick={() => dispatch(setProvinceName(''))}>
          Mapa Polski
        </Button>
      </StyledProvinceButtonBox>
      <Box>
        <StyledMapPoland>
          {allProvinces.map(province =>
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
                    backgroundColor: 'black',
                    color: 'white',
                    padding: '5px 10px',
                  }}
                />
              </>
            ) : (
              ''
            ),
          )}
        </StyledMapPoland>
        <StyledList>
          {allProvinces.map(province =>
            province.name === provinceName ? (
              <StyledUl key={province.id}>{province.mapProvincesName}</StyledUl>
            ) : (
              ''
            ),
          )}
        </StyledList>
      </Box>
    </Container>
  )
}
