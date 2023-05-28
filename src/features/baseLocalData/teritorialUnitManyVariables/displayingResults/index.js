import React from "react";
import { useState } from "react";
import { selectTeritorialUnitFinalData, selectTeritorialUnitFinalValues } from "../teritorialUnitManyVariablesSlice";
import { useSelector } from "react-redux";
import { measures } from "../../../../common/measures";
import { Table } from "./Table";
import { LineGraph } from "./LineGraph";
import { Tables } from "./Tables";
import { useEffect } from "react";

export const Results = () => {
  console.clear()
  const teritorialUnitFinalData = useSelector(selectTeritorialUnitFinalData);
  const teritorialUnitFinalValues = useSelector(selectTeritorialUnitFinalValues);

  const [toogleButton, setToogleButton] = useState(true);
  const [data, setData] = useState(teritorialUnitFinalData);

  const [data1, setData1] = useState(teritorialUnitFinalValues);

  console.log("data1", teritorialUnitFinalValues)
  console.log("teritorialUnitFinalData", teritorialUnitFinalData)

  const [newArray, setNewArray] = useState([]);
  const [newArray2, setNewArray2] = useState([]);

  const addNewYearToArray = () => {
    let namesArray = [];
    data.results.map(result =>
      namesArray = [...namesArray, result.id]
    )
    let temporaryArray = [];
    (data1.map(values =>
      values.map(value =>
        temporaryArray = [...temporaryArray, value.year]
      )
    ))
    const uniqueArray = [...new Set(temporaryArray)]
    const finalArray = (uniqueArray.map(element => ({ year: element })))
    setNewArray2(finalArray);
  }

  const addValuesToArray = () => {
    let valuesArray = [...newArray2];
    let valuesArray2 = [...newArray2];
    let index = "";

    data.results.map(results =>
      results.values.map(values =>
      (
        index = valuesArray.findIndex(element => element.year === values.year),
        (valuesArray2[index] = { ...valuesArray2[index], values: { ...valuesArray2[index].values, [results.id]: values.val } })
      )
      )
    )
    console.log("valuesArray", valuesArray2);
    setNewArray(valuesArray2);
  }

  useEffect(() => {
    addNewYearToArray();
  }, [teritorialUnitFinalValues]);

  useEffect(() => {
    addValuesToArray();
  }, [newArray2]);

  const toggleButtonChange = () => {
    setToogleButton((state) => !state);
  };

  const measure = `[${(measures.results.find(measure => measure.id === teritorialUnitFinalData.results[0].measureUnitId).name)}]`

  return (
    <div>
      {console.log("newArray ostatecznie", newArray)}
      <button
        onClick={toggleButtonChange}
      >Wybierz tabelę lub wykres</button>
      <Tables />
      {toogleButton
        ?
        <LineGraph
          measure={measure}
          newArray={newArray}
        />
        :
        <Table
          measure={measure}
        />
      }
    </div>
  );
}