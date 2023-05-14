import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { CategoryScale, Chart, registerables } from "chart.js";
import { useSelector } from "react-redux";
import { selectTeritorialUnitFinalData, selectTeritorialUnitVariablesName } from "../teritorialUnitManyVariablesSlice";

Chart.register(CategoryScale);
Chart.register(...registerables);

export const LineGraph = ({ measure }) => {
  const teritorialUnitFinalData = useSelector(selectTeritorialUnitFinalData);
  const teritorialUnitVariablesName = useSelector(selectTeritorialUnitVariablesName);

  const [data1, setData1] = useState(teritorialUnitFinalData.results);

  useEffect(() => {
    setData1(teritorialUnitFinalData.results)
  }, [teritorialUnitFinalData]);

  const xAxis = data1[0].values.map(value => value.year)

  const datasetsValue = data1.map(results =>
  (
    {
      label: `${(teritorialUnitVariablesName.find(variable => variable.value === results.id).label)} - wartość ${measure} w latach`,
      data: results.values.map(value => value.val),
      fill: false,
      borderWidth: 4,
      backgroundColor: '#d7d7d7',
      borderColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
      responsive: true
    }
  )
  )

  return (
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
  );
}