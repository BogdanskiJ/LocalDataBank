import {useState} from 'react'
import {useLocation} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import 'react-tooltip/dist/react-tooltip.css'
import Button from '@mui/material/Button'
import {Tooltip} from 'react-tooltip'
import {ReactComponent as Check} from '../../../common/images/check.svg'
import {ReactComponent as NoCheck} from '../../../common/images/noCheck.svg'
import windowSize from '../../../common/WindowSize'
import {SelectRegionName} from '../../../common/Select'
import usePoland from '../province/MapPoland'
import {
  Container,
  Header,
  StyledBoxPoland,
  StyledButtonBox,
  StyledCheck,
  StyledMapPoland,
  StyledRegionNameLabel,
  StyledSelect,
  StyledSvg,
  StyledUnitBox,
} from './styled'
import {
  selectRegionAndProvincesMapsSelectedMap,
  setSelectedMap,
} from '../mapsSlice'
import {setProvinceName} from '../../teritorialUnit/teritorialUnitSlice'

export default function MapPoland() {
  const dispatch = useDispatch()
  const {pathname} = useLocation()
  const [isHovering, setIsHovering] = useState(false)
  const [widthSize] = windowSize()
  const poland = usePoland()
  const selectedMap = useSelector(selectRegionAndProvincesMapsSelectedMap)

  const handleMouseOver = province => {
    setIsHovering(province.name)
  }

  const handleMouseDown = province => {
    dispatch(setSelectedMap([province.name, province.id, province.level]))
  }

  const handleMouseOut = () => {
    setIsHovering()
  }

  const buttonSx = () => {
    let style = {
      padding: '0 5px',
      maxWidth: 'fit-content',
      marginLeft: 'auto',
    }
    if (widthSize <= 576) {
      style.fontSize = '11px'
    }
    return style
  }

  return (
    <Container>
      <StyledBoxPoland>
        <StyledMapPoland>
          <Header>Wybierz jednostkę terytorialną - WOJEWÓDZTWA </Header>
          <StyledButtonBox>
            <Button
              variant="contained"
              size="small"
              sx={buttonSx()}
              onClick={() =>
                dispatch(setSelectedMap(['POLSKA', '000000000000', '0']))
              }>
              Polska
            </Button>
            {pathname === '/jednostki-terytorialne' ? (
              ''
            ) : (
              <Button
                variant="contained"
                size="small"
                sx={buttonSx()}
                onClick={() =>
                  dispatch(setSelectedMap(['WOJEWÓDZTWA', '000000000000', '2']))
                }>
                Województwa
              </Button>
            )}
          </StyledButtonBox>
          <StyledUnitBox>
            <StyledSvg
              version="1"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 500 464.876"
              scale={1.2}>
              {poland.map(province => (
                <StyledSvg
                  data-tooltip-id="my-tooltip"
                  place="bottom"
                  data-tooltip-content={`${province.name}`}
                  style={{
                    transition: 'all 0.5s ease-in-out',
                    fill:
                      selectedMap[0] === province.name
                        ? '#8e0b23'
                        : selectedMap[0] === 'POLSKA'
                        ? '#f03356'
                        : selectedMap[0] === 'WOJEWÓDZTWA'
                        ? '#20d9ab'
                        : isHovering === province.name
                        ? 'crimson'
                        : 'teal',
                    borderStyle: 'none',
                    outline: 'none',
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
              backgroundColor: 'black',
              color: 'white',
              padding: '5px 10px',
            }}
          />
        </StyledMapPoland>
        <StyledSelect>
          <StyledRegionNameLabel>
            Wybierz jednostkę terytorialną - POWIATY
          </StyledRegionNameLabel>
          <SelectRegionName
            poland={poland}
            handleMouseOut={handleMouseOut}
            handleMouseOver={handleMouseOver}
            isHovering={isHovering}
            setProvinceName={setProvinceName}></SelectRegionName>
        </StyledSelect>
      </StyledBoxPoland>
    </Container>
  )
}
