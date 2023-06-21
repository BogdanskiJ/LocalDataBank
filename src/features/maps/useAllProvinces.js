import {useRef, useState} from 'react'
import {
  selectRegionAndProvincesMapsSelectedMap,
  setSelectedMap,
} from '../maps/mapsSlice'
import {StyledLi, StyledSvg} from './styled'
import useDolnoslaskie from './province/MapDolnoslaskie'
import useKujawskoPomorskie from './province/MapKujawskopomorskie'
import useLodzkie from './province/MapLodzkie'
import useLubelskie from './province/MapLubelskie'
import useLubuskie from './province/MapLubuskie'
import useMalopolskie from './province/MapMalopolskie'
import useMazowieckie from './province/MapMazowieckie'
import useOpolskie from './province/MapOpolskie'
import usePodkarpackie from './province/MapPodkarpackie'
import usePodlaskie from './province/MapPodlaskie'
import usePomorskie from './province/MapPomorskie'
import useSlaskie from './province/MapSlaskie'
import useSwietokrzyskie from './province/MapSwietokrzyskie'
import useWarminskoMazurskie from './province/MapWarminsko-mazurskie'
import useWielkopolskie from './province/MapWielkopolskie'
import useZachodnioPomorskie from './province/MapZachodniopomorskie'
import {useDispatch, useSelector} from 'react-redux'

export const useAllProvinces = () => {
  const dispatch = useDispatch()

  const swietokrzyskie = useSwietokrzyskie()
  const dolnoslaskie = useDolnoslaskie()
  const kujawskopomorskie = useKujawskoPomorskie()
  const lodzkie = useLodzkie()
  const lubelskie = useLubelskie()
  const lubuskie = useLubuskie()
  const malopolskie = useMalopolskie()
  const mazowieckie = useMazowieckie()
  const opolskie = useOpolskie()
  const podkarpackie = usePodkarpackie()
  const podlaskie = usePodlaskie()
  const pomorskie = usePomorskie()
  const slaskie = useSlaskie()
  const warminskomazurskie = useWarminskoMazurskie()
  const wielkopolskie = useWielkopolskie()
  const zachodniopomorskie = useZachodnioPomorskie()
  const selectedMap = useSelector(selectRegionAndProvincesMapsSelectedMap)

  const preserveAspectRatio = 'xMidYMid meet'

  const [isHovering, setIsHovering] = useState(false)
  const handleMouseOver = region => {
    setIsHovering(region)
  }
  const handleMouseOut = () => {
    setIsHovering()
  }
  const handleMouseDown = region => {
    dispatch(setSelectedMap([region.name, region.id, region.level]))
  }

  const displayMap = province => {
    return province.map(region => (
      <StyledSvg
        data-tooltip-id="my-tooltip"
        place="bottom"
        data-tooltip-content={`${region.name}`}
        onMouseOver={() => handleMouseOver(region.name)}
        onMouseOut={() => handleMouseOut()}
        onMouseDown={() => handleMouseDown(region)}
        xmlns="http://www.w3.org/2000/svg"
        style={{
          transition: 'all 0.5s ease-in-out',
          fill:
            selectedMap[0] === region.name
              ? '#8e0b23'
              : isHovering === region.name
              ? 'crimson'
              : region.type === 'county'
              ? 'teal'
              : '#005757',
          borderStyle: 'none',
          outline: 'none',
        }}>
        {region.data}
      </StyledSvg>
    ))
  }

  const displayProvincesName = province => {
    const sortedProvince = [...province]
      .map(region => region)
      .sort((a, b) => (a.name > b.name ? 1 : -1))
    return sortedProvince.map(region => (
      <StyledLi
        active={selectedMap[0] === region.name}
        style={{
          fontWeight: isHovering === region.name ? '700' : '',
        }}
        onMouseOver={() => handleMouseOver(region.name)}
        onMouseOut={() => handleMouseOut()}
        onMouseDown={() => handleMouseDown(region)}
        key={region.name}>
        {region.name}
      </StyledLi>
    ))
  }

  const regionList = province => {
    const newProvince = [...province].map(region => ({
      name: region.name,
      id: region.id,
    }))
    return newProvince
      .map(region => region)
      .sort((a, b) => (a.name > b.name ? 1 : -1))
  }

  const allProvinces = [
    {
      name: 'Dolnośląskie',
      id: 1,
      mapLink: displayMap(dolnoslaskie),
      mapProvincesName: displayProvincesName(dolnoslaskie),
      regionNameList: regionList(dolnoslaskie),
      viewBox: '0 0 303 275',
      preserveAspectRatio: preserveAspectRatio,
    },
    {
      name: 'Kujawsko-pomorskie',
      id: 2,
      mapLink: displayMap(kujawskopomorskie),
      mapProvincesName: displayProvincesName(kujawskopomorskie),
      viewBox: '0 0 238 230',
      preserveAspectRatio: preserveAspectRatio,
    },
    {
      name: 'Lubelskie',
      id: 3,
      mapLink: displayMap(lubelskie),
      mapProvincesName: displayProvincesName(lubelskie),
      viewBox: '0 0 23170 28950',
      preserveAspectRatio: preserveAspectRatio,
    },
    {
      name: 'Lubuskie',
      id: 4,
      mapLink: displayMap(lubuskie),
      mapProvincesName: displayProvincesName(lubuskie),
      viewBox: '0 0 178 278',
      preserveAspectRatio: preserveAspectRatio,
    },
    {
      name: 'Łódzkie',
      id: 5,
      mapLink: displayMap(lodzkie),
      mapProvincesName: displayProvincesName(lodzkie),
      viewBox: '0 0 253 247',
      preserveAspectRatio: preserveAspectRatio,
    },
    {
      name: 'Małopolskie',
      id: 6,
      mapLink: displayMap(malopolskie),
      mapProvincesName: displayProvincesName(malopolskie),
      viewBox: '0 0 240 210',
      preserveAspectRatio: preserveAspectRatio,
    },
    {
      name: 'Mazowieckie',
      id: 7,
      mapLink: displayMap(mazowieckie),
      mapProvincesName: displayProvincesName(mazowieckie),
      viewBox: '0 0 375 390',
      preserveAspectRatio: preserveAspectRatio,
    },
    {
      name: 'Opolskie',
      id: 8,
      mapLink: displayMap(opolskie),
      mapProvincesName: displayProvincesName(opolskie),
      viewBox: '0 0 214 228',
      preserveAspectRatio: preserveAspectRatio,
    },
    {
      name: 'Podkarpackie',
      id: 9,
      mapLink: displayMap(podkarpackie),
      mapProvincesName: displayProvincesName(podkarpackie),
      viewBox: '0 0 242 282',
      preserveAspectRatio: preserveAspectRatio,
    },
    {
      name: 'Podlaskie',
      id: 10,
      mapLink: displayMap(podlaskie),
      mapProvincesName: displayProvincesName(podlaskie),
      viewBox: '0 0 225 338',
      preserveAspectRatio: preserveAspectRatio,
    },
    {
      name: 'Pomorskie',
      id: 11,
      mapLink: displayMap(pomorskie),
      mapProvincesName: displayProvincesName(pomorskie),
      viewBox: '0 0 270 210',
      preserveAspectRatio: preserveAspectRatio,
    },
    {
      name: 'Śląskie',
      id: 12,
      mapLink: displayMap(slaskie),
      mapProvincesName: displayProvincesName(slaskie),
      viewBox: '0 0 197 268',
      preserveAspectRatio: preserveAspectRatio,
    },
    {
      name: 'Świętokrzyskie',
      id: 13,
      mapLink: displayMap(swietokrzyskie),
      mapProvincesName: displayProvincesName(swietokrzyskie),
      viewBox: '0 0 213 185',
      preserveAspectRatio: preserveAspectRatio,
    },
    {
      name: 'Warmińsko-mazurskie',
      id: 14,
      mapLink: displayMap(warminskomazurskie),
      mapProvincesName: displayProvincesName(warminskomazurskie),
      viewBox: '0 0 345 205',
      preserveAspectRatio: preserveAspectRatio,
    },
    {
      name: 'Wielkopolskie',
      id: 15,
      mapLink: displayMap(wielkopolskie),
      mapProvincesName: displayProvincesName(wielkopolskie),
      viewBox: '0 0 318 405',
      preserveAspectRatio: preserveAspectRatio,
    },
    {
      name: 'Zachodniopomorskie',
      id: 16,
      mapLink: displayMap(zachodniopomorskie),
      mapProvincesName: displayProvincesName(zachodniopomorskie),
      viewBox: '0 0 280 300',
      preserveAspectRatio: preserveAspectRatio,
    },
  ]
  return allProvinces
}
