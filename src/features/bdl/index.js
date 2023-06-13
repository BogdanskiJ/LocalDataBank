import React from "react";
import {
	StyledAnchor,
	StyledBDLPage,
	StyledHead,
	StyledPageBody,
	StyledParagraph,
	StyledSection,
	StyledSectionHeader,
	StyledTbody,
	StyledTd,
	StyledTh,
	StyledTr,
} from "./styled";
import { useSelector } from "react-redux";
import { selectProvinceName } from "../baseLocalData/teritorialUnitManyVariables/teritorialUnitManyVariablesSlice";

export const BDL = () => {
	// const provinceName = useSelector(selectProvinceName);
	// console.log("provinceName", provinceName);

	// const resultsRef = useRef(null);

	// const scrollToResults = () => {
	// 	resultsRef.current.scrollIntoView({
	// 		behavior: "smooth",
	// 		block: "start",
	// 	});
	// };

	// useEffect(() => {
	// 	scrollToResults();
	// }, [teritorialUnitFinalData]);

	return (
		<StyledBDLPage>
			<StyledHead>Bank danych lokalnych</StyledHead>
			<StyledSection>
				<StyledSectionHeader>
					BANK DANYCH LOKALNYCH - największa w Polsce baza danych o gospodarce,
					społeczeństwie i środowisku.
				</StyledSectionHeader>
				<StyledParagraph>
					BDL oferuje ponad 40 tys. cech statystycznych pogrupowanych
					tematycznie. Pierwsze dane pochodzą z 1995 roku.
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
					pełny zakres danych znajdujących się w Banku. API do BDL zrealizowano
					w ramach partnerskiego projektu „Otwarte dane - dostęp, standard,
					edukacja”, którego Liderem jest Ministerstwo Cyfryzacji. Projekt jest
					współfinansowany ze środków Unii Europejskiej z Programu Operacyjnego
					Polska Cyfrowa.
				</StyledParagraph>
			</StyledSection>
			<StyledSection>
				<StyledSectionHeader>Limity zapytań</StyledSectionHeader>
				<StyledParagraph>
					Ze względów bezpieczeństwa API na ilość żądań nałożone są limity
					ilościowe.
				</StyledParagraph>
				<StyledParagraph>
					<StyledTbody>
						<StyledTr>
							<StyledTh>Okres</StyledTh>
							<StyledTh>Ilość zapytań</StyledTh>
						</StyledTr>
						<StyledTr>
							<StyledTd>1s</StyledTd>
							<StyledTd>5</StyledTd>
						</StyledTr>
						<StyledTr>
							<StyledTd>15m</StyledTd>
							<StyledTd>100</StyledTd>
						</StyledTr>
						<StyledTr>
							<StyledTd>12h</StyledTd>
							<StyledTd>1&nbsp;000</StyledTd>
						</StyledTr>
						<StyledTr>
							<StyledTd>7d</StyledTd>
							<StyledTd>10&nbsp;000</StyledTd>
						</StyledTr>
					</StyledTbody>
				</StyledParagraph>
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
	);
};
