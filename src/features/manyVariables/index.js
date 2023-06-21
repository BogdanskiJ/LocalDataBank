import {useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import Results from './displayingResults'
import NoDataPage from '../../common/NoDataPage'
import ErrorPage from '../../common/ErrorPage'
import SelectFields from './selectFields'
import MapPoland from '../maps/MapPoland'
import {MapProvinces} from '../maps/MapProvinces'
import {StyledHead, StyledPageBody, StyledResults} from './styled'
import {
  selectManyVariablesFinalData,
  selectManyVariablesStatus,
  selectManyVariablesSubGroupData,
  selectManyVariablesSubGroupName,
  selectManyVariablesVariablesName,
} from './manyVariablesSlice'
import {
  selectProvinceName,
  setTeritorialUnitBegin,
} from '../teritorialUnit/teritorialUnitSlice'
import {setSelectedMapBegin} from '../maps/mapsSlice'

export default function ManyVariables() {
  const dispatch = useDispatch()
  const {pathname} = useLocation()

  const provinceName = useSelector(selectProvinceName)
  const status = useSelector(selectManyVariablesStatus)
  const manyVariablesFinalData = useSelector(selectManyVariablesFinalData)
  const manyVariablesSubGroupName = useSelector(selectManyVariablesSubGroupName)
  const manyVariablesSubGroupData = useSelector(selectManyVariablesSubGroupData)
  const manyVariablesVariablesName = useSelector(
    selectManyVariablesVariablesName,
  )

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
            <SelectFields />
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
