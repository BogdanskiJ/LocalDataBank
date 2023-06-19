import {useSelector} from 'react-redux'
import TeritorialUnit from './teritorialUnit'
import {MapPoland} from '../maps/MapPoland'
import {StyledHead, StyledPageBody, StyledResults} from './styled'
import {
  selectProvinceName,
  selectTeritorialUnitFinalData,
  selectTeritorialUnitStatus,
  selectTeritorialUnitVariablesName,
} from './teritorialUnitSlice'
import {Results} from './displayingResults'
import NoDataPage from '../../common/NoDataPage'
import {MapProvinces} from '../maps/MapProvinces'
import ErrorPage from '../../common/ErrorPage'

function TeritorialUnitManyVariables() {
  const teritorialUnitFinalData = useSelector(selectTeritorialUnitFinalData)
  const teritorialUnitVariablesName = useSelector(
    selectTeritorialUnitVariablesName,
  )
  const provinceName = useSelector(selectProvinceName)
  const status = useSelector(selectTeritorialUnitStatus)

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
                    <NoDataPage />
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
