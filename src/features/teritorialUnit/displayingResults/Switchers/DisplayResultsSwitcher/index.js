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
  selectTeritorialUnitDisplayResultsSwitcher,
  setTeritorialUnitDisplayResultsSwitcher,
} from '../../../teritorialUnitSlice'

export default function DisplayResultsSwitcher() {
  const dispatch = useDispatch()
  const teritorialUnitToogleButton = useSelector(
    selectTeritorialUnitDisplayResultsSwitcher,
  )

  return (
    <StyledResultSwitcheLabelBox>
      <StyledResultSwitcherText>
        Wyświetl dane w postaci:
      </StyledResultSwitcherText>
      <StyledResultSwitcherBox>
        <StyledResultSwitcherTextGraph active={teritorialUnitToogleButton}>
          Wykres
        </StyledResultSwitcherTextGraph>
        <Switch
          checked={!teritorialUnitToogleButton}
          size={'small'}
          onChange={() => dispatch(setTeritorialUnitDisplayResultsSwitcher())}
        />
        <StyledResultSwitcherTextTable active={!teritorialUnitToogleButton}>
          Tabela
        </StyledResultSwitcherTextTable>
      </StyledResultSwitcherBox>
    </StyledResultSwitcheLabelBox>
  )
}
