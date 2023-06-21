import {useDispatch, useSelector} from 'react-redux'
import {Switch} from '@mui/material'
import {
  StyledResultSwitcheLabelBox,
  StyledResultSwitcherBox,
  StyledResultSwitcherText,
  StyledResultSwitcherTextGraph,
  StyledResultSwitcherTextTable,
} from './styled'
import {
  selectManyVariablesDisplayResultsSwitcher,
  setManyVariablesDisplayResultsSwitcher,
} from '../../../manyVariablesSlice'

export default function DisplayResultsSwitcher() {
  const dispatch = useDispatch()
  const manyVariablesToogleButton = useSelector(
    selectManyVariablesDisplayResultsSwitcher,
  )

  return (
    <StyledResultSwitcheLabelBox>
      <StyledResultSwitcherText>
        Wyświetl dane w postaci:
      </StyledResultSwitcherText>
      <StyledResultSwitcherBox>
        <StyledResultSwitcherTextGraph active={manyVariablesToogleButton}>
          Wykres
        </StyledResultSwitcherTextGraph>
        <Switch
          checked={!manyVariablesToogleButton}
          size={'small'}
          onChange={() => dispatch(setManyVariablesDisplayResultsSwitcher())}
        />
        <StyledResultSwitcherTextTable active={!manyVariablesToogleButton}>
          Tabela
        </StyledResultSwitcherTextTable>
      </StyledResultSwitcherBox>
    </StyledResultSwitcheLabelBox>
  )
}
