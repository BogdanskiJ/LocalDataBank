import {useDispatch, useSelector} from 'react-redux'
import styled from 'styled-components'
import Switch from '@mui/material/Switch'
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
import {func} from 'prop-types'

export default function DisplayResultsSwitcher() {
  const dispatch = useDispatch()
  const teritorialUnitToogleButton = useSelector(
    selectTeritorialUnitDisplayResultsSwitcher,
  )
  const ColoredSwitch = styled(Switch)(() => ({
    '& MuiSwitch-switchBase.Mui-checked': {
      color: '#1976d2',
    },
    '& .MuiSwitch-switchBase': {
      color: 'green',
    },
    '& .MuiSwitch-track': {
      backgroundColor: '#49ad26',
    },
  }))

  return (
    <StyledResultSwitcheLabelBox>
      <StyledResultSwitcherText>
        Wyświetl dane w postaci:
      </StyledResultSwitcherText>
      <StyledResultSwitcherBox>
        <StyledResultSwitcherTextGraph active={teritorialUnitToogleButton}>
          Wykres
        </StyledResultSwitcherTextGraph>
        <ColoredSwitch
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
