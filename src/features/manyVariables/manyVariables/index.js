import {useSelector} from 'react-redux'
import {
  selectManyVariablesCategoryData,
  selectManyVariablesCategoryName,
  selectManyVariablesGroupData,
  selectManyVariablesGroupName,
  selectManyVariablesStatus,
  selectManyVariablesSubGroupData,
  selectManyVariablesSubGroupName,
  selectManyVariablesVariablesData,
  selectManyVariablesVariablesName,
  setManyVariablesCategoryName,
  setManyVariablesGroupName,
  setManyVariablesSubGroupName,
  setManyVariablesVariablesNames,
} from '../manyVariablesSlice'
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
  StyledManyVariables,
} from './styled'
import {ReactComponent as Check} from '../../../common/images/check.svg'
import {ReactComponent as NoCheck} from '../../../common/images/noCheck.svg'
import AutoScrollSwitcher from '../displayingResults/Switchers/AutoScrollSwitcher'
import {SelectOneVariable} from '../../../common/Select'

function ManyVariables() {
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

  const manyVariablesStatus = useSelector(selectManyVariablesStatus)
  console.log('manyVariablesStatus', manyVariablesStatus)
  return (
    <StyledManyVariables>
      {manyVariables ? (
        <div>
          <StyledLabelBox>
            <StyledLabel>Wybierz kategorię: </StyledLabel>
            <StyledSelectBox>
              <SelectOneVariable
                dataType={manyVariables}
                setValue={setManyVariablesCategoryName}
              />
              <StyledCheckBox>
                {manyVariablesCategoryName ? <Check /> : <NoCheck />}
              </StyledCheckBox>
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
                  <StyledCheckBox>
                    {manyVariablesGroupName ? <Check /> : <NoCheck />}
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
                  <StyledCheckBox>
                    {manyVariablesSubGroupName ? <Check /> : <NoCheck />}
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
                  <StyledCheckBox>
                    {manyVariablesVariablesName ? <Check /> : <NoCheck />}
                  </StyledCheckBox>
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
    </StyledManyVariables>
  )
}
export default ManyVariables

// <StyledBox>
//         {manyVariablesSubGroupName !== '' ? (
//           <div>
//             {manyVariablesVariables ? (
//               <div>
//                 <StyledMultiSelectLabelBox>
//                   <StyledLabel>
//                     Wybierz zmienne: <StyledLabelText>max 10</StyledLabelText>
//                   </StyledLabel>
//                   <StyledMultiSelectBox>
//                     <SelectManyVariables
//                       dataType={manyVariablesVariables}
//                       setValue={setManyVariablesVariablesNames}
//                     />

//                     <StyledCheckBox>
//                       {manyVariablesVariablesName ? <Check /> : <NoCheck />}
//                     </StyledCheckBox>
//                   </StyledMultiSelectBox>
//                   <AutoScrollSwitcher />
//                 </StyledMultiSelectLabelBox>
//               </div>
//             ) : (
//               <LoadingPage title="Pobieram listę zmiennych" />
//             )}
//           </div>
//         ) : (
//           ''
//         )}
//       </StyledBox>
