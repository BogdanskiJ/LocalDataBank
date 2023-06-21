import {useDispatch, useSelector} from 'react-redux'
import TeritorialUnit from './teritorialUnit'
import MapPoland from '../maps/MapPoland'
import {StyledHead, StyledPageBody, StyledResults} from './styled'
import {
  selectProvinceName,
  selectTeritorialUnitFinalData,
  selectTeritorialUnitStatus,
  selectTeritorialUnitSubGroupData,
  selectTeritorialUnitSubGroupName,
  selectTeritorialUnitVariablesName,
  setProvinceNameBegin,
  setTeritorialUnitCategoryName,
} from './teritorialUnitSlice'
import {Results} from './displayingResults'
import NoDataPage from '../../common/NoDataPage'
import {MapProvinces} from '../maps/MapProvinces'
import ErrorPage from '../../common/ErrorPage'
import {useState} from 'react'
import {useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import {
  setManyVariablesBegin,
  setProvinceNameVariablesBegin,
} from '../manyVariables/manyVariablesSlice'
import {setSelectedMapBegin} from '../maps/mapsSlice'

function TeritorialUnitManyVariables() {
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
  const dispatch = useDispatch()
  const {pathname} = useLocation()
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
            <TeritorialUnit />
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
export default TeritorialUnitManyVariables
