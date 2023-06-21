import {useSelector} from 'react-redux'
import {StyledHeader, Wrapper} from './styled'
import {
  selectTeritorialUnitAutoScrollSwitcher,
  selectTeritorialUnitSubGroupData,
  selectTeritorialUnitSubGroupName,
} from '../../features/teritorialUnit/teritorialUnitSlice'
import {selectRegionAndProvincesMapsSelectedMap} from '../../features/maps/mapsSlice'
import {useRef} from 'react'
import {useEffect} from 'react'
import {selectManyVariablesAutoScrollSwitcher} from '../../features/manyVariables/manyVariablesSlice'
import {useLocation} from 'react-router-dom/cjs/react-router-dom.min'

function NoDataPage({data, names}) {
  const {pathname} = useLocation()
  const provinceName = useSelector(selectRegionAndProvincesMapsSelectedMap)
  const manyVariablesAutoScrollSwitcher = useSelector(
    selectManyVariablesAutoScrollSwitcher,
  )
  const teritorialUnitAutoScrollSwitcher = useSelector(
    selectTeritorialUnitAutoScrollSwitcher,
  )

  const categoryName = data.results.find(element => element.id === names).name
  const resultsRef = useRef(null)

  const scrollToResults = () => {
    resultsRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'center',
    })
  }
  console.log('pathname', pathname)
  useEffect(() => {
    const timer = setTimeout(() => {
      ;(
        pathname === '/jednostki-terytorialne'
          ? teritorialUnitAutoScrollSwitcher
          : manyVariablesAutoScrollSwitcher
      )
        ? scrollToResults()
        : ''
    }, 200)
    return () => clearTimeout(timer)
  }, [categoryName, provinceName])

  return (
    <Wrapper ref={resultsRef}>
      <StyledHeader>
        {`Niestety nie ma danych "${categoryName}" dla ${provinceName[0]}`}
      </StyledHeader>
    </Wrapper>
  )
}
export default NoDataPage
