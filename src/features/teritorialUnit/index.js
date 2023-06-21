import {useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import Results from './displayingResults'
import SelectFields from './selectFields'
import NoDataPage from '../../common/NoDataPage'
import {MapProvinces} from '../maps/MapProvinces'
import ErrorPage from '../../common/ErrorPage'
import MapPoland from '../maps/MapPoland'
import {StyledHead, StyledPageBody, StyledResults} from './styled'
import {setManyVariablesBegin} from '../manyVariables/manyVariablesSlice'
import {setSelectedMapBegin} from '../maps/mapsSlice'
import {
  selectProvinceName,
  selectTeritorialUnitFinalData,
  selectTeritorialUnitStatus,
  selectTeritorialUnitSubGroupData,
  selectTeritorialUnitSubGroupName,
  selectTeritorialUnitVariablesName,
} from './teritorialUnitSlice'

export default function TeritorialUnitManyVariables() {
  const dispatch = useDispatch()
  const {pathname} = useLocation()
  const teritorialUnitFinalData = useSelector(selectTeritorialUnitFinalData)
  const teritorialUnitVariablesName = useSelector(
    selectTeritorialUnitVariablesName,
  )
  const provinceName = useSelector(selectProvinceName)
  const status = useSelector(selectTeritorialUnitStatus)
  const teritorialUnitSubGroupName = useSelector(
    selectTeritorialUnitSubGroupName,
  )
  const teritorialUnitSubGroupData = useSelector(
    selectTeritorialUnitSubGroupData,
  )

  useEffect(() => {
    pathname === '/jednostki-terytorialne'
      ? dispatch(setManyVariablesBegin()) && dispatch(setSelectedMapBegin())
      : ''
  }, [])

  return (
    <StyledPageBody>
      {status === 'error' ? (
        <ErrorPage />
      ) : (
        <>
          <StyledHead>Dane dla wybranej jednostki terytorialnej</StyledHead>
          <StyledResults>
            <SelectFields />
            {provinceName === '' ? <MapPoland /> : <MapProvinces />}
          </StyledResults>

          {teritorialUnitVariablesName !== '' ? (
            <div>
              {teritorialUnitFinalData !== '' ? (
                <div>
                  {teritorialUnitFinalData.totalRecords === 0 ? (
                    <NoDataPage
                      data={teritorialUnitSubGroupData}
                      names={teritorialUnitSubGroupName.value}
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
