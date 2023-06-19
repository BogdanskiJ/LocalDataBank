import React, {useRef} from 'react'
import {useState} from 'react'
import {useEffect} from 'react'
import {useSelector} from 'react-redux'
import {
  selectTeritorialUnitFinalData,
  selectTeritorialUnitFinalValues,
  selectTeritorialUnitVariablesName,
} from '../../teritorialUnitSlice'
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
} from '../styled'
import {StyledTablePage, StyledTrThead} from './styled'
import {Arrow} from './Arrow'

export const Table = ({measure, newArray2}) => {
  const teritorialUnitFinalData = useSelector(selectTeritorialUnitFinalData)
  const teritorialUnitFinalValues = useSelector(selectTeritorialUnitFinalValues)
  const teritorialUnitVariablesName = useSelector(
    selectTeritorialUnitVariablesName,
  )

  const [newArray3, setNewArray3] = useState(newArray2)
  const [order, setOrder] = useState(['year', 'ASC'])
  const [data1, setData1] = useState(teritorialUnitFinalData.results)
  const [sort, setSort] = useState('year')

  useEffect(() => {
    setNewArray3(newArray2)
  }, [newArray2, teritorialUnitFinalValues])

  useEffect(() => {
    setData1(teritorialUnitFinalData.results)
  }, [teritorialUnitFinalData])

  const sorting = col => {
    setSort(col)
    if (order[1] === 'DSC') {
      const sorted = [...newArray3].sort((a, b) => (a[col] > b[col] ? 1 : -1))
      setNewArray3(sorted)
      setOrder([col, 'ASC'])
    }

    if (order[1] === 'ASC') {
      const sorted = [...newArray3].sort((a, b) => (a[col] < b[col] ? 1 : -1))
      setNewArray3(sorted)
      setOrder([col, 'DSC'])
    }
  }

  const thead = data1 => (
    <StyledTrThead>
      <StyledThYear active={sort === 'year'} onClick={() => sorting('year')}>
        <StyledThArrow style={{justifyContent: 'left'}}>
          {'Rok'}
          <StyledArrow>
            <Arrow order={order} sort={'year'} />
          </StyledArrow>
        </StyledThArrow>
      </StyledThYear>
      {data1.map(results => (
        <StyledTh
          active={sort === `${results.id}`}
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
    return newArray3.map(results => (
      <StyledTr>
        <StyledTdYear active={sort === 'year'}>{results.year}</StyledTdYear>
        {data1.map(element =>
          results[element.id] ? (
            <StyledTd active={sort === `${element.id}`}>
              {results[element.id]}
            </StyledTd>
          ) : (
            <StyledTd active={sort === `${element.id}`}>0</StyledTd>
          ),
        )}
      </StyledTr>
    ))
  }

  return (
    <StyledTablePage>
      <StyledTable>
        <StyledThead>{thead(data1)}</StyledThead>
        <StyledTbody>{tbody()}</StyledTbody>
      </StyledTable>
    </StyledTablePage>
  )
}
