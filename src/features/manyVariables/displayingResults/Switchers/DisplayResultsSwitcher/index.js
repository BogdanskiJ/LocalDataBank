import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Switch from '@mui/material/Switch'
import styled from 'styled-components'
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

export const DisplayResultsSwitcher = () => {
  const dispatch = useDispatch()
  const manyVariablesToogleButton = useSelector(
    selectManyVariablesDisplayResultsSwitcher,
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
    <>
      <StyledResultSwitcheLabelBox>
        <StyledResultSwitcherText>
          Wyświetl dane w postaci:
        </StyledResultSwitcherText>
        <StyledResultSwitcherBox>
          <StyledResultSwitcherTextGraph active={manyVariablesToogleButton}>
            Wykres
          </StyledResultSwitcherTextGraph>
          <ColoredSwitch
            checked={!manyVariablesToogleButton}
            size={'small'}
            onChange={() => dispatch(setManyVariablesDisplayResultsSwitcher())}
          />
          <StyledResultSwitcherTextTable active={!manyVariablesToogleButton}>
            Tabela
          </StyledResultSwitcherTextTable>
        </StyledResultSwitcherBox>
      </StyledResultSwitcheLabelBox>
    </>
  )
}
