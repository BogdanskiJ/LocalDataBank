import {ReactComponent as ErrorIcon} from './errorIcon.svg'
import Button from '@mui/material/Button'
import {
  Error,
  IconContainer,
  Info,
  StyledErrorPage,
  StyledNavLink,
} from './styled'
import windowSize from '../WindowSize'

export default function ErrorPage() {
  const [widthSize] = windowSize()

  const buttonSx = () => {
    let style = {
      padding: '0 5px',
      maxWidth: 'fit-content',
      marginLeft: 'auto',
    }
    if (widthSize <= 768) {
      style.fontSize = '12px'
    }
    if (widthSize <= 576) {
      style.fontSize = '11px'
    }
    return style
  }

  return (
    <StyledErrorPage>
      <IconContainer>
        <ErrorIcon />
      </IconContainer>
      <Error>Ooops! Coś poszło nie tak...</Error>
      <Info>
        Sprawdź swoje połączenie sieciowe i spróbój ponownie.
        <br />
        Jeżeli Twoje połączenie sieciowe jest poprawne niestety błąd leży po
        stronie serwera API.
      </Info>
      <StyledNavLink to="https://kubabogd.github.io/strateg/#/jednostki-terytorialne">
        <Button variant="contained" size="medium" sx={buttonSx()}>
          Załaduj stronę ponownie
        </Button>
      </StyledNavLink>
    </StyledErrorPage>
  )
}
