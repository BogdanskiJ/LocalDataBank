import {useSelector} from 'react-redux'
import ManyVariables from './manyVariables'
import {MapPoland} from '../maps/MapPoland'
import {StyledHead, StyledPageBody, StyledResults} from './styled'
import {
  selectProvinceName,
  selectManyVariablesFinalData,
  selectManyVariablesStatus,
  selectManyVariablesVariablesName,
} from './manyVariablesSlice'
import {Results} from './displayingResults'
import NoDataPage from '../../common/NoDataPage'
import {MapProvinces} from '../maps/MapProvinces'
import ErrorPage from '../../common/ErrorPage'

function ManyVariablesOneUnit() {
  const manyVariablesFinalData = useSelector(selectManyVariablesFinalData)
  const manyVariablesVariablesName = useSelector(
    selectManyVariablesVariablesName,
  )
  const provinceName = useSelector(selectProvinceName)
  const status = useSelector(selectManyVariablesStatus)

  return (
    <StyledPageBody>
      {status === 'error' ? (
        <ErrorPage />
      ) : (
        <>
          <StyledHead>Dane dla wybranej jednostki terytorialnej</StyledHead>
          <StyledResults>
            <ManyVariables />
            {provinceName === '' ? <MapPoland /> : <MapProvinces />}
          </StyledResults>

          {manyVariablesVariablesName !== '' ? (
            <div>
              {manyVariablesFinalData !== '' ? (
                <div>
                  {manyVariablesFinalData.totalRecords === 0 ? (
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
export default ManyVariablesOneUnit
