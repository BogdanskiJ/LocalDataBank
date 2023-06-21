import {useState, useEffect, useRef} from 'react'
import {useSelector} from 'react-redux'
import Table from './Table'
import LineGraph from './LineGraph/index'
import {measures} from '../../../common/Measures'
import DisplayResultsSwitcher from './Switchers/DisplayResultsSwitcher'
import {
  selectTeritorialUnitAutoScrollSwitcher,
  selectTeritorialUnitDisplayResultsSwitcher,
  selectTeritorialUnitFinalData,
  selectTeritorialUnitFinalValues,
  selectTeritorialUnitSubGroupData,
  selectTeritorialUnitSubGroupName,
} from '../teritorialUnitSlice'
import {
  StyledResultHeader,
  StyledSwitcher,
  StyledResultsTitle,
  StyledResultsBox,
  StyledResultsPage,
} from './styled'

export default function Results() {
  const resultsRef = useRef(null)
  const teritorialUnitFinalData = useSelector(selectTeritorialUnitFinalData)
  const teritorialUnitFinalValues = useSelector(selectTeritorialUnitFinalValues)
  const teritorialUnitSubGroupName = useSelector(
    selectTeritorialUnitSubGroupName,
  )
  const teritorialUnitSubGroupData = useSelector(
    selectTeritorialUnitSubGroupData,
  )
  const teritorialUnitDisplayResultsSwitcher = useSelector(
    selectTeritorialUnitDisplayResultsSwitcher,
  )
  const teritorialUnitAutoScrollSwitcher = useSelector(
    selectTeritorialUnitAutoScrollSwitcher,
  )
  const [finalData, setFinalData] = useState(teritorialUnitFinalData)
  const [valuesArray, setValuesArray] = useState([])
  const [yearsArray, setYearsArray] = useState([])
  const [finalValues] = useState(teritorialUnitFinalValues)

  const addNewYearToArray = () => {
    let namesArray = []
    finalData.results.map(result => (namesArray = [...namesArray, result.id]))
    let temporaryArray = []
    finalValues.map(values =>
      values.map(value => (temporaryArray = [...temporaryArray, value.year])),
    )
    const uniqueArray = [...new Set(temporaryArray)]
    const finalArray = uniqueArray.map(element => ({year: element}))
    setYearsArray(finalArray)
  }

  const addValuesToArray = () => {
    let valuesArray = [...yearsArray]
    let valuesArray2 = [...yearsArray]
    let index = ''

    finalData.results.map(results =>
      results.values.map(
        values => (
          (index = valuesArray.findIndex(
            element => element.year === values.year,
          )),
          valuesArray2[index]
            ? (valuesArray2[index] = {
                ...valuesArray2[index],
                [results.id]: values.val,
              })
            : ''
        ),
      ),
    )
    setValuesArray(valuesArray2)
  }

  const measure = `[${
    measures.results.find(
      measure =>
        measure.id === teritorialUnitFinalData.results[0].measureUnitId,
    ).name
  }]`

  const scrollToResults = () => {
    resultsRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'center',
    })
  }

  useEffect(() => {
    setFinalData(teritorialUnitFinalData)
  }, [teritorialUnitFinalData])

  useEffect(() => {
    addNewYearToArray()
  }, [teritorialUnitFinalValues])

  useEffect(() => {
    addValuesToArray()
  }, [yearsArray, teritorialUnitFinalData, teritorialUnitFinalValues])

  useEffect(() => {
    const timer = setTimeout(() => {
      teritorialUnitAutoScrollSwitcher ? scrollToResults() : ''
    }, 200)
    return () => clearTimeout(timer)
  }, [valuesArray, yearsArray])

  return (
    <StyledResultsPage>
      <StyledSwitcher>
        <DisplayResultsSwitcher />
      </StyledSwitcher>
      <StyledResultHeader ref={resultsRef}>
        <StyledResultsTitle>
          {
            teritorialUnitSubGroupData.results.find(
              element => element.id === teritorialUnitSubGroupName.value,
            ).name
          }
        </StyledResultsTitle>
      </StyledResultHeader>
      <StyledResultsBox>
        {teritorialUnitDisplayResultsSwitcher ? (
          <LineGraph measure={measure} valuesArray={valuesArray} />
        ) : (
          <Table measure={measure} valuesArray={valuesArray} />
        )}
      </StyledResultsBox>
    </StyledResultsPage>
  )
}
