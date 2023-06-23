import {useDispatch, useSelector} from 'react-redux'
import {Tooltip} from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import Button from '@mui/material/Button'
import {SelectProvinceName, SelectRegionName} from '../../../common/Select'
import useAllProvinces from '../useAllProvinces'
import {
  Box,
  Container,
  StyledHeaderText,
  StyledMapPoland,
  StyledProvinceButtonBox,
  StyledRegionNameLabel,
  StyledSelect,
  StyledSvg,
} from './styled'
import {
  selectProvinceName,
  setProvinceName,
} from '../../teritorialUnit/teritorialUnitSlice'
import {useState} from 'react'
import {setSelectedMap} from '../mapsSlice'

export const MapProvinces = () => {
  const dispatch = useDispatch()
  const provinceName = useSelector(selectProvinceName)

  const allProvinces = useAllProvinces()

  const [isHovering, setIsHovering] = useState(false)

  const handleMouseOver = province => {
    setIsHovering(province.name)
  }

  const handleMouseDown = province => {
    dispatch(setSelectedMap([province.name, province.id, province.level]))
  }

  const handleMouseOut = () => {
    setIsHovering()
  }

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
        {allProvinces.map(province =>
          province.name === provinceName ? (
            <>
              <StyledSelect>
                <StyledRegionNameLabel>
                  Wybierz jednostkę terytorialną
                </StyledRegionNameLabel>
                <SelectProvinceName
                  provinces={province.mapProvincesName}
                  handleMouseOut={handleMouseOut}
                  handleMouseOver={handleMouseOver}
                  isHovering={isHovering}
                  setSelectedMap={setSelectedMap}></SelectProvinceName>
              </StyledSelect>
            </>
          ) : (
            ''
          ),
        )}
      </Box>
    </Container>
  )
}
