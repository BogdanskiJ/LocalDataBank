import {
  Container,
  StyledNavButton,
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
            Jednostki terytorialne
          </StyledNavLink>
          <StyledNavLink to="/dziedziny-tematyczne">
            <IconCategory />
            Dziedziny tematyczne
          </StyledNavLink>
          <StyledNavLink to="/bdl">BDL</StyledNavLink>
        </Container>
      </StyledNavigation>
    </nav>
  )
}
