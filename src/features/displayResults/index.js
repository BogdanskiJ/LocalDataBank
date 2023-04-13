import React, { useEffect, useState } from "react";
import { useFinalData } from "./getFinalData";
import { nanoid } from "@reduxjs/toolkit";

export const DisplayResults = () => {
  // const finalData = useFinalData("071400000000", "63263");

  // const [wynik, setWynik] = useState("wstępny wynik")

  // useEffect(() => {
  //   (Array.isArray((finalData.data.results)) && finalData !== undefined) ? (
  //     setWynik((finalData.data.results).map(res => <ul key={nanoid()}>{(res.values).map(value => <li key={nanoid()}>{value.val} w {value.year} roku</li>)}</ul>))
  //   )
  //     :
  //     (console.log("finalData", finalData))
  // }, [finalData]);

  return (
    <>
      <div>
        <div>Wybrano {"071400000000"}</div>
        <div>Dane:</div>
        <div>tu wyświetlić dane dla id = {"071400000000"}</div>
        {/* {wynik} */}
      </div>

    </>
  )
};