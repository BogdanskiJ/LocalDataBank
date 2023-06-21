import React from 'react'
import {useState} from 'react'
import {
  selectManyVariablesAutoScrollSwitcher,
  selectManyVariablesDisplayResultsSwitcher,
  selectManyVariablesFinalData,
  selectManyVariablesFinalValues,
  selectManyVariablesSubGroupData,
  selectManyVariablesSubGroupName,
  selectManyVariablesVariablesName,
} from '../manyVariablesSlice'
import {useSelector} from 'react-redux'
import Table from './Table'
import {useEffect} from 'react'
import {
  StyledResultHeader,
  StyledSwitcher,
  StyledResultsTitle,
  StyledResultsBox,
  StyledResultsPage,
} from './styled'
import DisplayResultsSwitcher from '../../manyVariables/displayingResults/Switchers/DisplayResultsSwitcher'
import {useRef} from 'react'
import {measures} from '../../../common/Measures'
import LineGraph from './LineGraph'

export const Results = () => {
  const manyVariablesFinalData = useSelector(selectManyVariablesFinalData)
  const manyVariablesFinalValues = useSelector(selectManyVariablesFinalValues)
  const manyVariablesSubGroupName = useSelector(selectManyVariablesSubGroupName)
  const manyVariablesSubGroupData = useSelector(selectManyVariablesSubGroupData)
  const manyVariablesDisplayResultsSwitcher = useSelector(
    selectManyVariablesDisplayResultsSwitcher,
  )
  const manyVariablesAutoScrollSwitcher = useSelector(
    selectManyVariablesAutoScrollSwitcher,
  )
  const [finalData, setFinalData] = useState(manyVariablesFinalData)
  const [valuesArray, setValuesArray] = useState([])
  const [yearsArray, setYearsArray] = useState([])
  const [finalValues] = useState(manyVariablesFinalValues)

  const manyVariablesVariablesName = useSelector(
    selectManyVariablesVariablesName,
  )

  useEffect(() => {
    setFinalData(manyVariablesFinalData)
  }, [manyVariablesFinalData])

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

  useEffect(() => {
    addNewYearToArray()
  }, [manyVariablesFinalValues])

  useEffect(() => {
    addValuesToArray()
  }, [yearsArray, manyVariablesFinalData, manyVariablesFinalValues])

  const measure = `[${
    measures.results.find(
      measure => measure.id === manyVariablesFinalData.measureUnitId,
    ).name
  }]`
  const resultsRef = useRef(null)

  const scrollToResults = () => {
    resultsRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'center',
    })
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      manyVariablesAutoScrollSwitcher ? scrollToResults() : console.log()
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
          {`${
            manyVariablesSubGroupData.results.find(
              element => element.id === manyVariablesSubGroupName,
            ).name
          } - ${manyVariablesVariablesName.label} - wartość ${measure}`}
        </StyledResultsTitle>
      </StyledResultHeader>
      <StyledResultsBox>
        {manyVariablesDisplayResultsSwitcher ? (
          <LineGraph measure={measure} valuesArray={valuesArray} />
        ) : (
          <Table measure={measure} valuesArray={valuesArray} />
        )}
      </StyledResultsBox>
    </StyledResultsPage>
  )
}
