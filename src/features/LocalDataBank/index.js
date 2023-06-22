import {useDispatch} from 'react-redux'
import {useLocation} from 'react-router-dom'
import {useEffect} from 'react'
import {
  StyledAnchor,
  StyledBDLPage,
  StyledHead,
  StyledParagraph,
  StyledSection,
  StyledSectionHeader,
  StyledTableBox,
  StyledTbody,
  StyledTd,
  StyledTh,
  tr,
} from './styled'
import {setTeritorialUnitBegin} from '../teritorialUnit/teritorialUnitSlice'
import {setManyVariablesBegin} from '../manyVariables/manyVariablesSlice'
import {setSelectedMapBegin} from '../maps/mapsSlice'

export default function LocalDataBank() {
  const dispatch = useDispatch()
  const {pathname} = useLocation()

  useEffect(() => {
    pathname === '/bank-danych-lokalnych'
      ? dispatch(setTeritorialUnitBegin()) &&
        dispatch(setManyVariablesBegin()) &&
        dispatch(setSelectedMapBegin())
      : ''
  }, [])

  return (
    <StyledBDLPage>
      <StyledHead>Bank danych lokalnych</StyledHead>
      <StyledSection>
        <StyledSectionHeader>
          BANK DANYCH LOKALNYCH - największa w Polsce baza danych o gospodarce,
          społeczeństwie i środowisku.
        </StyledSectionHeader>
        <StyledParagraph>
          Bank Danych Lokalnych oferuje ponad 40 tys. cech statystycznych
          pogrupowanych tematycznie. Pierwsze dane pochodzą z 1995 roku.
        </StyledParagraph>
        <ul>
          <li>Dane i wskaźniki opisują powiaty, województwa i Polskę. </li>
          <li>
            Zasoby informacyjne (statystyki roczne i krótkookresowe) są na
            bieżąco uzupełniane oraz aktualizowane.
          </li>
        </ul>
        <StyledParagraph>
          Aplikacja API pozwala przeglądać i pobierać do dalszego przetwarzania
          pełny zakres danych znajdujących się w Banku. API do Banku Danych
          Lokalnych zrealizowano w ramach partnerskiego projektu „Otwarte dane -
          dostęp, standard, edukacja”, którego Liderem jest Ministerstwo
          Cyfryzacji. Projekt jest współfinansowany ze środków Unii Europejskiej
          z Programu Operacyjnego Polska Cyfrowa.
        </StyledParagraph>
        <StyledParagraph>
          Aplikacja pozwala na przeglądanie danych w dwóch trybach:
        </StyledParagraph>
        <ul>
          <li>jedna jednostka terytorialna dla wielu dziedzin tematycznych </li>
          <li>jedna dziedzina tematyczna dla wielu jednostek terytorialnych</li>
        </ul>
        <StyledParagraph>
          Podczas wyboru jednostki terytorialnej w zakładce Dziedziny Tematyczne
          wyniki będą wyświetlone dla wszystkich jednostek terytorialnych
          niższego szczebla.
        </StyledParagraph>
        <StyledParagraph>
          Wyniki mogą być wyświetlone w postaci wykresu lub tabeli.
        </StyledParagraph>
      </StyledSection>
      <StyledSection>
        <StyledSectionHeader>Limity zapytań</StyledSectionHeader>
        <StyledParagraph>
          Ze względów bezpieczeństwa API na ilość żądań nałożone są limity
          ilościowe.
        </StyledParagraph>
        <StyledTableBox>
          <StyledTbody>
            <tr>
              <StyledTh>Okres</StyledTh>
              <StyledTh>Ilość zapytań</StyledTh>
            </tr>
            <tr>
              <StyledTd>1s</StyledTd>
              <StyledTd>5</StyledTd>
            </tr>
            <tr>
              <StyledTd>15m</StyledTd>
              <StyledTd>100</StyledTd>
            </tr>
            <tr>
              <StyledTd>12h</StyledTd>
              <StyledTd>1&nbsp;000</StyledTd>
            </tr>
            <tr>
              <StyledTd>7d</StyledTd>
              <StyledTd>10&nbsp;000</StyledTd>
            </tr>
          </StyledTbody>
        </StyledTableBox>
      </StyledSection>
      <StyledSection>
        <StyledSectionHeader>Licencja</StyledSectionHeader>
        <StyledParagraph>
          Dane są możliwe do wykorzystywania w oparciu o licencję międzynarodową
          Creative Commons by 4.0 - Uznanie autorstwa
        </StyledParagraph>
        <StyledAnchor href="https://creativecommons.org/licenses/by/4.0/legalcode.pl">
          https://creativecommons.org/licenses/by/4.0/legalcode.pl
        </StyledAnchor>
        <StyledParagraph>
          Właścicielem aplikacji API udostępniającej dane jest Główny Urząd
          Statystyczny
        </StyledParagraph>
        <StyledAnchor href="https://api.stat.gov.pl/Home/BdlApi">
          https://api.stat.gov.pl/Home/BdlApi
        </StyledAnchor>
      </StyledSection>
    </StyledBDLPage>
  )
}
