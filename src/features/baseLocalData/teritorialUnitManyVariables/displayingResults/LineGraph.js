import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { CategoryScale, Chart, registerables } from "chart.js";
import { useSelector } from "react-redux";
import { selectTeritorialUnitFinalData, selectTeritorialUnitFinalValues, selectTeritorialUnitVariablesName } from "../teritorialUnitManyVariablesSlice";

Chart.register(CategoryScale);
Chart.register(...registerables);

export const LineGraph = ({ measure, newArray }) => {
  const teritorialUnitFinalData = useSelector(selectTeritorialUnitFinalData);
  const teritorialUnitVariablesName = useSelector(selectTeritorialUnitVariablesName);
  const teritorialUnitFinalValues = useSelector(selectTeritorialUnitFinalValues);

  const [data, setData] = useState(teritorialUnitFinalValues);
  const [maxLength, setMaxLength] = useState([]);

  const [data1, setData1] = useState(teritorialUnitFinalData.results);
  // console.log("data1", data1)
  useEffect(() => {
    setData1(teritorialUnitFinalData.results)
  }, [teritorialUnitFinalData]);


  data1.forEach(element =>
    (element.values.length > (maxLength.length) ? setMaxLength(element.values) : "")
  );

  const xAxis = newArray.map(value => value.year)

  //  console.log("xAxis", xAxis)



  const datasetsValue = data1.map(results =>
  (
    {
      label: `${(teritorialUnitVariablesName.find(variable => variable.value === results.id).label)} - wartość ${measure}`,
      data: results.values.map(value => value.val),
      fill: false,
      borderWidth: 4,
      backgroundColor: '#d7d7d7',
      borderColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
      responsive: true
    }
  )
  )



  // const datasetsValue = data1.map(results =>
  //   (
  //     {
  //       label: `${(teritorialUnitVariablesName.find(variable => variable.value === results.id).label)} - wartość ${measure}`,
  //       data: results.values.map(value => value.val),
  //       fill: false,
  //       borderWidth: 4,
  //       backgroundColor: '#d7d7d7',
  //       borderColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
  //       responsive: true
  //     }
  //   )
  //   )


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