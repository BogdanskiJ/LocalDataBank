import React from "react";
import { nanoid } from "@reduxjs/toolkit";
import { TriangleVal, TriangleYear } from "./Triangle";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectTeritorialUnitFinalData, selectTeritorialUnitFinalValues, selectTeritorialUnitVariablesName } from "../teritorialUnitManyVariablesSlice";

export const Table = ({ measure }) => {
  console.clear();
  const teritorialUnitFinalData = useSelector(selectTeritorialUnitFinalData);
  const teritorialUnitFinalValues = useSelector(selectTeritorialUnitFinalValues);
  const teritorialUnitVariablesName = useSelector(selectTeritorialUnitVariablesName)
  const [data, setData] = useState(teritorialUnitFinalValues);


  const [newArray, setNewArray] = useState(teritorialUnitFinalValues);




  const [longestArray, setLongestArray] = useState(["", ""]);

  const getLongestArray = (newArray) => {
    newArray.forEach(element => (element.length > longestArray[0] ? setLongestArray([element.length, element.map(el => el.year)]) : ""));
    console.log("longestArray", longestArray)
  }
  getLongestArray(newArray);


  //console.log("newArray", newArray)

  // const newObject = [{ year: "1212", val0: "1234", val1: "12232" }, { year: "1212", val0: "1234", val1: "12232" }, { year: "1212", val0: "1234", val1: "12232" }]

  const displayArray = (newArray) => {
    const chwilowaTablica = [];

    //console.log("chwilowaTablica", chwilowaTablica)
  }









  //console.log("teritorialUnitVariablesName", teritorialUnitVariablesName)





  //console.log("newArray po zamieszaniu", newArray)


  const [order, setOrder] = useState(["year", "ASC"]);

  const [data1, setData1] = useState(teritorialUnitFinalData.results);

  useEffect(() => {
    setData(teritorialUnitFinalValues)
  }, [teritorialUnitFinalValues]);

  useEffect(() => {
    setData1(teritorialUnitFinalData.results)
  }, [teritorialUnitFinalData]);

  const sorting = (col) => {
    console.log("Wartość przekazywana do sortingu", col)
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


  const tbody = () => (

    data[0].map(value =>
      <>
        <tr>
          <td>
            {value.year}
          </td>
          {data.map(results =>
            <>
              <td>
                {results[data[0].indexOf(value)] ? results[data[0].indexOf(value)].val : 0}
              </td>
            </>
          )}
        </tr>
      </>
    )
  )
  displayArray(newArray)

  // console.log("data przed samym wyświetlaniem", data)
  //console.log("data1", data1)

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

// dodać sortowanie, paski przesuwne, css do tabeli











// const tbody = (data1) => (

//   data1[0].values.map(value =>
//     <>
//       <tr>
//         <td>
//           {value.year}
//         </td>
//         {data1.map(results =>
//           <>
//             <td>
//               {results.values[data1[0].values.indexOf(value)] ? results.values[data1[0].values.indexOf(value)].val : 0}
//             </td>
//           </>
//         )}
//       </tr>
//     </>
//   )
// )



// const thead = () => (
//   <tr>
//     <th onClick={() => sorting("year")}>
//       < TriangleYear order={order} />
//       {"Rok"}
//     </th>
//     {
//       data1.map(results =>
//         <th onClick={() => sorting("val")}>
//           < TriangleVal order={order} />
//           {results.id}
//         </th>
//       )
//     }
//   </tr>
// )





// const tbody = () => {

//   const chwilowaTablica = [];
//   data[0].map(value =>
//     chwilowaTablica.push
//       (
//         data.map(results =>
//           results[data[0].indexOf(value)] ? results[data[0].indexOf(value)].val : 0
//         )
//       )
//   )
//   console.log("chwilowaTablica", chwilowaTablica)
// }