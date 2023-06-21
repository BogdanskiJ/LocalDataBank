import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {Line} from 'react-chartjs-2'
import {CategoryScale, Chart, registerables} from 'chart.js'
import {StyledLine} from './styled'
import {selectManyVariablesFinalData} from '../../manyVariablesSlice'
import windowSize from '../../../../common/WindowSize'

Chart.register(CategoryScale)
Chart.register(...registerables)

export default function LineGraph({measure, valuesArray}) {
  const manyVariablesFinalData = useSelector(selectManyVariablesFinalData)

  const [finalDataResults, setFinalDataResults] = useState(
    manyVariablesFinalData.results,
  )
  const [widthSize] = windowSize()

  useEffect(() => {
    setFinalDataResults(manyVariablesFinalData.results)
  }, [manyVariablesFinalData])

  const xAxis = valuesArray.map(value => value.year)

  const dataForLabel = data => {
    let array = []
    data.map(
      results =>
        (array = [
          ...array,
          results.values.map(value => ({x: `${value.year}`, y: value.val})),
        ]),
    )

    return array
  }

  const datasetsValue = finalDataResults.map(results => ({
    label:
      `${results.name}`.length > 58
        ? `${results.name}`.slice(0, 57) + '...'
        : `${results.name}`,
    data: dataForLabel(finalDataResults)[finalDataResults.indexOf(results)],
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

  const optionsPluginsLegend = () => {
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
    legend: optionsPluginsLegend(),
  }

  return (
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
  )
}
