import {
  Container,
  StyledNavLink,
  StyledNavText,
  StyledNavigation,
} from './styled'
import {ReactComponent as IconPoland} from './images/iconPoland.svg'
import {ReactComponent as IconCategory} from './images/iconCategory.svg'

export const Navigation = () => {
  return (
    <nav>
      <StyledNavigation>
        <Container>
          <StyledNavLink to="/jednostki-terytorialne">
            <IconPoland />
            Dane dla jednostki terytorialnej
          </StyledNavLink>
          <StyledNavLink to="/dane-tematyczne">
            <IconCategory />
            Dane według dziedzin
          </StyledNavLink>
          <StyledNavLink to="/bdl">BDL</StyledNavLink>
        </Container>
      </StyledNavigation>
    </nav>
  )
}
