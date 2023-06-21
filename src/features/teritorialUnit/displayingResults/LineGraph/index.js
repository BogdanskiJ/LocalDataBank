import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {Line} from 'react-chartjs-2'
import {CategoryScale, Chart, registerables} from 'chart.js'
import windowSize from '../../../../common/WindowSize'
import {StyledLine} from './styled'
import {
  selectTeritorialUnitFinalData,
  selectTeritorialUnitVariablesName,
} from '../../teritorialUnitSlice'

Chart.register(CategoryScale)
Chart.register(...registerables)

export default function LineGraph({measure, valuesArray}) {
  const teritorialUnitFinalData = useSelector(selectTeritorialUnitFinalData)
  const teritorialUnitVariablesName = useSelector(
    selectTeritorialUnitVariablesName,
  )
  const [finalDataResults, setFinalDataResults] = useState(
    teritorialUnitFinalData.results,
  )

  const [widthSize] = windowSize()

  useEffect(() => {
    setFinalDataResults(teritorialUnitFinalData.results)
  }, [teritorialUnitFinalData])

  const xAxis = valuesArray.map(value => value.year)

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

  const datasetsValue = finalDataResults.map(results => ({
    label:
      `${
        teritorialUnitVariablesName.find(
          variable => variable.value === results.id,
        ).label
      } - wartość ${measure}`.length > 58
        ? `${
            teritorialUnitVariablesName.find(
              variable => variable.value === results.id,
            ).label
          } - wartość ${measure}`.slice(0, 57) + '...'
        : `${
            teritorialUnitVariablesName.find(
              variable => variable.value === results.id,
            ).label
          } - wartość ${measure}`,
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
      onHover: event => {
        event.native.target.style.cursor = 'pointer'
      },
      onLeave: event => {
        event.native.target.style.cursor = 'default'
      },
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

  const optionsPluginsTooltipFontSize = () => {
    let legend = {
      enabled: true,
      displayColors: true,
      bodyFont: {
        size: 12,
      },
    }
    if (widthSize <= 1200) {
      legend.bodyFont.size = 11
    }
    if (widthSize <= 768) {
      legend.bodyFont.size = 10
    }
    if (widthSize <= 576) {
      legend.bodyFont.size = 8
    }
    return legend
  }
  const optionsPlugins = {
    colors: {forceOverride: false},
    legend: optionsPluginsLegend(),
    tooltip: optionsPluginsTooltipFontSize(),
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
            onHover: (event, chartElement) => {
              event.native.target.style.cursor = chartElement[0]
                ? 'pointer'
                : 'default'
            },

            plugins: optionsPlugins,
          }}
          plugins={[plugin]}
        />
      </StyledLine>
    </>
  )
}
