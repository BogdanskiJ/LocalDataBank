import {useSelector} from 'react-redux'
import {
  selectTeritorialUnitCategoryData,
  selectTeritorialUnitCategoryName,
  selectTeritorialUnitGroupData,
  selectTeritorialUnitGroupName,
  selectTeritorialUnitStatus,
  selectTeritorialUnitSubGroupData,
  selectTeritorialUnitSubGroupName,
  selectTeritorialUnitVariablesData,
  selectTeritorialUnitVariablesName,
  setTeritorialUnitCategoryName,
  setTeritorialUnitGroupName,
  setTeritorialUnitSubGroupName,
  setTeritorialUnitVariablesNames,
} from '../teritorialUnitSlice'
import {SelectManyVariables, SelectOneVariable} from '../../../common/Select'
import LoadingPage from '../../../common/LoadingPage'
import {
  StyledBox,
  StyledCheck as StyledCheckBox,
  StyledLabel,
  StyledLabelBox,
  StyledLabelText,
  StyledMultiSelectBox,
  StyledMultiSelectLabelBox,
  StyledSelectBox,
  StyledTeritorialUnit,
} from './styled'
import {ReactComponent as Check} from '../../../common/images/check.svg'
import {ReactComponent as NoCheck} from '../../../common/images/noCheck.svg'
import {AutoScrollSwitcher} from '../displayingResults/Switchers/AutoScrollSwitcher'

function TeritorialUnit() {
  const teritorialUnit = useSelector(selectTeritorialUnitCategoryData)
  const teritorialUnitGroup = useSelector(selectTeritorialUnitGroupData)
  const teritorialUnitSubGroup = useSelector(selectTeritorialUnitSubGroupData)
  const teritorialUnitVariables = useSelector(selectTeritorialUnitVariablesData)

  const teritorialUnitCategoryName = useSelector(
    selectTeritorialUnitCategoryName,
  )
  const teritorialUnitGroupName = useSelector(selectTeritorialUnitGroupName)
  const teritorialUnitSubGroupName = useSelector(
    selectTeritorialUnitSubGroupName,
  )
  const teritorialUnitVariablesName = useSelector(
    selectTeritorialUnitVariablesName,
  )

  const teritorialUnitStatus = useSelector(selectTeritorialUnitStatus)
  console.log('teritorialUnitStatus', teritorialUnitStatus)
  return (
    <StyledTeritorialUnit>
      {teritorialUnit ? (
        <div>
          <StyledLabelBox>
            <StyledLabel>Wybierz kategorię: </StyledLabel>
            <StyledSelectBox>
              <SelectOneVariable
                dataType={teritorialUnit}
                setValue={setTeritorialUnitCategoryName}
              />
              <StyledCheckBox>
                {teritorialUnitCategoryName ? <Check /> : <NoCheck />}
              </StyledCheckBox>
            </StyledSelectBox>
          </StyledLabelBox>
        </div>
      ) : (
        <LoadingPage title="Pobieram listę kategorii" />
      )}
      {teritorialUnitCategoryName !== '' ? (
        <div>
          {teritorialUnitGroup ? (
            <div>
              <StyledLabelBox>
                <StyledLabel>Wybierz grupę: </StyledLabel>
                <StyledSelectBox>
                  <SelectOneVariable
                    dataType={teritorialUnitGroup}
                    setValue={setTeritorialUnitGroupName}
                  />
                  <StyledCheckBox>
                    {teritorialUnitGroupName ? <Check /> : <NoCheck />}
                  </StyledCheckBox>
                </StyledSelectBox>
              </StyledLabelBox>
            </div>
          ) : (
            <LoadingPage title="Pobieram listę grup" />
          )}
        </div>
      ) : (
        ''
      )}

      {teritorialUnitGroupName !== '' ? (
        <div>
          {teritorialUnitSubGroup ? (
            <div>
              <StyledLabelBox>
                <StyledLabel>Wybierz podgrupę: </StyledLabel>
                <StyledSelectBox>
                  <SelectOneVariable
                    dataType={teritorialUnitSubGroup}
                    setValue={setTeritorialUnitSubGroupName}
                  />
                  <StyledCheckBox>
                    {teritorialUnitSubGroupName ? <Check /> : <NoCheck />}
                  </StyledCheckBox>
                </StyledSelectBox>
              </StyledLabelBox>
            </div>
          ) : (
            <LoadingPage title="Pobieram listę podgrup" />
          )}
        </div>
      ) : (
        ''
      )}

      <StyledBox>
        {teritorialUnitSubGroupName !== '' ? (
          <div>
            {teritorialUnitVariables ? (
              <div>
                <StyledMultiSelectLabelBox>
                  <StyledLabel>
                    Wybierz zmienne: <StyledLabelText>max 10</StyledLabelText>
                  </StyledLabel>
                  <StyledMultiSelectBox>
                    <SelectManyVariables
                      dataType={teritorialUnitVariables}
                      setValue={setTeritorialUnitVariablesNames}
                    />

                    <StyledCheckBox>
                      {teritorialUnitVariablesName ? <Check /> : <NoCheck />}
                    </StyledCheckBox>
                  </StyledMultiSelectBox>
                  <AutoScrollSwitcher />
                </StyledMultiSelectLabelBox>
              </div>
            ) : (
              <LoadingPage title="Pobieram listę zmiennych" />
            )}
          </div>
        ) : (
          ''
        )}
      </StyledBox>
    </StyledTeritorialUnit>
  )
}
export default TeritorialUnit
