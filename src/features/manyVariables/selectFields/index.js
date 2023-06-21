import {useSelector} from 'react-redux'
import {ReactComponent as Check} from '../../../common/images/check.svg'
import {ReactComponent as NoCheck} from '../../../common/images/noCheck.svg'
import LoadingPage from '../../../common/LoadingPage'
import AutoScrollSwitcher from '../displayingResults/Switchers/AutoScrollSwitcher'
import {SelectOneVariable} from '../../../common/Select'
import {
  selectManyVariablesCategoryData,
  selectManyVariablesCategoryName,
  selectManyVariablesGroupData,
  selectManyVariablesGroupName,
  selectManyVariablesSubGroupData,
  selectManyVariablesSubGroupName,
  selectManyVariablesVariablesData,
  selectManyVariablesVariablesName,
  setManyVariablesCategoryName,
  setManyVariablesGroupName,
  setManyVariablesSubGroupName,
  setManyVariablesVariablesNames,
} from '../manyVariablesSlice'
import {
  StyledCheck,
  StyledLabel,
  StyledLabelBox,
  StyledSelectBox,
  StyledSelectFieldsBox,
} from './styled'

export default function SelectFields() {
  const manyVariables = useSelector(selectManyVariablesCategoryData)
  const manyVariablesGroup = useSelector(selectManyVariablesGroupData)
  const manyVariablesSubGroup = useSelector(selectManyVariablesSubGroupData)
  const manyVariablesVariables = useSelector(selectManyVariablesVariablesData)

  const manyVariablesCategoryName = useSelector(selectManyVariablesCategoryName)
  const manyVariablesGroupName = useSelector(selectManyVariablesGroupName)
  const manyVariablesSubGroupName = useSelector(selectManyVariablesSubGroupName)
  const manyVariablesVariablesName = useSelector(
    selectManyVariablesVariablesName,
  )

  return (
    <StyledSelectFieldsBox>
      {manyVariables ? (
        <div>
          <StyledLabelBox>
            <StyledLabel>Wybierz kategorię: </StyledLabel>
            <StyledSelectBox>
              <SelectOneVariable
                dataType={manyVariables}
                setValue={setManyVariablesCategoryName}
              />
              <StyledCheck>
                {manyVariablesCategoryName ? <Check /> : <NoCheck />}
              </StyledCheck>
            </StyledSelectBox>
          </StyledLabelBox>
        </div>
      ) : (
        <LoadingPage title="Pobieram listę kategorii" />
      )}
      {manyVariablesCategoryName !== '' ? (
        <div>
          {manyVariablesGroup ? (
            <div>
              <StyledLabelBox>
                <StyledLabel>Wybierz grupę: </StyledLabel>
                <StyledSelectBox>
                  <SelectOneVariable
                    dataType={manyVariablesGroup}
                    setValue={setManyVariablesGroupName}
                  />
                  <StyledCheck>
                    {manyVariablesGroupName ? <Check /> : <NoCheck />}
                  </StyledCheck>
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

      {manyVariablesGroupName !== '' ? (
        <div>
          {manyVariablesSubGroup ? (
            <div>
              <StyledLabelBox>
                <StyledLabel>Wybierz podgrupę: </StyledLabel>
                <StyledSelectBox>
                  <SelectOneVariable
                    dataType={manyVariablesSubGroup}
                    setValue={setManyVariablesSubGroupName}
                  />
                  <StyledCheck>
                    {manyVariablesSubGroupName ? <Check /> : <NoCheck />}
                  </StyledCheck>
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

      {manyVariablesSubGroupName !== '' ? (
        <div>
          {manyVariablesVariables ? (
            <div>
              <StyledLabelBox>
                <StyledLabel>Wybierz zmienną: </StyledLabel>
                <StyledSelectBox>
                  <SelectOneVariable
                    dataType={manyVariablesVariables}
                    setValue={setManyVariablesVariablesNames}
                  />
                  <StyledCheck>
                    {manyVariablesVariablesName ? <Check /> : <NoCheck />}
                  </StyledCheck>
                </StyledSelectBox>
                <AutoScrollSwitcher />
              </StyledLabelBox>
            </div>
          ) : (
            <LoadingPage title="Pobieram listę zmiennych" />
          )}
        </div>
      ) : (
        ''
      )}
    </StyledSelectFieldsBox>
  )
}
