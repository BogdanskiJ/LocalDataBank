import {useState} from 'react'
import {useEffect} from 'react'
import {useSelector} from 'react-redux'
import {
  StyledTr,
  StyledThead,
  StyledThArrow,
  StyledThYear,
  StyledTh,
  StyledTd,
  StyledTdYear,
  StyledTbody,
  StyledTable,
  StyledTablePage,
  StyledTrThead,
  StyledArrow,
} from './styled'
import {
  selectManyVariablesFinalData,
  selectManyVariablesFinalValues,
} from '../../manyVariablesSlice'
import {Arrow} from '../../../../common/Arrow'
import {nanoid} from '@reduxjs/toolkit'

export default function Table({valuesArray}) {
  const manyVariablesFinalData = useSelector(selectManyVariablesFinalData)
  const manyVariablesFinalValues = useSelector(selectManyVariablesFinalValues)

  const [sortedArray, setSortedArray] = useState(valuesArray)
  const [order, setOrder] = useState(['year', 'ASC'])
  const [sortBy, setSortBy] = useState('year')
  const [finalDataResults, setFinalDataResults] = useState(
    manyVariablesFinalData.results,
  )

  useEffect(() => {
    setSortedArray(valuesArray)
  }, [valuesArray, manyVariablesFinalValues])

  useEffect(() => {
    setFinalDataResults(manyVariablesFinalData.results)
  }, [manyVariablesFinalData])

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
    <StyledTrThead key={nanoid()}>
      <StyledThYear
        active={sortBy === 'year'}
        onClick={() => sorting('year')}
        key={nanoid()}>
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
          onClick={() => sorting(`${results.id}`)}
          key={nanoid()}>
          <StyledThArrow>
            <StyledArrow>
              <Arrow order={order} sort={`${results.id}`} />
            </StyledArrow>
            {results.name}
          </StyledThArrow>
        </StyledTh>
      ))}
    </StyledTrThead>
  )

  const tbody = () => {
    return sortedArray.map(results => (
      <StyledTr key={nanoid()}>
        <StyledTdYear active={sortBy === 'year'} key={nanoid()}>
          {results.year}
        </StyledTdYear>
        {finalDataResults.map(element =>
          results[element.id] ? (
            <StyledTd active={sortBy === `${element.id}`} key={nanoid()}>
              {results[element.id]}
            </StyledTd>
          ) : (
            <StyledTd active={sortBy === `${element.id}`} key={nanoid()}>
              0
            </StyledTd>
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
