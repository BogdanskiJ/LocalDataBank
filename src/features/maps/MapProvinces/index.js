import {useDispatch, useSelector} from 'react-redux'
import {useLocation} from 'react-router-dom'
import {Tooltip} from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import Button from '@mui/material/Button'
import {SelectProvinceName, SelectRegionName} from '../../../common/Select'
import {ReactComponent as Tips} from '../../../common/images/tips.svg'
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
  StyledTips,
} from './styled'
import {
  selectProvinceName,
  setProvinceName,
} from '../../teritorialUnit/teritorialUnitSlice'
import {useState} from 'react'
import {setSelectedMap} from '../mapsSlice'

export const MapProvinces = () => {
  const dispatch = useDispatch()
  const {pathname} = useLocation()
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
          {'WYBIERZ JEDNOSTKĘ TERYTORIALNĄ'}
          {pathname === '/jednostki-terytorialne' ? (
            ''
          ) : (
            <Tips
              data-tooltip-id="my-tooltips"
              data-tooltip-content="Zostaną pobrane dane dla gmin"
            />
          )}
          <Tooltip
            id="my-tooltips"
            style={{
              backgroundColor: 'black',
              color: 'white',
              padding: '5px 10px',
            }}
          />
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
              <StyledMapPoland key={province.id}>
                <StyledSvg
                  version="1"
                  preserveAspectRatio={`${province.preserveAspectRatio}`}
                  viewBox={`${province.viewBox}`}
                  stroke="white"
                  width="100%"
                  height="100%">
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
              </StyledMapPoland>
            ) : (
              ''
            ),
          )}
        </StyledMapPoland>
        {allProvinces.map(province =>
          province.name === provinceName ? (
            <StyledSelect key={province.id}>
              <StyledRegionNameLabel>
                Wybierz jednostkę terytorialną
              </StyledRegionNameLabel>
              <SelectProvinceName
                provinces={province.mapProvincesName}
                handleMouseOut={handleMouseOut}
                handleMouseOver={handleMouseOver}
                isHovering={isHovering}
                setSelectedMap={setSelectedMap}
              />
            </StyledSelect>
          ) : (
            ''
          ),
        )}
      </Box>
    </Container>
  )
}
