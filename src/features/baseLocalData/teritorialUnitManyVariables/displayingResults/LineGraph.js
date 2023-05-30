import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { CategoryScale, Chart, registerables } from "chart.js";
import { useSelector } from "react-redux";
import { selectTeritorialUnitFinalData, selectTeritorialUnitVariablesName } from "../teritorialUnitManyVariablesSlice";

Chart.register(CategoryScale);
Chart.register(...registerables);

export const LineGraph = ({ measure, newArray }) => {
  const teritorialUnitFinalData = useSelector(selectTeritorialUnitFinalData);
  const teritorialUnitVariablesName = useSelector(selectTeritorialUnitVariablesName);

  const [data1, setData1] = useState(teritorialUnitFinalData.results);

  useEffect(() => {
    setData1(teritorialUnitFinalData.results)
  }, [teritorialUnitFinalData]);

  const xAxis = newArray.map(value => value.year)

  const dataForLabel = (data1) => {
    let array = [];
    data1.map(results =>
      array = [...array, results.values.map(value => ({ x: `${value.year}`, y: value.val }))]
    )
    return array
  }

  const datasetsValue = data1.map(results =>
  (
    {
      label: `${(teritorialUnitVariablesName.find(variable => variable.value === results.id).label)} - wartość ${measure}`,
      data: dataForLabel(data1)[data1.indexOf(results)],
      fill: false,
      borderWidth: 4,
      backgroundColor: '#d7d7d7',
      borderColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
      responsive: true
    }
  )
  )

  return (
    <>
      <div
        style={{ maxWidth: "800px" }}
      >
        <Line
          data=
          {{
            labels: xAxis,
            datasets: datasetsValue
          }}
        />
      </div>
    </>
  );
}