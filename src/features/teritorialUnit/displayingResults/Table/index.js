import {useState, useEffect} from 'react'
import {useSelector} from 'react-redux'
import {Arrow} from '../../../../common/Arrow'
import {
  StyledArrow,
  StyledTable,
  StyledTbody,
  StyledTd,
  StyledTdYear,
  StyledTh,
  StyledThArrow,
  StyledThYear,
  StyledThead,
  StyledTr,
  StyledTablePage,
  StyledTrThead,
} from './styled'
import {
  selectTeritorialUnitFinalData,
  selectTeritorialUnitFinalValues,
  selectTeritorialUnitVariablesName,
} from '../../teritorialUnitSlice'

export default function Table({valuesArray}) {
  const teritorialUnitFinalData = useSelector(selectTeritorialUnitFinalData)
  const teritorialUnitFinalValues = useSelector(selectTeritorialUnitFinalValues)
  const teritorialUnitVariablesName = useSelector(
    selectTeritorialUnitVariablesName,
  )

  const [sortedArray, setSortedArray] = useState(valuesArray)
  const [order, setOrder] = useState(['year', 'ASC'])
  const [finalDataResults, setFinalDataResults] = useState(
    teritorialUnitFinalData.results,
  )
  const [sortBy, setSortBy] = useState('year')

  useEffect(() => {
    setSortedArray(valuesArray)
  }, [valuesArray, teritorialUnitFinalValues])

  useEffect(() => {
    setFinalDataResults(teritorialUnitFinalData.results)
  }, [teritorialUnitFinalData])

  const sorting = col => {
    setSortBy(col)
    if (order[1] === 'DSC') {
      const sorted = [...sortedArray].sort((a, b) => (a[col] > b[col] ? 1 : -1))
      setSortedArray(sorted)
      setOrder([col, 'ASC'])
    }

    if (order[1] === 'ASC') {
      const sorted = [...sortedArray].sort((a, b) => (a[col] < b[col] ? 1 : -1))
      setSortedArray(sorted)
      setOrder([col, 'DSC'])
    }
  }

  const thead = data1 => (
    <StyledTrThead>
      <StyledThYear active={sortBy === 'year'} onClick={() => sorting('year')}>
        <StyledThArrow style={{justifyContent: 'left'}}>
          {'Rok'}
          <StyledArrow>
            <Arrow order={order} sort={'year'} />
          </StyledArrow>
        </StyledThArrow>
      </StyledThYear>
      {data1.map(results => (
        <StyledTh
          active={sortBy === `${results.id}`}
          onClick={() => sorting(`${results.id}`)}>
          <StyledThArrow>
            <StyledArrow>
              <Arrow order={order} sort={`${results.id}`} />
            </StyledArrow>
            {
              teritorialUnitVariablesName.find(
                name => name.value === results.id,
              ).label
            }
          </StyledThArrow>
        </StyledTh>
      ))}
    </StyledTrThead>
  )

  const tbody = () => {
    return sortedArray.map(results => (
      <StyledTr>
        <StyledTdYear active={sortBy === 'year'}>{results.year}</StyledTdYear>
        {finalDataResults.map(element =>
          results[element.id] ? (
            <StyledTd active={sortBy === `${element.id}`}>
              {results[element.id]}
            </StyledTd>
          ) : (
            <StyledTd active={sortBy === `${element.id}`}>0</StyledTd>
          ),
        )}
      </StyledTr>
    ))
  }

  return (
    <StyledTablePage>
      <StyledTable>
        <StyledThead>{thead(finalDataResults)}</StyledThead>
        <StyledTbody>{tbody()}</StyledTbody>
      </StyledTable>
    </StyledTablePage>
  )
}
