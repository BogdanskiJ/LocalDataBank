import React from "react";
import { nanoid } from "@reduxjs/toolkit";
import { TriangleVal, TriangleYear } from "./Triangle";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectTeritorialUnitFinalData, selectTeritorialUnitFinalValues } from "../teritorialUnitManyVariablesSlice";

export const Table = ({ measure }) => {
  const teritorialUnitFinalData = useSelector(selectTeritorialUnitFinalData);
  const teritorialUnitFinalValues = useSelector(selectTeritorialUnitFinalValues);

  const [data, setData] = useState(teritorialUnitFinalValues);
  const [order, setOrder] = useState(["year", "ASC"]);

  useEffect(() => {
    setData(teritorialUnitFinalValues)
  }, [teritorialUnitFinalValues]);

  const sorting = (col) => {
    if (order[1] === "DSC") {
      const sorted = [...data].sort((a, b) =>
        a[col] > b[col] ? 1 : -1
      );
      setData(sorted);
      setOrder([col, "ASC"]);
    }
    if (order[1] === "ASC") {
      const sorted = [...data].sort((a, b) =>
        a[col] < b[col] ? 1 : -1
      );
      setData(sorted);
      setOrder([col, "DSC"]);
    }
  }

  return (
    teritorialUnitFinalData.results.map(result =>
      <table key={nanoid()}>
        <thead >
          <tr>
            <th onClick={() => sorting("val")}>{`Wartość ${measure} `}
              < TriangleVal order={order} />
            </th>
            <th onClick={() => sorting("year")}>Rok
              < TriangleYear order={order} />
            </th>
          </tr>
        </thead>
        <tbody >
          {data.map(value =>
            <tr key={nanoid()}>
              <td >{value.val}</td>
              <td >{value.year}</td>
            </tr>
          )}
        </tbody>
      </table>
    )
  );
}