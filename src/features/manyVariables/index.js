import {useDispatch, useSelector} from 'react-redux'
import ManyVariables from './manyVariables'
import {MapPoland} from '../maps/MapPoland'
import {StyledHead, StyledPageBody, StyledResults} from './styled'
import {
  selectManyVariablesFinalData,
  selectManyVariablesStatus,
  selectManyVariablesSubGroupData,
  selectManyVariablesSubGroupName,
  selectManyVariablesVariablesName,
  setProvinceNameBegin,
} from './manyVariablesSlice'
import {
  selectProvinceName,
  setProvinceNameUnitBegin,
  setTeritorialUnitBegin,
} from '../teritorialUnit/teritorialUnitSlice'
import Results from './displayingResults'
import NoDataPage from '../../common/NoDataPage'
import {MapProvinces} from '../maps/MapProvinces'
import ErrorPage from '../../common/ErrorPage'
import {useLocation} from 'react-router-dom'
import {useEffect} from 'react'
import {setSelectedMapBegin} from '../maps/mapsSlice'

function ManyVariablesOneUnit() {
  const manyVariablesFinalData = useSelector(selectManyVariablesFinalData)
  const manyVariablesVariablesName = useSelector(
    selectManyVariablesVariablesName,
  )
  const provinceName = useSelector(selectProvinceName)
  const status = useSelector(selectManyVariablesStatus)
  console.log('provinceName', provinceName)

  const manyVariablesSubGroupName = useSelector(selectManyVariablesSubGroupName)
  const manyVariablesSubGroupData = useSelector(selectManyVariablesSubGroupData)

  const dispatch = useDispatch()
  const {pathname} = useLocation()
  useEffect(() => {
    pathname === '/dziedziny-tematyczne'
      ? dispatch(setTeritorialUnitBegin()) && dispatch(setSelectedMapBegin())
      : ''
  }, [])

  return (
    <StyledPageBody>
      {status === 'error' ? (
        <ErrorPage />
      ) : (
        <>
          <StyledHead>Dane według wybranej dziedziny tematycznej</StyledHead>
          <StyledResults>
            <ManyVariables />
            {provinceName === '' ? <MapPoland /> : <MapProvinces />}
          </StyledResults>

          {manyVariablesVariablesName !== '' ? (
            <div>
              {manyVariablesFinalData !== '' ? (
                <div>
                  {manyVariablesFinalData.totalRecords === 0 ? (
                    <NoDataPage
                      data={manyVariablesSubGroupData}
                      names={manyVariablesSubGroupName}
                    />
                  ) : (
                    <Results />
                  )}
                </div>
              ) : (
                ''
              )}
            </div>
          ) : (
            ''
          )}
        </>
      )}
    </StyledPageBody>
  )
}
export default ManyVariablesOneUnit
