import React from "react";
import { nanoid } from "@reduxjs/toolkit";
import { TriangleVal, TriangleYear } from "./Triangle";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectTeritorialUnitFinalData, selectTeritorialUnitFinalValues, selectTeritorialUnitVariablesName } from "../teritorialUnitManyVariablesSlice";

export const Table = ({ measure, newArray2 }) => {
  const teritorialUnitFinalData = useSelector(selectTeritorialUnitFinalData);
  const teritorialUnitFinalValues = useSelector(selectTeritorialUnitFinalValues);
  const teritorialUnitVariablesName = useSelector(selectTeritorialUnitVariablesName)

  const [names, setNames] = useState(teritorialUnitVariablesName);
  const [data, setData] = useState(teritorialUnitFinalValues);
  const [newArray3, setNewArray3] = useState(newArray2);
  const [order, setOrder] = useState(["year", "ASC"]);
  const [data1, setData1] = useState(teritorialUnitFinalData.results);
  const [newArray4, setNewArray4] = useState(newArray2);

  useEffect(() => {
    setNewArray3(newArray2)
    // setData(teritorialUnitFinalValues)
  }, [newArray2, teritorialUnitFinalValues]);

  useEffect(() => {
    changeNewArray4();
  }, [newArray2]);

  useEffect(() => {
    setData1(teritorialUnitFinalData.results)
  }, [teritorialUnitFinalData]);

  const changeNewArray4 = () => {
    let newArray5 = [];
    newArray2.map(results =>
      newArray5 = [...newArray5, results.values]
    )
    setNewArray4(newArray5)
  }

  const sorting = (col) => {
    console.log("order na początku", order);
    console.log("Wartość przekazywana do sortingu", col);

    if (order[1] === "DSC") {
      console.log("newArray3 przekazana na początku do sortingu", newArray3)
      const sorted = [...newArray3].sort((a, b) =>
        a[col.id] > b[col.id] ? 1 : -1
      );
      setNewArray3(sorted);
      console.log("sorted", sorted)
      setOrder([col.id, "ASC"]);
    }

    if (order[1] === "ASC") {
      console.log("newArray3 przekazana na początku do sortingu", newArray3)
      const sorted = [...newArray3].sort((a, b) =>
        a[col.id] < b[col.id] ? 1 : -1
      );
      setNewArray3(sorted);
      console.log("sorted", sorted)
      setOrder([col.id, "DSC"]);
    }
  }

  const thead = (data1) => (
    <tr>
      <th onClick={() => sorting("year")}>
        < TriangleYear order={order} />
        {"Rok"}
      </th>
      {
        data1.map(results =>
          <th onClick={() => sorting(results)}>
            < TriangleVal order={order} />
            {(teritorialUnitVariablesName.find(name => name.value === results.id).label)}
          </th>
        )
      }
    </tr>
  )

  const tbody = () => {
    return (
      newArray3.map(results =>
        <tr>
          <td>{results.year}</td>
          {
            data1.map(element =>
            ((results.values[element.id]) ?
              (<td>{results.values[element.id].val}</td>) :
              (<td>0</td>))
            )
          }
        </tr>
      )
    )
  }

  return (
    <>
      {
        <table>
          <thead>
            {thead(data1)}
          </thead>
          <tbody>
            {tbody()}
          </tbody>
        </table>
      }
    </>
  );
}