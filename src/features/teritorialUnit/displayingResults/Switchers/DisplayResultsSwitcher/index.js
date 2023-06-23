import {useDispatch, useSelector} from 'react-redux'
import {Switch} from '@mui/material'
import {createTheme, ThemeProvider} from '@mui/material/styles'
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

  const theme = createTheme({
    components: {
      MuiSwitch: {
        styleOverrides: {
          switchBase: {
            color: '#006100',
          },
          track: {
            backgroundColor: '#006100',
          },
        },
      },
    },
  })

  return (
    <StyledResultSwitcheLabelBox>
      <StyledResultSwitcherText>
        Wyświetl dane w postaci:
      </StyledResultSwitcherText>
      <StyledResultSwitcherBox>
        <StyledResultSwitcherTextGraph active={teritorialUnitToogleButton}>
          Wykres
        </StyledResultSwitcherTextGraph>
        <ThemeProvider theme={theme}>
          <Switch
            checked={!teritorialUnitToogleButton}
            size={'small'}
            onChange={() => dispatch(setTeritorialUnitDisplayResultsSwitcher())}
          />
        </ThemeProvider>
        <StyledResultSwitcherTextTable active={!teritorialUnitToogleButton}>
          Tabela
        </StyledResultSwitcherTextTable>
      </StyledResultSwitcherBox>
    </StyledResultSwitcheLabelBox>
  )
}
