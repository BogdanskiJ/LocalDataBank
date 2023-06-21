import {ReactComponent as IconPoland} from './images/iconPoland.svg'
import {ReactComponent as IconCategory} from './images/iconCategory.svg'
import {StyledNavBox, StyledNavLink, StyledNavUl} from './styled'

export default function Navigation() {
  return (
    <nav>
      <StyledNavUl>
        <StyledNavBox>
          <StyledNavLink to="/jednostki-terytorialne">
            <IconPoland />
            Jednostki terytorialne
          </StyledNavLink>
          <StyledNavLink to="/dziedziny-tematyczne">
            <IconCategory />
            Dziedziny tematyczne
          </StyledNavLink>
          <StyledNavLink to="/bank-danych-lokalnych">
            Bank Danych Lokalnych
          </StyledNavLink>
        </StyledNavBox>
      </StyledNavUl>
    </nav>
  )
}
