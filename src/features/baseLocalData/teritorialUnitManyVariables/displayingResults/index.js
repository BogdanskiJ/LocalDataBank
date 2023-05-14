import React from "react";
import { useState } from "react";
import { selectTeritorialUnitFinalData } from "../teritorialUnitManyVariablesSlice";
import { useSelector } from "react-redux";
import { measures } from "../../../../common/measures";
import { Table } from "./Table";
import { LineGraph } from "./LineGraph";

export const Results = () => {
  const teritorialUnitFinalData = useSelector(selectTeritorialUnitFinalData);

  const [toogleButton, setToogleButton] = useState(true);

  const toggleButtonChange = () => {
    setToogleButton((state) => !state);
  };

  const measure = `[${(measures.results.find(measure => measure.id === teritorialUnitFinalData.results[0].measureUnitId).name)}]`

  return (
    <div>
      <button
        onClick={toggleButtonChange}
      >Wybierz tabelę lub wykres</button>

      {toogleButton
        ?
        <LineGraph
          measure={measure}
        />
        :
        <Table
          measure={measure}
        />
      }
    </div>
  );
}