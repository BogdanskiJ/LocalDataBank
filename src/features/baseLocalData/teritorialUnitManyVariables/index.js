import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectTeritorialUnitCategoryData,
  selectTeritorialUnitCategoryName,
  selectTeritorialUnitFinalData,
  selectTeritorialUnitGroupData,
  selectTeritorialUnitGroupName,
  selectTeritorialUnitSubGroupData,
  selectTeritorialUnitSubGroupName,
  selectTeritorialUnitVariablesData,
  selectTeritorialUnitVariablesName,
  setTeritorialUnitCategoryName,
  setTeritorialUnitGroupName,
  setTeritorialUnitSubGroupName,
  setTeritorialUnitVariablesName
} from "./teritorialUnitManyVariablesSlice";
import { nanoid } from "@reduxjs/toolkit";


export const TeritorialUnit = () => {
  const dispatch = useDispatch();

  const teritorialUnit = useSelector(selectTeritorialUnitCategoryData);
  const teritorialUnitGroup = useSelector(selectTeritorialUnitGroupData);
  const teritorialUnitSubGroup = useSelector(selectTeritorialUnitSubGroupData);
  const teritorialUnitVariables = useSelector(selectTeritorialUnitVariablesData);
  const teritorialUnitFinalData = useSelector(selectTeritorialUnitFinalData);

  const teritorialUnitCategoryName = useSelector(selectTeritorialUnitCategoryName);
  const teritorialUnitGroupName = useSelector(selectTeritorialUnitGroupName);
  const teritorialUnitSubGroupName = useSelector(selectTeritorialUnitSubGroupName);
  const teritorialUnitVariablesName = useSelector(selectTeritorialUnitVariablesName);

  return (
    <>
      <div>{
        ((teritorialUnit) ?
          <div>
            <div>
              <label>Wybierz kategorię: </label>
              <select
                value={teritorialUnitCategoryName}
                onChange={({ target }) => dispatch(setTeritorialUnitCategoryName(target.value))}
              >
                <option value="" disabled selected >Wybierz kategorię</option>
                {(teritorialUnit.results).map((unit) => (
                  <option key={unit.id} value={unit.id}>
                    {unit.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          : "nie")
      }</div>
      {(teritorialUnitCategoryName !== "")
        ?
        <div>{
          ((teritorialUnitGroup)
            ?
            <div>
              <div>
                <label>Wybierz grupę: </label>
                <select
                  value={teritorialUnitGroupName}
                  onChange={({ target }) => dispatch(setTeritorialUnitGroupName(target.value))}
                >
                  <option value="" disabled hidden>Wybierz grupę</option>
                  {(teritorialUnitGroup.results).map((unit) => (
                    <option key={unit.id} value={unit.id}>
                      {unit.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            : "")
        }</div>
        :
        ("")}

      {(teritorialUnitGroupName !== "")
        ?
        <div>{
          ((teritorialUnitSubGroup)
            ?
            <div>
              <div>
                <label>Wybierz podgrupę: </label>
                <select
                  value={teritorialUnitSubGroupName}
                  onChange={({ target }) => dispatch(setTeritorialUnitSubGroupName(target.value))}
                >
                  <option value="" disabled selected >Wybierz podgrupę</option>
                  {(teritorialUnitSubGroup.results).map((unit) => (
                    <option key={unit.id} value={unit.id}>
                      {unit.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            : "")
        }</div>
        :
        ("")}

      {(teritorialUnitSubGroupName !== "")
        ?
        <div>{
          ((teritorialUnitVariables)
            ?
            <div>
              <div>
                <label>Wybierz zmienną: </label>
                <select
                  value={teritorialUnitVariablesName}
                  onChange={({ target }) => dispatch(setTeritorialUnitVariablesName(target.value))}
                >
                  <option value="" disabled selected >Wybierz zmienną</option>
                  {(teritorialUnitVariables.results).map((unit) => (
                    <option key={unit.id} value={unit.id}>
                      {unit.n1}{" - "}{unit.n2}{" - "}{unit.n3}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            : "")
        }</div>
        :
        ("")}

      {(teritorialUnitVariablesName !== "")
        ?
        <div>
          {
            teritorialUnitFinalData
              ?
              (teritorialUnitFinalData.results).map(result => <ul key={nanoid()}>{(result.values).map(value => <li key={nanoid()}>{value.val} w {value.year} roku</li>)}</ul>)
              : ""
          }
        </div>
        :
        ("")}
    </>
  )
};