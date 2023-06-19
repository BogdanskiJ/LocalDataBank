import React, {useEffect, useState} from 'react'
import {Line} from 'react-chartjs-2'
import {CategoryScale, Chart, registerables} from 'chart.js'
import {useSelector} from 'react-redux'
import {
  selectManyVariablesFinalData,
  selectManyVariablesVariablesName,
} from '../../manyVariablesSlice'
import {StyledLine} from './styled'
import {useWindowSize} from '../../../../common/WindowSize'

Chart.register(CategoryScale)
Chart.register(...registerables)

export const LineGraph = ({measure, newArray}) => {
  const manyVariablesFinalData = useSelector(selectManyVariablesFinalData)
  const manyVariablesVariablesName = useSelector(
    selectManyVariablesVariablesName,
  )

  const [data1, setData1] = useState(manyVariablesFinalData.results)

  useEffect(() => {
    setData1(manyVariablesFinalData.results)
  }, [manyVariablesFinalData])

  const xAxis = newArray.map(value => value.year)

  const dataForLabel = data1 => {
    let array = []
    data1.map(
      results =>
        (array = [
          ...array,
          results.values.map(value => ({x: `${value.year}`, y: value.val})),
        ]),
    )
    return array
  }

  const datasetsValue = data1.map(results => ({
    label:
      `${
        manyVariablesVariablesName.find(
          variable => variable.value === results.id,
        ).label
      } - wartość ${measure}`.length > 58
        ? `${
            manyVariablesVariablesName.find(
              variable => variable.value === results.id,
            ).label
          } - wartość ${measure}`.slice(0, 57) + '...'
        : `${
            manyVariablesVariablesName.find(
              variable => variable.value === results.id,
            ).label
          } - wartość ${measure}`,
    data: dataForLabel(data1)[data1.indexOf(results)],
    fill: false,
    borderWidth: 4,
    borderColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
    responsive: true,
  }))

  const plugin = {
    id: 'increase-legend-spacing',
    beforeInit(chart) {
      const originalFit = chart.legend.fit
      chart.legend.fit = function fit() {
        originalFit.bind(chart.legend)()
        this.height += 10
      }
    },
  }
  const [widthSize] = useWindowSize()

  const fontSize = () => {
    let legend = {
      align: 'center',
      display: true,
      labels: {
        boxWidth: 40,
        useBorderRadius: true,
        borderRadius: 4,
        font: {
          size: 12,
        },
      },
      tooltip: {enabled: true},
    }
    if (widthSize <= 1200) {
      legend.labels.boxWidth = 30
      legend.labels.font.size = 11
    }
    if (widthSize <= 768) {
      legend.labels.boxWidth = 20
      legend.labels.font.size = 10
    }
    if (widthSize <= 576) {
      legend.labels.boxWidth = 10
      legend.labels.font.size = 9
    }
    return legend
  }

  const optionsPlugins = {
    colors: {forceOverride: false},
    legend: fontSize(),
  }

  return (
    <>
      <StyledLine>
        <Line
          data={{
            labels: xAxis,
            datasets: datasetsValue,
          }}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            layout: {
              padding: 15,
            },
            plugins: optionsPlugins,
          }}
          plugins={[plugin]}
        />
      </StyledLine>
    </>
  )
}
